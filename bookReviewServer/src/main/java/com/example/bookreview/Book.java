package com.example.bookreview;

public class Book {

    protected String title;
    protected String author;
    protected String ISBN;
    protected int yearPublished;
    protected String url;
    protected String synp;


    // Constructor
    public Book(String title, String author, String ISBN, int yearPublished, String url, String synp) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.yearPublished = yearPublished;
        this.url = url;
        this.synp = synp;
    }

    //Getters

    public String getTitle() {
        return this.title;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getISBN() {
        return this.ISBN;
    }

    public int getyearPublished() {
        return this.yearPublished;
    }

    public String getUrl() {
        return url;
    }

    public String getSynp() {
        return synp;
    }

    //Setters

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public void setyearPublished(int yearPublished) {
        this.yearPublished = yearPublished;
    }

    public void setUrl(String url){
        this.url = url;
    }

    public void setSynp(String synp) {
        this.synp = synp;
    }
}