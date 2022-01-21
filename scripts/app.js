// IIFE -- Immediatly Invoked Function Express
// AKA anon self-executing function
(function()
{
    
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
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the article paragraph.</p>`;
        //step 3 - Configure the new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        //MainParagraph.textContent = "This is the Main Paragraph!";
        let FirstString = "This is";
        let SecondString = `${FirstString} The Main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class", "container");
        //step 4 Perform Insertion / deletion


        //example of insert after / append.
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        documentBody.appendChild(Article);
        // documentBody.innerHTML = `
        //     <div class="container">
        //     <h1 class="display-1">Hello, World!</h1>
        //     <p class = "mt-5">and... what do you think of this!</p>
        // `;

        //example of insert before
        //MainContent.before(MainParagraph);

        //Example of deletion
        //document.getElementById("AboutUsButton").remove();

    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }
    function DisplayServicesPage()
    {
        console.log("Services Page");
        
    }
    function DisplayAboutPage()
    {
        console.log("About Page");
        
    }
    function DisplayContactPage()
    {
        console.log("Contact Page");
        
    }

    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
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
