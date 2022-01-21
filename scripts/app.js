// IIFE -- Immediatly Invoked Function Express
// AKA anon self-executing function
(function()
{

    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href="about.html";
        });
        console.log(AboutUsButton);


    }

    function DisplayProductsPage()
    {
        
    }
    function DisplayServicesPage()
    {
        
    }
    function DisplayAboutPage()
    {
        
    }
    function DisplayContactPage()
    {
        
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
                DisplayHomePage();
                break;
            case "Home":
            DisplayHomePage();
            break;
            case "Home":
            DisplayHomePage();
            break;
            case "Home":
            DisplayHomePage();
            break;

        }

       




    }

    window.addEventListener("load", Start);




})();
