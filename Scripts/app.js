// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function


(function()
{
    
    // import { ReplaceLink } from './functions.js';
    function DisplayHomePage()
    {
        // let DocumentBody = document.body;

        // Variable for text content to be displayed on page
        let paragraph1 = [`Welcome to our site!\n This webpage was created by Ivan Mokrooussov and\n
                    Will Estanislao for the WEBD6201 Client-Side Scripting course\.\n
                    This website demonstrates the use of DOM Manipulation for Lab 1\.\n
                    Have fun exploring\!\n`];

        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // TO-DO: adjust to insert into div w/in main instead of outside (maybe...)
        // Target the main element to start inserting new content in
        let MainContent = document.getElementsByClassName('container')[0];
        let ImgContent = document.getElementsByClassName('InnerBodyDiv')[0];

        // Create a new paragraph element to insert text in
        let ParaOne = document.createElement("p");
        ParaOne.setAttribute("id", "ParaOne");
        ParaOne.setAttribute("class", "mt-3");
        // Build the paragraph by adding the string array together
        ParaOne.textContent = paragraph1;
        ParaOne.innerHTML += ParaOne.textContent;
        console.log(MainContent);
        console.log(ParaOne);
        
        // Insert new elements onto document
        MainContent.insertBefore(ParaOne, ImgContent);
    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");

        ProjectsContent();
 
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");

        ServiceContent();

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        AboutContent();
        
    }

    function DisplayRecourcesPage()
    {
        console.log("Human Resources Page");

        //let DocumentBody = document.body.style.backgroundImage;
        //document.body.style.backgroundImage = "url(view2.png)";

    }

    function DisplayContactPage()
    {
        console.log("Contact Page");

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

        let NewNavOption = '<a class="nav-link" href="resources.html"><i class="far fa-id-card"></i> Human Resources</a>';
        NavList.innerHTML = NewNavOption;
        NavContents.after(NavList);
        
        // For testing - Check if html element is inserted
        // console.log(NavList);
        
    }

    function ProjectsContent()
    {
        let paragraph1 = ['NASA Support application for latest lunar navigation system.', 'Traffic Co-ordinator', 
                            'Development medical software'];
        let paragraph2 = ['Draw A Square - An application that lets you draw squares', 
                        'Numbers Guessing Game - A simple guessing game coded in C#', 
                        'Quiz Game - A quiz game programmed in Turing. It had approximately 10 random trivia questions and music\!\nUnfortunately this game has been lost to time.'];

        // Select an element to find a position in the document
        let div1 = document.body.getElementsByClassName('list')[0];
        let div2 = document.body.getElementsByTagName('h3')[1];
        
        // Create the ul that will contain the first set of projects listed
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "ListOne");
        ProjectSet1.setAttribute("class", "list-1");

        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("id", "ListTwo");
        ProjectSet2.setAttribute("class", "list-1");
        
        // Loop to set Text
        list = SetTextLoop(paragraph1);
        list2 = SetTextLoop(paragraph2);

        ProjectSet1.innerHTML = list;
        ProjectSet2.innerHTML = list2;
        div1.appendChild(ProjectSet1);
        div2.after(ProjectSet2);

        console.log(ProjectSet1);
    }

    function ServiceContent()
    {
        let ContentBody = document.body.getElementsByClassName('photos')[0];
        let paragraph1 = ['Expertise in Web Design Techniques', 'Proficiency In Programming Languages', 
                        'Graphic Design and Photography'];

        // Create the element
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "ListThree");
        ProjectSet1.setAttribute("class", "list-1");

        list = SetTextLoop(paragraph1);

        ProjectSet1.innerHTML = list;
        ContentBody.insertAdjacentElement("beforebegin", ProjectSet1);

    }

    function AboutContent()
    {
        // Find element opening to start inserting from - Student id and name
        let ContentBody = document.body.getElementsByTagName('img')[0];
        let ContentBody2 = document.body.getElementsByTagName('img')[1];
        let student1 = ['Ivan Mokrooussov', 'StudentID: 100808605'];
        let student2 = ['Will Estanislao', 'StudentID: 100786862']

        // About content to be inserted
        let paragraph1 = '[Enter some info here]';
        let paragraph2 = `Hello, I\'m William Estanislao! I\'m currently in the 2 year Computer Programming
                        course in Durham College. I specialize primarily in developing applications and working
                        with programming languages such as C# and C++. I'm currently working on creating some games
                        using Unity and Visual Studio.`;
        // Create the element
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "student-1");
        ProjectSet1.setAttribute("class", "list-1");
        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("id", "student-2");
        ProjectSet2.setAttribute("class", "list-1");

        let textContent1 = document.createElement('p');
        textContent1.textContent = paragraph2;

        list = SetTextLoop(student1);
        list2 = SetTextLoop(student2);

        ProjectSet1.innerHTML = list;
        ProjectSet2.innerHTML = list2;
        ContentBody.insertAdjacentElement("beforebegin", ProjectSet1);
        ContentBody2.insertAdjacentElement("beforebegin",ProjectSet2);
        list = "";
    }


    function SetTextLoop(textArray)
    {
        let list = '';

        for (const textLine of textArray)
        {
            list += `<li>${textLine}</li>`;
        }

        return list;
    }

    window.addEventListener("load", Start);

})();