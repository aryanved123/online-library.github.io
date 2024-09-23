package com.example.bookreview;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Path("/books")
public class BookResource {

    @GET
    @Produces("application/json")
    public Response getBooks() {
        try {
            // Load the resource using the ClassLoader
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("books.json");
            if (inputStream == null) {
                // throws error
                throw new RuntimeException("books.json not found in resources directory");
            }

            // Reads the books.json file
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            StringBuilder jsonString = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonString.append(line);
            }
            reader.close();

            JSONArray jsonArray = new JSONArray(jsonString.toString());

            // Processes the objects in books.json
            List<Book> bookList = new ArrayList<>();
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject bookObject = jsonArray.getJSONObject(i);
                String title = bookObject.getString("title");
                String author = bookObject.getString("author");
                int yearPublished = bookObject.getInt("yearPublished");
                String isbn = bookObject.getString("isbn");
                String url = bookObject.getString("img-src");
                String synp = bookObject.getString("synp");
                Book book = new Book(title, author, isbn, yearPublished, url, synp);
                bookList.add(book);
            }
            return Response.ok(bookList).build();
        } catch (Exception e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }
    @GET
    @Path("/{title}")
    @Produces("application/json")
    public Response getABook(@PathParam("title") String title) {
        try {
            // Loads the resource using the ClassLoader
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("books.json");
            if (inputStream == null) {
                // Resource not found
                throw new RuntimeException("books.json not found in resources directory");
            }

            // Read the data from json file
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            StringBuilder jsonString = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonString.append(line);
            }
            reader.close();

            JSONArray jsonArray = new JSONArray(jsonString.toString());

            // Find the book by title
            JSONObject foundBook = null;
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject bookObject = jsonArray.getJSONObject(i);
                if (bookObject.getString("title").equalsIgnoreCase(title)) {
                    foundBook = bookObject;
                    break;
                }
            }

            if (foundBook == null) {
                //throws error
                throw new RuntimeException("Book with title " + title + " not found");
            }

            // Return the found book wrapped in an array
            String author = foundBook.getString("author");
            int yearPublished = foundBook.getInt("yearPublished");
            String isbn = foundBook.getString("isbn");
            String url = foundBook.getString("img-src");
            String synp = foundBook.getString("synp");
            Book book = new Book(title, author, isbn, yearPublished, url, synp);

            // Wrap the book in an array
            List<Book> books = new ArrayList<>();
            books.add(book);

            return Response.ok(books).build();
        } catch (Exception e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }
}
