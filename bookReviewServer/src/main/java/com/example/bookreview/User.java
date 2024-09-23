package com.example.bookreview;

import java.util.Objects;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
public class User {

    private static List<User> userList = new ArrayList<>();
    private String name;
    private String email;
    private String password;

    // Getters

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }


    // Setters

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Other Methods
    public static void addUser(User user) {
        userList.add(user);
    }

    public static User findUser(String email, String password) {
        for (User user : userList) {
            if (Objects.equals(email, user.getEmail()) && Objects.equals(password, user.getPassword())) {
                return user;
            }
        }
        return null;
    }

    public static List<User> getAllUsers() {
        return userList;
    }

    public User createAccount(User user) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a name:");
        String inputName = scanner.nextLine();

        System.out.println("Enter an email:");
        String inputEmail = scanner.nextLine();

        System.out.println("Enter an password:");
        String inputPassword = scanner.nextLine();

        if (findUser(inputEmail, inputPassword) != null) {
            System.out.println("User already has an account.");
            return null;
        } else {
            user.setName(inputName);
            user.setEmail(inputEmail);
            user.setPassword(inputPassword);
            addUser(user);
            return user;
        }
    }

    public void login() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your email:");
        String inputEmail = scanner.nextLine();

        System.out.println("Enter your password:");
        String inputPassword = scanner.nextLine();

        User loggedInUser = findUser(inputEmail, inputPassword);
        if (loggedInUser != null) {
            System.out.println("User logged in: " + loggedInUser.getName());
        } else {
            System.out.println("Invalid email or password");
        }
    }
}