/**
 * Name: Samuel Hasham
 * Student ID: 100708080   
 * Date Completed:
 * 
 * 
 */
class User {
    constructor(firstName = "",lastName = "",username = "",email = "",password = "")
    {
        //set attributes
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Username = username;
        this.Email = email;
        this.Password = password;
        //unsure why this wont work when sending it to the console.log in displayregister
        toString()
        {
            return `First Name : ${this.FirstName}\nLast Name : ${this.LastName}\nUsername : ${this.Username} \nEmail : ${this.Email} \nPassword : ${this.Password}`;
        }
    }
};
// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function

"use strict";
(function()
{
    /**
     * This function uses AJAX open a connection to the url and returns data to the callback function
     *
     * @param {string} method
     * @param {string} url
     * @param {Function} callback
     */
    function AjaxRequest(method, url, callback)
    {
        // step 1 - create a new XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - create an event
        XHR.addEventListener("readystatechange", ()=>
        {
            if(XHR.readyState === 4 && XHR.status === 200)
            {
               callback(XHR.responseText);
            }
        });

        // step 3 - open a request
        XHR.open(method, url);

        // step 4 - send the request
        XHR.send();
    }

    /**
     * This function loads the Navbar from the header file and injects into the page
     *
     * @param {string} data
     */
    function LoadHeader(data)
    {
        $("header").html(data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }

    function DisplayHome()
    {
        console.log("Home Page");

        

        $("#AboutUsButton").on("click", () => 
        {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);

        $("body").append(`
        <article class="container">
            <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
            </article>`);
    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProjectsPage()
    {
        console.log("Our Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Our Services Page");
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

    /**
     * This method validates an input text field in the form and displays
     * an error in the message area
     *
     * @param {string} input_field_ID
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let messageArea = $("#ErrorMessage").hide();
        
        $("#" + input_field_ID).on("blur", function()
        {
            let inputFieldText = $(this).val();

            if(!regular_expression.test(inputFieldText))
            {
                $(this).trigger("focus").trigger("select"); 
                messageArea.addClass("alert alert-danger").text(error_message).show(); 
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
        });
    }

    function ContactFormValidation()
    {
        ValidateField("fullName", /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]{1,})+([\s,-]([A-Z][a-z]{1,}))*$/,"Please enter a valid Full Name.");
        ValidateField("contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid Contact Number.");
        ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
    }
    /**
     *
     *For comparing two strings to see if they are equal.
     I just use ==, There were interesting ways i saw online of doing it but I didn't know if it was ok to use.
     * @param {*} password1 first password field to compare
     * @param {*} password2 second password field to compare
     */
    function testEqualPasswords(password1,password2)
    {

        let messageArea = $("#ErrorMessage").hide();
      
        $("#confirmPassword").on("blur", function()
        {
           
            // I was able to get this somewhat workin using normalize() although i
            //got errors in my console when using it so i refrained. There is a bug with
            //this implementation, but i was unsure how else to verify.
            if(password1 == password2)
            {
               //all is good to hide error
                messageArea.removeAttr("class").hide();
            }
            else
            {
               //if doesnt match show error.
                
                messageArea.addClass("alert alert-danger").text("Please Match your password.").show(); 
            }
        });


        
      
    }
    /**
     * A function to check each field on the registration form and verify that they meet the constraints for a user.
     * Very similar to the contactformvalidation.
     */
    function RegisterFormValidation()
    {
        ValidateField("FirstName", /^([A-Z][a-z]{1,})$/,"Please enter a valid First Name with a leading Capital letter and atleast 2 characters.");
        ValidateField("lastName", /^([A-Z][a-z]{1,})$/,"Please enter a valid Last Name with a leading Capital letter and atleast 2 characters.");
        ValidateField("password", /^([A-Za-z0-9._-\S]{6,})$/ , "Please enter a Password that is 6 characters long.");
        
        ValidateField("confirmPassword", /^([A-Za-z0-9._-\S]{6,})$/, "Please Match your password.");
        ValidateField("emailAddress", /^([a-zA-Z0-9._-]{8,})+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,10}$/, "Please enter a valid Email Address, it must be 8 characters as a minimum.");
    }
    
    
    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        ContactFormValidation();
        
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function()
        {
            if(subscribeCheckbox.checked)
            { 
                AddContact(fullName.value, contactNumber.value, emailAddress.value);
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; // data container -> add deserialized data from the localStorage

            let keys = Object.keys(localStorage); // returns a string array of keys

            let index = 1; // counts how many keys

            // for every key in the keys array (collection), loop
            for (const key of keys) 
            {
                let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                let contact = new core.Contact(); // create a new empty contact object
                contact.deserialize(contactData);

                // inject a repeatable row into the contactList
                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click",() =>
            {
                location.href = "edit.html#add";
            });

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }

                // refresh after deleting
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function()
            {
                location.href = "edit.html#" + $(this).val();
            });
        }
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
                
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();
                        // Add Contact
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // refresh the contact-list page
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
            default:
                {
                    // get the contact  info from localStorage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when editButton is pressed - update the contact
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-list
                        location.href = "contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href = "contact-list.html";
                    });
                }
                break;
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");
        let messageArea = $("#messageArea");
        messageArea.hide();

        $("#loginButton").on("click", function()
        {

        


            let success = false;

            // create an empty user object
            let newUser = new core.User();

            // use jQuery shortcut to lod the users.json file
            $.get("./Data/users.json", function(data)
            {
                // for every user in the users.json file, loop
                for (const user of data.users) 
                {
                    // check if the username and password entered matches the user data
                    if(username.value == user.Username && password.value == user.Password)
                    {
                        console.log("conditional passed!");
                        // get the user data from the file and assign it to our empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                 // if username and password matches..success! -> perform the login sequence
                if(success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    // hide any error message
                    messageArea.removeAttr("class").hide();

                    // redirect the user to the secure area of the site - contact-list.html
                    location.href = "contact-list.html";
                    // Add username to Nav in the proper spot.
                    var usernameDisplay = $("#username").text;
                    let contactLink = document.getElementById("contact");
                    let usernameNavDisplay = $("<p></p>");
                    usernameNavDisplay.innerHTML = `<p> `  + usernameDisplay + ` </p>`;
                    contactLink.after(usernameNavDisplay);  
                }
                else
                {
                    // display an error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Credentials").show();
                }
            });
        });

        $("#cancelButton").on("click", function()
        {
            // clear the login form
            document.forms[0].reset();

            // return to the home page
            location.href = "index.html";
        });

        
    }
    /**
     * I added a extra element in the navbar to display the username but cannot get the text to actually output to the form
     * Unsure of how to fix this as ive had this similar problem earlier.
     * but if logged in the login becomes logout and there is a designated spot for the users username added after the
     * contact link.
     */
    function CheckLogin()
    {
        // if user is logged in, then...
        if(sessionStorage.getItem("user"))
        {
                
            var usernameDisplay = $("#username").html;
            let contactLink = document.getElementById("contact");
            let usernameNavDisplay = $("<p></p>");
            usernameNavDisplay.innerHTML = `<p> `  + usernameDisplay.text + ` </p>`;
            contactLink.after(usernameNavDisplay);  
            // swap out the login link for logout
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            $("#logout").on("click", function()
            {
                // perform logout
                sessionStorage.clear();
                
                // redirect back to login page
                location.href = "login.html";
            });
        }
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
        $("#mainContent").prepend(`<div id="ErrorMessage" class="alert alert-success"></div>`);
        RegisterFormValidation();
        testEqualPasswords();

        let submitButton = document.getElementById("submitButton");
        //sending event as a parameter gets rid of the depricated error i was receiving
        // although it still doesnt work as the page does submit. Unsure how to fix this.
        submitButton.addEventListener("click", function()
        {
            event.preventDefault();         
            let firstname = $("#FirstName").text();
            let lastname = $("#lastName").text();
            let username = firstname + lastname;
            let email = $("#emailAddress").text();
            let password = $("#password").text();
            let enteredUser = new User(firstname.value,lastname.value,username.value,email.value,password.value);
            console.log(enteredUser.toString());

        });


        //idk why this wont work :l
        // let errorWarning = document.createElement("<div>")
        //errorWarning.innerHTML(`<div id="ErrorMessage" class="alert alert-success">sample</div>`);
        //$("mainContent").after(errorWarning); 
    }

    // named function
    function Start()
    {
        console.log("App Started!!");

        AjaxRequest("GET", "header.html", LoadHeader);

        switch (document.title) 
        {
          case "Home":
            DisplayHome();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Projects":
            DisplayProjectsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          case "Edit":
            DisplayEditPage();
            break;
            case "Login":
            DisplayLoginPage();
            break;
            case "Register":
            DisplayRegisterPage();
            break;
        }

        
    }
    

    window.addEventListener("load", Start);


})();