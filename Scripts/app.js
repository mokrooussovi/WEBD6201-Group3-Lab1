// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function


(function()
{
    
    // import { ReplaceLink } from './functions.js';
    function DisplayHomePage()
    {
        // let DocumentBody = document.body;

        // Variable for text content to be displayed on page
        let paragraph1 = ['Welcome to our site!\n', 
                    'This webpage was created by Ivan Mokrooussov and\n',
                    'Will Estanislao for the WEBD6201 Client-Side Scripting course\.\n',
                    'This website demonstrates the use of DOM Manipulation for Lab 1\.\n',
                    'Have fun exploring\!\n'];

        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // TO-DO: adjust to insert into div w/in main instead of outside (maybe...)
        // Target the main element to start inserting new content in
        let MainContent = document.getElementsByTagName("main")[0];
        
        // Insert <h3> Welcome Message

        // Create a new paragraph element to insert text in
        let ParaOne = document.createElement("p");
        ParaOne.setAttribute("id", "ParaOne");
        ParaOne.setAttribute("class", "mt-1");
        // Build the paragraph by adding the string array together
        for(const textLine of paragraph1)
        {
            ParaOne.textContent += textLine;
        }

        // Insert new elements onto document
        MainContent.insertBefore(ParaOne, AboutUsButton);

        // Console logs for testing and checking output
        // console.log(ParaOne);
        // console.log(ParaOne.textContent);

        // Add new elements into the document
        // Step 1. get an entry point(s) (insertion point / deletion point) reference 
        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view3.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1250px 550px";
        document.body.style.backgroundPosition = "400px 280px";
    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");

        ProjectsContent();



        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view4.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1670px 1600px";
        document.body.style.backgroundPosition = "top left";
 
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");

        ServiceContent();

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view7.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1100px 800px";
        document.body.style.backgroundPosition = "top right";
        

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        AboutContent();

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view10.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "400px 500px";
        document.body.style.backgroundPosition = "100px 300px";

        
    }

    function DisplayRecourcesPage()
    {
        console.log("Human Resources Page");

        //let DocumentBody = document.body.style.backgroundImage;
        document.body.style.backgroundImage = "url(view2.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "1100px 800px";
        document.body.style.backgroundPosition = "top right";
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

        // Replace an option in the navbar
        ReplaceLink();

        // Add in new human resources link
        AddNavLink();

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Favourite Projects":
                DisplayProjectsPage();
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

    // Function to replace text in nav bar
    function ReplaceLink()
    {
        // Select the specific navigation element to be changed - products link
        let NavContents = document.body.getElementsByClassName("nav-item")[1];

        // Create the new navigation list link and insert it
        // Completely replaces what was hardcoded in html
        let EditNavOption = '<a class="nav-link" href="products.html"><i class="fas fa-project-diagram"></i> Projects</a>';
        NavContents.innerHTML = EditNavOption;

    }

    function AddNavLink()
    {
        // Select the specific navigation element to be changed - products link
        let NavContents = document.body.getElementsByClassName("nav-item")[3];
        let NavList = document.createElement("li");
        NavList.setAttribute("class", "nav-item");

        console.log(NavList);

        let NewNavOption = '<a class="nav-link" href="resources.html"><i class="far fa-id-card"></i> Human Resources</a>';
        NavList.innerHTML = NewNavOption;
        NavContents.after(NavList);
        
    }

    function ProjectsContent()
    {
        let HeadingText = 'Project\'s Page';
        let SubHeading = 'Details On Favourite Projects';
        let paragraph1 = ['NASA Support application for latest lunar navigation system.', 'Traffic Co-ordinator', 
                            'Development medical software'];
        let paragraph2 = ['Draw A Square', 'Numbers Guessing Game', 'Quiz Game'];
        let list = '';

        // Select an element to find a position in the document
        let ContentBody = document.body.getElementsByTagName('main')[0];
        let div1 = ContentBody.getElementsByClassName('list')[0];
        
        // Create the ul that will contain the first set of projects listed
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "ListOne");
        ProjectSet1.setAttribute("class", "list-1");
        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("id", "ListTwo");
        ProjectSet2.setAttribute("class", "list-1");

        // Consider nested for...

        for (const project of paragraph1)
        {
            list += `<li>${project}</li>`;
        }

        ProjectSet1.innerHTML = list;
        div1.insertAdjacentElement("beforebegin", ProjectSet1);
        list = "";

        console.log(ProjectSet1);
    }

    function ServiceContent()
    {
        let ContentBody = document.body.getElementsByTagName('main')[0];
        let paragraph1 = ['Expertise in Web Design Techniques', 'Proficiency In Programming Languages', 'Problem-solving capabilities'];
        let list = '';
        let div1 = ContentBody.getElementsByClassName("container")[0];
        // Create the element
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "ListThree");
        ProjectSet1.setAttribute("class", "list-1");
        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("id", "ListThree");
        ProjectSet2.setAttribute("class", "list-1");

        for (const project of paragraph1)
        {
            list += `<li>${project}</li>`;
        }

        ProjectSet1.innerHTML = list;
        div1.appendChild(ProjectSet1);
        list = "";

    }

    function AboutContent()
    {
        let ContentBody = document.body.getElementsByTagName('main')[0];
        let student1 = ['Ivan Mokrooussov', 'StudentID: 100808605'];
        let paragraph1 = '[Enter some info here]';
        let list = '';
        let div1 = ContentBody.getElementsByClassName("container")[0];
        // Create the element
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "ListThree");
        ProjectSet1.setAttribute("class", "list-1");
        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("id", "ListThree");
        ProjectSet2.setAttribute("class", "list-1");

        // insert a href

        for (const person of student1)
        {
            list += `<li><h3>${person}</h3></li>`;
        }

        ProjectSet1.innerHTML = list;
        div1.insertAdjacentElement("beforebegin",ProjectSet1);
        div1.appendChild(paragraph1);
        list = "";
    }




    window.addEventListener("load", Start);

})();