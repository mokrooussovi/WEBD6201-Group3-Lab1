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
        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view3.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "left";
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view4.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "center right";
        
        // Step 1. get an entry point(s) (insertion point / deletion point) reference 
        let DocumentBody = document.body;
        let MainContent = document.getElementsByTagName("main")[0];

        // Step 2. create an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class ="mt-3">Details on favourite projects</p>`

        // Step 3. configure the new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "WEBD6201 JavaScript exercise allows to create contact's list with use of localStorage";
        Article.setAttribute("class", "container");

        // Step 4. Add / Insert the new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
 
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view2.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "top right";
        

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view8.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "right";
        
    }

    function DisplayRecourcesPage()
    {
        console.log("Human Resources Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view9.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "right";
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view7.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "top right";
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