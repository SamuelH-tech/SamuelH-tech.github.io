/**     
 * Author: Samuel Hasham
 * Student Number: 100708080
 * Desc: My java script for displaying pages and creating event listeners as well as inserting elements.
 * Date Completed: 2022-02-06.
 */

// IIFE -- Immediatly Invoked Function Express
// AKA anon self-executing function
(function()
{
    /**
     * Displays the home page as well as adds the event listener to link to the about page from the button on the html page.
     * and inserts two bits of text through <P> tags. There are also changes to the top header including a new link and a
     * edit to the products.html page. In addition there is also a bottom nav bar added.
     */
    function DisplayHomePage()
    {
        
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href="about.html";
        });
        console.log(AboutUsButton);

        
        // Step 1 - get a reference to an entry point(s) (insertion / deletion)
        let MainContent = document.getElementsByTagName("main")[0];
        let documentBody = document.body;
        //step 2 - Create a HTML element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">I like things like music, video games, and nature. I always found myself interested in computers and am taking this course as lots of different languages and techniques appeal to me.</p>`;
        //step 3 - Configure the new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        //Main paragraph content.
        let WelcomeString = "Welcome to Samuel Hasham's webpage. A small bit about me is I enjoy the outdoors and video games.\r\nI am currently a full time student at durham college working towards my CPGM diploma.";
        //add background image.
        document.body.style.backgroundImage = "url('../content/home-background.png')";
       
        MainParagraph.textContent = WelcomeString;
        Article.setAttribute("class", "container");
        

        //create a new nav link for the new header element.
        let humanResourcesLink = document.createElement("nav-link");
        humanResourcesLink.innerHTML = `<a class="nav-link" href="human-resources.html"><i class="fab fa-hire-a-helper"></i>HR</a>`;
        $("#about-button").after(humanResourcesLink);
        
        //insert after / append.
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        documentBody.appendChild(Article);
        // Add human resources to Nav in the proper spot & change products to projects.
        let productsLink = document.getElementById("products-link");
        productsLink.innerHTML = `<a class="nav-link" href="projects.html"><i class="fas fa-project-diagram"></i>Projects</a>`;
        //get a current timestamp for navbar reason.
        let currenttime = new Date();
        //create bottom nav
        let bottomNav = document.createElement("nav");
        bottomNav.innerHTML = `<nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" id="bottomnav" href="#">Fixed bottom</a>
        </nav`;
       documentBody.append(bottomNav);
       document.getElementById(`bottomnav`).innerHTML = currenttime + `Copyright Samuel Hasham 2022<span>&#169;</span>`;
    

    }
    /**
     * Displays the Projects page as well as adds the images that relate to the <P> tags that have been added.
     * inserts two bits of text through <P> tags. There are also changes to the top header including a new link and a
     * edit to the products.html page. In addition there is also a bottom nav bar added.
     */
    function DisplayProjectsPage()
    {
         // Step 1 - get a reference to an entry point(s) (insertion / deletion)
         let MainContent = document.getElementsByTagName("main")[0];
         let documentBody = document.body;
         //step 2 - Create a HTML element in memory
         let MainParagraph = document.createElement("p");
         let Article = document.createElement("article");
         let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">The project required me to read a file and store the info so that it was properly stored, then format respective headings, calculate the extra fields, and track the totals.
          The importance of formatting output for users was really proven to me when i saw the output with minimal formatting done.</p>`;
         //step 3 - Configure the new element
         MainParagraph.setAttribute("id", "MainParagraph");
         MainParagraph.setAttribute("class", "mt-3");
         //Main paragraph content.
         let WelcomeString = "Welcome to my Projects! One of the projects I enjoyed learning a language for was my cobol assignment to take a raw input file and produce a formatted report with calculated totals.\r\n Because edited picture's cannot have calculations done on them i needed two sets of variables, one for calculation, and one for output. Without a formatted output the report is hard for humans to read and showed me how far formatting pages has come since when COBOL was created.";
         MainParagraph.textContent = WelcomeString;
         Article.setAttribute("class", "container");
        // creating and appending an image.
         let mafdOutputs = document.createElement("IMG");
         mafdOutputs.setAttribute("src", "../content/MAFD-Formatted-Vars.png");
         mafdOutputs.setAttribute("width", "305");
         mafdOutputs.setAttribute("height", "265");
         mafdOutputs.setAttribute("alt", "Formatted COBOL variables to display info.");
         documentBody.appendChild(mafdOutputs);

         let mafdCalc = document.createElement("IMG");
         mafdCalc.setAttribute("src", "../content/MAFD-calculating-logic.png");
         mafdCalc.setAttribute("width", "305");
         mafdCalc.setAttribute("height", "265");
         mafdCalc.setAttribute("alt", "Formatted COBOL variables to allow for calculations before passing info.");
         documentBody.appendChild(mafdCalc);
         
        
         
        
        
        
         //step 2 - Create a HTML element in memory
         let SecondParagraph = document.createElement("p");
         let SecondArticle = document.createElement("article-Two");
         let Article2Paragraph = `<p id="Article-2-Paragraph" class="mt-3">This project involved creating a multi-page website for calculating a piecework workers pay based on a set of variables. It was my first time using MVC and I am interested in learning more about it.</p>`;
         //step 3 - Configure the new element
         SecondParagraph.setAttribute("id", "Article-two-Paragraph");
         SecondParagraph.setAttribute("class", "mt-3");
         //add content.
         let ProjectTwo = "My second project which is also recent was the IncInc website I made in Net Dev. It was our first introduction to MVC pages and using C# to create forms and links was fun and the form creation was a massive leap fordward as far as using regular windows forms. It was a fairly non complex website but the development process was unlike any other webpage i've made.";
         SecondParagraph.textContent = ProjectTwo;
         SecondArticle.setAttribute("class", "container");
         
        
         let IncIncPage = document.createElement("IMG");
         IncIncPage.setAttribute("src", "../content/IncIncHome.png");
         IncIncPage.setAttribute("width", "700");
         IncIncPage.setAttribute("height", "355");
         IncIncPage.setAttribute("alt", "IncInc Home webpage.");
         
 
          // Add human resources to Nav in the proper spot & change products to projects.
        let productsLink = document.getElementById("products-link");
        productsLink.innerHTML = `<a class="nav-link" href="projects.html"><i class="fas fa-project-diagram"></i>Projects</a>`;

        let humanResourcesLink = document.createElement("nav");
        humanResourcesLink.innerHTML = `<a class="nav-link" href="human-resources.html"><i class="fab fa-hire-a-helper"></i>HR</a>`;
        $("#about-button").after(humanResourcesLink);

         //append.
         MainContent.appendChild(MainParagraph);
         Article.innerHTML = ArticleParagraph;
         documentBody.appendChild(Article);
         //Appending second projects information
         documentBody.appendChild(SecondParagraph);
         SecondArticle.innerHTML = Article2Paragraph;
         documentBody.appendChild(SecondArticle);
         documentBody.appendChild(IncIncPage);

         
         let currenttime = new Date();
        //create bottom nav
        let bottomNav = document.createElement("nav");
        bottomNav.innerHTML = `<nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" id="bottomnav" href="#">Fixed bottom</a>
        </nav`;
        documentBody.append(bottomNav);
        document.getElementById(`bottomnav`).innerHTML = currenttime + `Copyright Samuel Hasham 2022<span>&#169;</span>`;
    


        console.log("Projects Page");
    }
    /**
     * Displays the Services page.
     * inserts two bits of text through <P> tags. There are also changes to the top header including a new link and a
     * edit to the products.html page. In addition there is also a bottom nav bar added.
     */
    function DisplayServicesPage()
    {
        console.log("Services Page");

         // Step 1 - get a reference to an entry point(s) (insertion / deletion)
         let MainContent = document.getElementsByTagName("main")[0];
         let documentBody = document.body;
         //step 2 - Create a HTML element in memory
         let MainParagraph = document.createElement("p");
         let Article = document.createElement("article");
         let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">I am a dedicated, fast learner and look fordward to my future work and learning in IT.</p>`;
         //step 3 - Configure the new element
         MainParagraph.setAttribute("id", "MainParagraph");
         MainParagraph.setAttribute("class", "mt-3");
         //Main paragraph content.
         let WelcomeString = "Welcome to my info / about me page! I am currently a full-time student and part time associate at walmart. I enjoy music and video games in my offtime, and also enjoy nature and just generally being outdoors.";
 
         document.body.style.backgroundImage = "url('../content/home-background.png')";
        
         MainParagraph.textContent = WelcomeString;
         Article.setAttribute("class", "container");
         //step 4 Perform Insertion / deletion
 
         let CustomerSatisfaction = document.createElement("IMG");
         CustomerSatisfaction.setAttribute("src", "../content/Customer-Service.png");
         CustomerSatisfaction.setAttribute("width", "300");
         CustomerSatisfaction.setAttribute("height", "300");
         CustomerSatisfaction.setAttribute("alt", "Customer Service Guaranteed.");
         documentBody.appendChild(CustomerSatisfaction);

         //example of insert after / append.
         MainContent.appendChild(MainParagraph);
         Article.innerHTML = ArticleParagraph;
         documentBody.appendChild(Article);
        
        // Add human resources to Nav in the proper spot & change products to projects.
        let productsLink = document.getElementById("products-link");
        productsLink.innerHTML = `<a class="nav-link" href="projects.html"><i class="fas fa-project-diagram"></i>Projects</a>`;

        let humanResourcesLink = document.createElement("nav");
        humanResourcesLink.innerHTML = `<a class="nav-link" href="human-resources.html"><i class="fab fa-hire-a-helper"></i>HR</a>`;
        $("#about-button").after(humanResourcesLink);

        let currenttime = new Date();
        //create bottom nav
        let bottomNav = document.createElement("nav");
        bottomNav.innerHTML = `<nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" id="bottomnav" href="#">Fixed bottom</a>
        </nav`;
       documentBody.append(bottomNav);
       document.getElementById(`bottomnav`).innerHTML = currenttime + `Copyright Samuel Hasham 2022<span>&#169;</span>`;
    
    
    }
    /**
     * Displays the about page as well as a link to my resume.
     * and inserts two bits of text through <P> tags. There are also changes to the top header including a new link and a
     * edit to the products.html page. In addition there is also a bottom nav bar added.
     */
    function DisplayAboutPage()
    {
        console.log("About Page");
           
          // Step 1 - get a reference to an entry point(s) (insertion / deletion)
          let MainContent = document.getElementsByTagName("main")[0];
          let documentBody = document.body;
          //step 2 - Create a HTML element in memory
          let AboutParagraph = document.createElement("p");
          let Article = document.createElement("article");
          let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">When I am given a task or have to fulfill a service I always strive to create something that the client will enjoy, without going overboard & causing unnecessary costs. Clients are guaranteed a system built exactly to their needs and specifications.</p>`;
          //step 3 - Configure the new element
          AboutParagraph.setAttribute("id", "AboutParagraph");
          AboutParagraph.setAttribute("class", "mt-3");
          //Main paragraph content.
          let WelcomeString = "Welcome to The about me page!. I offer basic website creation & am educated in C#, C++, basic python, as well as HTML and php. On the side I also offer system designing & creating services for desktops.";
  
          document.body.style.backgroundImage = "url('../content/home-background.png')";
         
          AboutParagraph.textContent = WelcomeString;
          Article.setAttribute("class", "container");
          //Creating a link
          
          let ResumeLink = document.createElement('a');
          let linkText = document.createTextNode("My Resume");
          ResumeLink.appendChild(linkText);
          ResumeLink.title = "My Resume";
          ResumeLink.href = "https://dconline-my.sharepoint.com/:w:/g/personal/samuel_hasham_dcmail_ca/EYLlYGOPdGJIq6VmRjkNMjQBRXF5HDFVBjnPzLd4eY7TgQ?e=PFEWau";
          ResumeLink.setAttribute("class", "mt-3");
          //Appending my resume.
          MainContent.appendChild(ResumeLink);
          
        
 
          //example of insert after / append.
          MainContent.appendChild(AboutParagraph);
          Article.innerHTML = ArticleParagraph;
          documentBody.appendChild(Article);


           // Add human resources to Nav in the proper spot & change products to projects.
        let productsLink = document.getElementById("products-link");
        productsLink.innerHTML = `<a class="nav-link" href="projects.html"><i class="fas fa-project-diagram"></i>Projects</a>`;

        let humanResourcesLink = document.createElement("nav");
        humanResourcesLink.innerHTML = `<a class="nav-link" href="human-resources.html"><i class="fab fa-hire-a-helper"></i>HR</a>`;
        $("#about-button").after(humanResourcesLink);

          
        let currenttime = new Date();
        //create bottom nav
        let bottomNav = document.createElement("nav");
        bottomNav.innerHTML = `<nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" id="bottomnav" href="#">Fixed bottom</a>
        </nav`;
       documentBody.append(bottomNav);
       document.getElementById(`bottomnav`).innerHTML = currenttime + `Copyright Samuel Hasham 2022<span>&#169;</span>`;
    
    }
    /**
     * Displays the Contact page as well as adds the event listener to print the field outputs to console and redirect after 3 seconds.
     * A form for contact saving. There are also changes to the top header including a new link and a
     * edit to the products.html page. In addition there is also a bottom nav bar added.
     */
    function DisplayContactPage()
    {
        console.log("Contact Page");
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");
        let documentBody = document.body;    
        
        sendButton.addEventListener("click", function()
        {
           
                //output to console
                console.log($("#fullName").val());
                console.log($("#contactNumber").val());
                console.log($("#emailAddress").val());
                console.log($("#message").val());
                
                //delay the redirect
                window.setTimeout(function() {
                    window.location.href = "index.html";
        
                }, 3000);
                
            }
            
           
        );
        let currenttime = new Date();
        //create bottom nav
        let bottomNav = document.createElement("nav");
        bottomNav.innerHTML = `<nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" id="bottomnav" href="#">Fixed bottom</a>
        </nav`;
       documentBody.append(bottomNav);
       document.getElementById(`bottomnav`).innerHTML = currenttime + `Copyright Samuel Hasham 2022<span>&#169;</span>`;
    
        
        
    }
  
    /**
     *switch case for which display is shown based on the pages title.
     *
     */
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Projects":
                DisplayProjectsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About us":
                DisplayAboutPage();
                break;
            case "Contact us":
                DisplayContactPage();
                break;
            
        }

       




    }

    window.addEventListener("load", Start);




})();
