const projects = [
    {
        title: "JS Sequencer",
        urlTitle: "js-sequencer",
        category: "prototyping",
        image_small: "/static/img/drumkit/js-sequencer-small.jpg",
        image: "/static/img/drumkit/js-sequencer.png",
        image_list: [
            { 
                title: "The JS Sequencer on its initial state",
                link: "/static/img/drumkit/js-sequencer.png"
            },
            { 
                title: "The JS Sequencer with additional information",
                link: "/static/img/drumkit/js-sequencer-2.png"
            },
        ],
        summary:
            "The Drum kit is an interactive soundboard. This project was build to illustrate the capabilities of a web browser. At it's minimal the website requires basic HTML and uses browser technology to add layers of enhancements.",
        content: `
        <h3>About the project</h3>
        <p>This project is a sequencer that allows users to make sounds with 8 different instruments. The app allows users to interact by using their keyboard keys or mouse.</p>
        <h3>The assignment</h3>
        <blockquote>Use Web Audio to demonstrate the capabilities of modern and older browsers.</blockquote>
        <p>This assignment required me to create a User Experience that is similar on all browsers. Not only on modern browsers but also going back to older browsers</p>
		`,
        author: "Elton Gonçalves Gomes",
        client: "Free project",
        externalLink: "https://js-sequencer.herokuapp.com/",
        code_link: "https://github.com/eltongonc/js-sequencer",
    },
    {
        title: "Soundcloud explorer",
        urlTitle: "soundcloud-explorer",
        category: "prototyping",
        image_small: "/static/img/soundcloud_explorer/soundcloud_exp-small.jpg",
        image: "/static/img/soundcloud_explorer/soundcloud_exp.jpg",
        image_list: [
            {
                title: "A search results page of the Soundcloud explorer",
                link: "/static/img/soundcloud_explorer/soundcloud_exp.jpg"
            },
        ],
        summary:
            "Soundcloud explorer is a music exploration website build with HTML, CSS, and JavaScript. It allows the user to search and play songs that are available on Soundcloud",
        content: `
        <h3>The assignment</h3>
        <blockquote>Create a single page application using only Vanilla Javascript</blockquote>

        <h3>About the project</h3>
		<p>This is a basic Single page application that uses JavaScript to get data from the SoundCloud API and uses this data to play songs.</p>
        <p>The main focus was to learn Object-Oriented Programming JavaScript.</p>
        <p>Because this was a three-week project it still contains bugs.</p>
        
		<h3>Features</h3>
		<ul>
			<li>Get a list of songs based on a search query.</li>
			<li>Play a song.</li>
			<li>Get information about a song.</li>
			<li>Login page (no actual authentication yet)</li>
			<li>The app has a router that checks if a route exists and sends a corresponding message if it doesn't.</li>
			<li>Pretty URLs</li>
		</ul>
		`,
        author: "Elton Gonçalves Gomes",
        client: "Free project",
        externalLink: "http://soundcloud.eltongoncalves.nl/",
        code_link: "https://github.com/eltongonc/react-soundcloud-explorer/",
    },
    {
        title: "JSClient Builder",
        urlTitle: "jsclient-builder",
        category: "prototyping",
        image_small: "/static/img/jsclient_builder/jsclient-builder-form-init-small.jpg",
        image: "/static/img/jsclient_builder/jsclient-builder-form-init.jpg",
        image_list: [
            {
                title: "A laptop displaying a mockup of the Jsclient builder",
                link: "/static/img/jsclient_builder/laptop.jpg"
            },
            {
                title: "The initial page of the jsclient builder displaying an interactive form",
                link: "/static/img/jsclient_builder/jsclient-builder-form-init.jpg"
            }
        ],
        video: {
            mp4: "/static/video/jsclient_builder/jsclient_pp.mp4",
        },
        summary:
            "The Jsclient Builder is an interactive webpage that helps customers of Dimebox generate and style a payment form",
        content: `
        <h3>About Dimebox</h3>
        <p>Dimebox is a company that allows online payments for banks and merchants. The company was founded in 2014 by Hans van Leeuwen, Jan Joost Kalff, and Raymundo Leefmans</p>

        <h3>The assignment</h3>
        <blockquote>How can the merchant create and edit a payment form made by the jsclient, without knowing how to write code.</blockquote>
        <p>To set up a payment form with the jsclient, merchants need to have to be technically oriented. A merchant has to search guidance if he doesn't know how to write code.</p>

        <h3>About the project</h3>
        <p>For this project, I created a Single Page Application (SPA) that allows the user to add custom text, edit style and view how the form will appear on his page. When the user is done customizing an HTML code can be generated to paste onto his webpage</p>
        <ul>
            <li>Competitor research</li>
            <li>Desk- and field research</li>
            <li>Weekly meetings with a coach for guidance</li>
            <li>Writing code and style guides</li>
            <li>User testing</li>
        </ul>

        <p>The code is not publicly available because this project was built for Dimebox</p>`,
        client: "Dimebox - Hans van Leeuwen",
        author: "Elton Gonçalves Gomes",
        startDate: "2018-02-05",
        endDate: "2018-06-29"
    },
    {
        title: "MediaLab",
        urlTitle: "medialab",
        category: "webapp",
        image_small: "/static/img/medialab/medialab-small.jpg",
        image: "/static/img/medialab/medialab.jpg",
        image_list: [
            {
                title: "The first homepage high fidelity design of support.Medialab.co",
                link: "/static/img/medialab/home.jpg"
            },
            {
                title: "An image showing the categorie page",
                link: "/static/img/medialab/categorie.jpg"
            },
            {
                title: "Three mockups of high fidelity design on a laptop mobile and tablet",
                link: "/static/img/medialab/devices.jpg"
            },
            { 
                title: "A high fidelity design of a Frequently Asked Question page", 
                link: "/static/img/medialab/faq.jpg" 
            }
        ],
        summary:
            "Medialab is a support/FAQ page build for Medialab.co. This website is built with Wordpress and gives the owner the ability to manage the website's content",
        content: `
        <h3>About Medialab</h3>
        <p>Medialab is an online sharing platform started in Amsterdam in 2007. They focus on storing, transferring a sharing media online. The support page of Medialab allows people to contact Medialab or view frequently asked questions. </p>

        <h3>The assignment</h3>
        <blockquote>Research, design, recommend and create a new support page.</blockquote>
        <p>The old design of the site didn’t represent the look-and-feel of Medialab. It had different colors and layout than the corporate website. My assignment was to rebuild the current website to match the identity of the company.</p>
        <img width="100%" src="/static/img/medialab/devices.jpg">,
        <h3>About the project</h3>
        <p>For this project, I replaced the old support page with an edited WordPress theme</p>
        <p>The assignment was split into four parts:</p>
        <ol>
            <li>Observing the old site</li>
            <li>Doing research on design patterns that could help improve the website</li>
            <li>Implement the found research</li>
            <li>Recommend a better content management system</li>
            <li>Present to client</li>
        </ol>`,
        client: "Medialab.co",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://support.medialab.co/",
        code_link: "",
    },
    {
        title: "Funda serverside",
        urlTitle: "funda-serverside",
        category: "prototyping",
        image_small:"/static/img/funda/funda-small.jpg",
        image: "/static/img/funda/funda.jpg",
        image_list: [
            {
                title: "An image desplaying the search page with a few search results",
                link: "/static/img/funda/funda.jpg"
            },
            
        ],
        summary:
            "Funda server-side is a site optimization audit done for Funda.nl. A series of test were done to illustrate how the current site could be optimized",
        content: `

        <h3>The assignment</h3>
        <blockquote>Research ways to make the funda website faster</blockquote>

        <h3>About Funda server-side</h3>
        Funda server-side is a server-side application that runs on Node.js + Express. This project was built to illustrate a few performance patterns that could optimize the speed of the current Funda website. Funda server-side is based on the existing <a href="https://funda.nl/">Funda site</a>.

        <h3>What does it do</h3>
        <p>Funda server-side allows users to search and get information on houses in the Netherlands that are registered on Funda. </p>
        <p>A series of tests were done with the Google Chrome internet connection throttling. This Google Chrome tool is a great way to emulate how people with slow connection experience a website. The connections on which the tests were done exist of GPRS, Good 2G, Good 3G, Regular 4G and Wi-Fi with the cache disabled. </p>

        <h3>Results</h3>
        <p>The site became much faster after applying optimization. </p>
        <ul>
            <li>Rendering files on the server will give the website a boost in performance.</li>
            <li>Loading page a-sync helps the DOM content load much faster. </li>
            <li>I didn't succeed on making the images smaller, but I did manage to get a higher score on Google's <a href="https://developers.google.com/speed/pagespeed/insights/?hl=nl">PageSpeed Insights</a> for mobile.</li>
        <p>There isn't any live version but the code can be viewed on GitHub.</p>`,
        author: "Elton Gonçalves Gomes",
        client: "Free project",
        colaborators: "",
        code_link: "https://github.com/eltongonc/funda_serverside",
    },
    {
        title: "Zoku inspire",
        urlTitle: "zoku-inspire",
        category: "prototyping",
        image_small: "/static/img/zoku/zoku-compressed1.jpg",
        image: "/static/img/zoku/zoku.jpg",
        image_list: [
            { 
                title: "A page that allows a user to join a workshop via a form or qr-code",
                link: "/static/img/zoku/attend.png"
            },
            {
                title: "An overview page of all the workshop",
                link: "/static/img/zoku/big-screen.png"
            },
            {
                title: "A workshop detail page on a big screen",
                link: "/static/img/zoku/workshop.png"
            },
            {
                title: "An overview page of all workshops on a mobile phone",
                link: "/static/img/zoku/mobile-wall.png"
            }
        ],
        summary:
            "Zoku Inspire is a prototype that illustrates the concept of aiding visitors of the Zoku hotel to a social connection in Amsterdam. Hotel guests can use this app to host and attend workshops.",
        content: `
        <h3>About Zoku</h3>
        <p>Hotel Zoku is a relatively new concept in the hotel industry. Their goal is to bring people together under one roof. It's not just a hotel, it's a place where people can share knowledge, ideas and get to know inspiring people and companies. </p>
        
        <h3>The assignment</h3>
        <blockquote>How can you make the guests of the Zoku hotel actively help each other feel at home within a playful but formal context?</blockquote>
        <p>The guests of the Zoku hotel are expats that stay here for a period of three months. After these three months, they are allowed to choose whether they find their own place to stay or prolong their stay at Zoku</p>

        <h3>About the project</h3>
        <p>Zoku Inspire is a way to help guests get familiar with the locals of the city. By sharing knowledge, guests will meet new people with a common interest.</p>
        <p>A visitor of the Zoku hotel can use his/her mobile phone to create a workshop and shared their expertise. This workshop will then be displayed on a bigger screen, at a central point within the hotel lobby. </p>
        <p>For this project I worked together with two skilled designers, to create a prototype of the app. This was a project of 6 weeks and during this project, we did the following:</p>
        <ul>
            <li>Research on the needs and wants of the guests</li>
            <li>Meetings with the client to discuss our progress</li>
            <li>Meeting with an expert for guidance</li>
            <li>Writing code and style guides</li>
            <li>Concept validation</li>
        </ul>

        <h3>My Role</h3>
        <p>During this project, everyone had the same role. I mainly focussed on writing, managing and maintaining the code on GitHub.</p>

        <h3>Result</h3>
        <p>Zoku Inspire resulted in a website that can be interacted via two places:</p>
        <ul>
            <li><strong>Mobile App</strong>: Is used to create an event</li>
            <li><strong>Big touchscreen</strong>: Placed on a central point in the hotel and is used as a overview of all events</li>
        </ul>

        <h3>Colaborators</h3>
        <ul>
            <li>Misja Hermans</li>
            <li>Lotte Feenstra</li>
        </ul>
		`,
        author: "Elton Gonçalves Gomes",
        client: "Hotel Zoku",
        externalLink: "https://eltongonc.github.io/zoku/",
        code_link: "https://github.com/eltongonc/zoku",
    },
    {
        title: "Daskas",
        urlTitle: "daskas",
        category: "webshop",
        image_small: "/static/img/daskas/daskas-small.jpg",
        image: "/static/img/daskas/daskas.jpg",
        image_list: [
            {
                title: "Homepage of Daskas displaying shelfs with product that symbolizes the product categories",
                link: "/static/img/daskas/home.jpg"
            },
            {
                title: "A page that displays a gift generator",
                link: "/static/img/daskas/gift-generator.jpg"
            }
        ],
        video: {
            url: "https://player.vimeo.com/video/153789377",
        },
        summary:
            "Daskas is a re-designed webshop build for Daskas. With Skuemorphism we tried to make a visual representation of the physical shop.",
        content: `
        <h3>About Daskas</h3>
        <p>Daskas started as a small glass workshop in 1990 By Rob and Eliane Dashorst in Amsterdam, The Netherlands. As Daskas aged, it became more known and has grown into a unique but well-known gift shop at the Haarlemmerstraat in Amsterdam.</p>

        <h3>The assignment</h3>
        <blockquote>Create a new website that will improve the clientele of a physical shop.</blockquote>
        <p>The customers of Daskas weren’t intrigued enough to purchase items on the webshop. They used the site as a way to view the opening hours.</p>

        <h3>About the project</h3>
        <p>For this project I worked together with a team of two skilled designers and one great content creator, to rebuild the old Daskas website. This was a project of five months and during this project, we did the following:</p>
        <ul>
            <li>Research on improvements for the site</li>
            <li>Meetings with the client to discuss our progress</li>
            <li>Meeting with an expert for guidance</li>
            <li>Writing code and style guides</li>
            <li>User testing</li>
        </ul>

        <p>We used OpenCart as a backend platform. OpenCart is an eCommerce platform designed for webshops, it helped us give the client an overview of the purchases and order history.</p>

        <h3>My Role</h3>
        <p>During this project, I took the role of the Backend and Frontend developer. I was mainly responsible for the code that was delivered, but I also played a huge part in the conception and testing of the project.</p>

        <h3>Result</h3>
        <p>Daskas resolved into two main concepts:</p>
        <ul>
            <li>Skeuomorphism: Making a visual representation of the physical shop. We tried to recreate the way products are placed in the shop.</li>
            <li>Gift generator: The site can generate a gift based on user input. This would help a customer buy a gift for someone.</li>
        </ul>

        <h3>Colaborators</h3>
        <ul>
            <li>Dale Schnieders</li>
            <li>Evita Zethof</li>
            <li>Naomi Roos</li>
        </ul>`,
        client: "Rob Dashorst",
        author: "Elton Gonçalves Gomes",
        externalLink: "http://www.daskas.nl/",
        code_link: "",
    }
];


export default projects;

export function getDescription(url) {
    const project = projects.filter(item => item.urlTitle === url)[0];
    if (project) {
        return project.summary;
    } 

    return "My name is Elton Gonçalves Gomes. I'm a T-shaped Front-end developer who focusses on coding but also knows a thing or two about UI and UX";
}