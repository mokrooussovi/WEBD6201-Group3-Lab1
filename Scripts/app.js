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
        document.body.style.backgroundSize = "930px 1500px";
        document.body.style.backgroundPosition = "center right";
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view4.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "top left";
 
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view7.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1100px 800px";
        document.body.style.backgroundPosition = "top right";
        

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view10.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "400px 600px";
        document.body.style.backgroundPosition = "100px 300px";

        
    }

    function DisplayRecourcesPage()
    {
        console.log("Human Resources Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view2.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "right";
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view1.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "800px 600px";
        document.body.style.backgroundPosition = "500px 400px";

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault(); // right now for testing only

            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage); // returns a list of keys from localStorage

            let index = 1;

            // for every key in the keys string array
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // get localStorage data value

                let contact = new Contact(); // create an empty Contact object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>`;
                
                index++;
            }

            contactList.innerHTML = data;
        }
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
            case "Contact-List":
                DisplayContactListPage();
                break;
        }
       
    }

    window.addEventListener("load", Start);

})();