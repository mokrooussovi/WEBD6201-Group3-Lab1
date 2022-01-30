// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    function DisplayHomePage()
    {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // Step 1. get an entry point(s) (insertion point / deletion point) reference 
        let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view6.png)";

    }

    function DisplayProductsPage()
    {
        console.log("Products Page");

        let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view3.png)";
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");

        let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view2.png)";

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view8.png)";
        
    }

    function DisplayRecourcesPage()
    {
        console.log("Human Resources Page");

        let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view5.png)";
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");

        let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view7.png)";
    }


    // named function option
    function Start()
    {
        console.log("App Started!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Human Resources":
                DisplayRecourcesPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
       
    }

    window.addEventListener("load", Start);

})();