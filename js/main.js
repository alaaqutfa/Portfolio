$(function () {
  "use strict";
  var currentYear = new Date().getFullYear();
  //* Languages :
  var portfolio_en = {
    Data: {
      Top: {
        Avatar: "img/face-1.png",
        Name: "Alaa Qutfa",
        Post: `Software Engineer`,
      },
      Scroll: {
        About: [
          ["Age", currentYear - 2001],
          ["Residence", "Syria"],
          ["City", "Homs"],
        ],
        Languages: [
          {
            Id: "circleprog1",
            Type: "Circle",
            Name: "Arabic",
            Progress: "p100",
          },
          {
            Id: "circleprog2",
            Type: "Circle",
            Name: "English",
            Progress: "p80",
          },
          {
            Id: "circleprog3",
            Type: "Circle",
            Name: "Germany",
            Progress: "p35",
          },
          {
            Id: "circleprog4",
            Type: "Circle",
            Name: "Kurdish",
            Progress: "p20",
          },
        ],
        Skills: [
          // Web Programming Languages :
          {
            Title: "Programming Languages :",
            items: [
              { id: "lineprog5", Type: "line", Name: "JavaScript (ES6+)", Progress: "100" },
              { id: "lineprog9", Type: "line", Name: "PHP", Progress: "100" },
              { id: "lineprog18", Type: "line", Name: "Python", Progress: "100" },
              {
                id: "lineprog11",
                Type: "line",
                Name: "Java",
                Progress: "85",
              },
              {
                id: "lineprog10",
                Type: "line",
                Name: "Dart",
                Progress: "100",
              },
            ],
          },
          // Front-End Technologies :
          {
            Title: "Front-End Technologies :",
            items: [
              {
                id: "lineprog1",
                Type: "line",
                Name: "HTML5",
                Progress: "100",
              },
              {
                id: "lineprog2",
                Type: "line",
                Name: "CSS3",
                Progress: "100",
              },
              {
                id: "lineprog3",
                Type: "line",
                Name: "Tailwindcss",
                Progress: "100",
              },
              {
                id: "lineprog3",
                Type: "line",
                Name: "Bootstrap",
                Progress: "100",
              },
              {
                id: "lineprog4",
                Type: "line",
                Name: "Sass",
                Progress: "100",
              },
              {
                id: "lineprog7",
                Type: "line",
                Name: "Vue js",
                Progress: "90",
              },
              {
                id: "lineprog7",
                Type: "line",
                Name: "React js",
                Progress: "90",
              },
              {
                id: "lineprog8",
                Type: "line",
                Name: "Jquery",
                Progress: "100",
              },
            ],
          },
          // Back-End Technologies :
          {
            Title: "Back-End Technologies :",
            items: [
              {
                id: "lineprog21",
                Type: "line",
                Name: "Laravel",
                Progress: "100",
              },
              {
                id: "lineprog6",
                Type: "line",
                Name: "Node.js",
                Progress: "100",
              },
              {
                id: "lineprog22",
                Type: "line",
                Name: "Express.js",
                Progress: "100",
              },
            ],
          },
          // Databases :
          {
            Title: "Databases :",
            items: [
              {
                id: "lineprog19",
                Type: "line",
                Name: "SQL/MySQL",
                Progress: "100",
              },
              {
                id: "lineprog20",
                Type: "line",
                Name: "MongoDB",
                Progress: "100",
              },
            ],
          },
          // Mobile Development :
          {
            Title: "Mobile Development :",
            items: [
              {
                id: "lineprog23",
                Type: "line",
                Name: "Flutter",
                Progress: "100",
              },
              {
                id: "lineprog24",
                Type: "line",
                Name: "GetX",
                Progress: "100",
              },
            ],
          },
          // Version Control :
          {
            Title: "Version Control :",
            items: [
              {
                id: "lineprog25",
                Type: "line",
                Name: "Git",
                Progress: "100",
              },
              {
                id: "lineprog26",
                Type: "line",
                Name: "GitHub",
                Progress: "100",
              },
              {
                id: "lineprog27",
                Type: "line",
                Name: "Azure",
                Progress: "100",
              },
            ],
          },
          // Tools & Platforms :
          {
            Title: "Tools & Platforms :",
            items: [
              {
                id: "lineprog28",
                Type: "line",
                Name: "Docker",
                Progress: "100",
              },
              {
                id: "lineprog29",
                Type: "line",
                Name: "Nginx",
                Progress: "100",
              },
              {
                id: "lineprog30",
                Type: "line",
                Name: "RESTful APIs",
                Progress: "100",
              },
            ],
          },
          // UI/UX Programs :
          {
            Title: "UI/UX Programs :",
            items: [
              {
                id: "lineprog12",
                Type: "line",
                Name: "Figma",
                Progress: "90",
              },
              {
                id: "lineprog12",
                Type: "line",
                Name: "Adobe XD",
                Progress: "100",
              },
            ],
          },
          // Graphic Design Programs :
          {
            Title: "Graphic Design Programs :",
            items: [
              {
                id: "lineprog13",
                Type: "line",
                Name: "Adobe Photoshop",
                Progress: "100",
              },
              {
                id: "lineprog14",
                Type: "line",
                Name: "Adobe Illustrator",
                Progress: "100",
              },
            ],
          },
          // Video Editing Programs :
          {
            Title: "Video Editing Programs :",
            items: [
              {
                id: "lineprog15",
                Type: "line",
                Name: "Adobe Premiere Pro",
                Progress: "90",
              },
              {
                id: "lineprog16",
                Type: "line",
                Name: "Adobe After Effects",
                Progress: "80",
              },
            ],
          },
          // Sound Editing Programs :
          {
            Title: "Sound Editing Programs :",
            items: [
              {
                id: "lineprog17",
                Type: "line",
                Name: "Adobe Audition",
                Progress: "70",
              },
            ],
          },
        ],
        Knowledges: [
          "the ability to work long hours",
          "Able to work under pressure",
          "Team spirit and participation",
          "Sharing scientific experiences",
          "Commitment to deadlines with clients",
          "Accuracy in work and attention to the opinion of the customer",
          "Paying attention to the rules of academic design",
          "Good visual nutrition",
          "Accuracy in choosing harmonious colors",
          "Creating corporate visual identities",
          "continuous learning",
          "Skills development",
          "Keeping pace with development and modern designs",
          "Tact in speaking and dealing with openness",
          "OOP",
          "Git & Github",
        ],
        CV: "files/alaaqutfa.pdf",
      },
      Bottom: {
        Whatsapp: [
          "https://wa.me/+9647864034927",
          `<i class="fa-brands fa-whatsapp"></i>`,
        ],
        Facebook: [
          "https://www.facebook.com/alaaqutfa.tech",
          `<i class="fa-brands fa-facebook"></i>`,
        ],
        Instagram: [
          "https://www.instagram.com/alaaqutfa.tech",
          `<i class="fa-brands fa-instagram"></i>`,
        ],
        Linkedin: [
          "https://www.linkedin.com/in/alaaqutfa",
          `<i class="fa-brands fa-linkedin"></i>`,
        ],
      },
    },
    Content: {
      home: {
        banner: {
          title: "Discover my Amazing <br />Art Space!",
          startStaticPhrae: "&lt;<i>code</i>&gt; I build",
          slidePhrases: `["web interfaces.", "ios and android applications.","ERP System", "CRM System"]`,
          endStaticPhrae: "&lt;/<i>code</i>&gt;",
          btnText: "Explore now",
          btnLink: "",
          linkText: "Let's work together",
          linkUrl: "https://www.linkedin.com/in/alaaqutfa",
          bgImgPath: "img/bg.jpg",
          imgPath: "img/face-2.png",
        },
        counters: [
          ["Years Experience", currentYear - 2019],
          ["Completed Projects", 12],
          ["Happy Customers", 12],
          ["Honors and Awards", 8],
        ],
        services: [
          {
            title: "Mobile Applications Development",
            description: `Turn your ideas into reality by building your own application, elevate your business to luxury and excellence, and make your services and sales easier, faster and on a larger scale. I will provide you with the appropriate solutions to achieve this.`,
            linkUrl: "https://wa.me/+9647864034927",
          },
          {
            title: "Web Development",
            description: `I offer you the safest, fastest, and best quality websites with a wide range of options that help you find your dream and start your business online.`,
            linkUrl: "https://wa.me/+9647864034927",
          },
          {
            title: "Hosting",
            description: `The best and fastest hosting with 24/7 support at special prices with unlimited extensions`,
            linkUrl: "https://wa.me/+9647864034927",
          },
          {
            title: "Cyber Security",
            description: `Cybersecurity is a constantly changing concept with new threats emerging every day that threaten the security of your information and data from hackers. I offer you my services to protect your data and business and keep up with what is happening in cyberspace`,
            linkUrl: "https://wa.me/+9647864034927",
          },
          {
            title: "Marketing",
            description: `I will help you develop a plan to make your product reach the largest number of customers and make your business accounts active on social media pages.`,
            linkUrl: "https://wa.me/+9647864034927",
          },
          {
            title: "Graphic Design",
            description: `I will add artistic touches to your work to make it distinctive and shine among all similar works.`,
            linkUrl: "https://wa.me/+9647864034927",
          },
        ],
        prices: [
          {
            title: "Single",
            price: `<span>$</span>8.3<span>mo</span>`,
            isPopular: false,
            conditions: [
              ["Standard Performance", false],
              ["1 Website", false],
              ["50 GB SSD Storage", false],
              ["Weekly Backups", false],
              ["1 Email Account", false],
              ["Unlimited Free SSL", false],
              ["Unlimited Bandwidth", false],
              ["24/7 Customer Support", false],
              ["Free CDN", true],
              ["Dedicated IP Address", true],
            ],
            linkUrl: "https://wa.me/+9647864034927",
            note: null,
          },
          {
            title: "Premium",
            price: `<span>$</span>12.5<span>mo</span>`,
            isPopular: true,
            conditions: [
              ["Standard Performance", false],
              ["100 Website", false],
              ["100 GB SSD Storage", false],
              ["Weekly Backups", false],
              ["Free Email", false],
              ["Unlimited Free SSL", false],
              ["Unlimited Bandwidth", false],
              ["24/7 Customer Support", false],
              ["Free CDN", true],
              ["Dedicated IP Address", true],
            ],
            linkUrl: "https://wa.me/+9647864034927",
            note: null,
          },
          {
            title: "Business",
            price: `<span>$</span>16.6<span>mo</span>`,
            isPopular: false,
            conditions: [
              ["Increased Performance", false],
              ["100 Website", false],
              ["200 GB SSD Storage", false],
              ["Daily Backups", false],
              ["Free Email", false],
              ["Unlimited Free SSL", false],
              ["Unlimited Bandwidth", false],
              ["24/7 Customer Support", false],
              ["Free CDN", false],
              ["Dedicated IP Address", true],
            ],
            linkUrl: "https://wa.me/+9647864034927",
            note: null,
          },
          {
            title: "Ultimate Plan",
            price: `<span>$</span>26.6<span>mo</span>`,
            isPopular: false,
            conditions: [
              ["Maximum Performance", false],
              ["300 Website", false],
              ["200 GB SSD Storage", false],
              ["Daily Backups", false],
              ["Free Email", false],
              ["Unlimited Free SSL", false],
              ["Unlimited Bandwidth", false],
              ["24/7 Customer Support", false],
              ["Free CDN", false],
              ["Dedicated IP Address", false],
            ],
            linkUrl: "https://wa.me/+9647864034927",
            note: null,
          },
        ],
        recommendations: [
          {
            imgPath: "img/testimonials/moaaz.jpeg",
            name: "Moaaz Al-habbal",
            description: "Web Developer | Voice over artist",
            text: `Alaa is a highly skilled web developer with a keen eye for detail and a passion for building efficient, scalable solutions. His ability to turn complex ideas into smooth, functional web applications is truly impressive.<br>What makes Alaa stand out is his problem-solving mindset and dedication to writing clean, maintainable code. He’s always eager to learn, adapt, and contribute to team success, making collaboration with him both productive and enjoyable.`,
            stars: 5,
          },
          {
            imgPath: "img/testimonials/hamza.jpeg",
            name: "Hamza alsaghrji",
            description: "Full-stack Web Developer at Masfufat Dropshipping Company in Saudi Arabia",
            text: `I had the pleasure of working with Alaa, and his talent as a front-end developer is truly remarkable. His creativity, attention to detail, and problem-solving skills always stand out. Working with him was both inspiring and insightful.`,
            stars: 5,
          },
          {
            imgPath: "img/testimonials/mahmood.PNG",
            name: "Mahmood Shaheen",
            description: "UXUI Designer || IT Software",
            text: `Engineer Alaa, one of the distinguished people at work, provides professional and fast services and is understanding in dealing, all respect to you`,
            stars: 5,
          },
        ],
      },
      gallery: {
        filter_nav: [
          ["*", "All Categories"],
          [".web", "Websites"],
          [".applications", "Applications"],
        ],
        filter_list: [
          // {
          //   type: "web",
          //   imgPath: "img/gallery/groupcoin.png",
          //   title: "Group Coin SAL",
          //   description: "Group Coin SAL is a retail chain in Lebanon offering a modern shopping experience across multiple malls. I manage the software and digital media department, overseeing system development, ERP/CRM integration, and digital marketing to support the company's technological growth.",
          //   templateUrl: "https://coin-market.store",
          //   hBG: [true, "#fff"],
          // },
          {
            type: "web",
            imgPath: "img/gallery/syriansouq.png",
            title: "Syrian Souq",
            description: "At Syrian Souq, we provide a comprehensive e-commerce platform designed to connect Syrian sellers with customers worldwide. We believe shopping should be easy, reliable, and accessible to everyone, which is why we offer a wide range of high-quality products at competitive prices.",
            templateUrl: "https://syriansouq.com/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/alghadaq.png",
            title: "ALGHADAQ - IT",
            description: "ALGHADAQ - IT is an innovative IT Solutions company specializing in website development, software development, Product Design, and Application development. Providing cloud data services and electronic marketing interfaces for organizations in addition to accounting solutions and protecting electronic security in a professional manner that ensures smooth and harmonious work among the organization’s members.",
            templateUrl: "https://alghadaqit.tech/",
            hBG: [true, "#fff"],
          },
          {
            type: "applications",
            imgPath: "img/gallery/watan.png",
            title: "Watan eCommerce App",
            description: "The Watan eCommerce App is designed to provide a modern and seamless online shopping experience, allowing users to browse and purchase a wide variety of products with ease and security. We believe that mobile shopping should be fast, reliable, and convenient, which is why we offer secure payment options and trusted shipping services to ensure timely deliveries.",
            templateUrl: "https://play.google.com/store/apps/details?id=com.watan.consumers&pli=1",
            hBG: [true, "#fff"],
          },
          {
            type: "applications",
            imgPath: "img/gallery/watan-supplier.png",
            title: "Watan Suppliers App",
            description: "The Watan Suppliers App is a comprehensive platform designed to help suppliers manage their business with ease and efficiency. The app provides advanced tools for listing products, managing orders, and communicating with customers, making it easier for suppliers to expand their reach and grow their market presence.",
            templateUrl: "https://play.google.com/store/apps/details?id=net.watan.suppliers",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/Art-tech.png",
            title: "Art-tech",
            description: "Art-Tech is a team of architecture, decoration, and design enthusiasts who got together to establish a high-tech print house based in Erbil, KRI. We offer our services throughout Iraq and specialize in bringing to life all forms of artwork, be it traditional or avant-garde. We utilize the latest Printing technologies, and advanced wide format printing technologies to offer the Iraqi businesses and households all that they need when it comes to decoration variety. Our services also include ornaments for hotels, resorts, offices, and villas as well as wallpaper printing, murals and more.",
            templateUrl: "https://art-techiq.netlify.app/",
            hBG: [true, "#fff"],
          },
          {
            type: "applications",
            imgPath: "img/gallery/watan-agent.png",
            title: "Watan Services Agent App",
            description: "The Watan Services Agent App is the perfect platform for agents who want to provide Watan Services to users, offering them exclusive discounts and significant savings on their everyday purchases. Through this app, agents can manage customer subscriptions, track transactions, and maximize the benefits of the discount program.",
            templateUrl: "https://play.google.com/store/apps/details?id=com.watan.agent.app",
            hBG: [true, "#fff"],
          },
          {
            type: "applications",
            imgPath: "img/gallery/watan-users.png",
            title: "Watan Services Users App",
            description: "The Watan Services Users App is your gateway to a world of exclusive discounts and offers, helping you save big on your daily purchases. We believe that smart shopping should be easy and accessible to everyone, which is why we provide a seamless experience to enjoy special discounts across various stores and services.",
            templateUrl: "https://play.google.com/store/apps/details?id=com.watan.iq.app",
            hBG: [true, "#fff"],
          },
          {
            type: "applications",
            imgPath: "img/gallery/shaheen.png",
            title: "Shaheen Consumers App",
            description: "The Shaheen Consumers App is designed to provide a seamless and fast online shopping experience, allowing consumers to browse and purchase a wide range of high-quality products at competitive prices. We believe shopping should be convenient and secure, which is why we offer reliable payment options and fast shipping services to ensure smooth order delivery.",
            templateUrl: "https://shaheen-shop.com/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/Aljazeera-mockup.png",
            title: "Aljazeera Machinary",
            description: "Al Jazeera Machinery was established in 1995 and since then it has successfully been a supplier of printing equipment and printing services, which also includes importing and marketing raw materials, counselling and training of technical staffs. In order to accommodate a bigger selection of presses and servicing a larger area, Al Jazeera Machinery now has two branches located in (Baghdad & Erbil / Iraq).",
            templateUrl: "https://aljazeeramachinery.netlify.app/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/world-gate.png",
            title: "World Gate - Medical",
            description: "world gate medical and lab supply company has powerful technical force made up of aggressive, dedicated service engineers to take care of service and After Sales Service of medical equipment's in field of dermatology and cosmetic (Alex hair removal machines & diode laser, IPL) and all type of medical equipment's in all over IRAQ - Kurdistan region. World gate medical and lab Supply was found in the middle of the year 2009 which identified a market need for the high quality of medical equipment in field of dermatology and cosmetic in Iraq - Kurdistan Region at affordable prices.",
            templateUrl: "https://worldgate-medical.netlify.app/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/Limitless-tech.png",
            title: "Limitless-tech",
            description: "Limitless Tech is an innovative IT Solutions company specializing in website development, software development, Product Design, and Application development.",
            templateUrl: "https://limitless-tech.cloud/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/shaheenecommerce.png",
            title: "Shaheen-shop",
            description: "At Shaheen Shop, we strive to provide an exceptional online shopping experience that meets our customers’ needs with the best quality and prices. We offer a wide range of carefully selected products to ensure your complete satisfaction. Our goal is to provide reliable and fast service, backed by a dedicated team committed to delivering the best shopping experience possible.",
            templateUrl: "https://shaheen-shop.com/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/watanecommerce.png",
            title: "Watan eCommerce",
            description: "At Watan eCommerce, we strive to offer a modern online shopping experience that meets customers’ needs with ease and security. Our platform connects sellers with buyers, providing access to a wide range of high-quality products at competitive prices.",
            templateUrl: "https://watan.website/",
            hBG: [true, "#fff"],
          },
          {
            type: "web",
            imgPath: "img/gallery/watan.dev.png",
            title: "Watan Services",
            description: "Discover a world of convenience and savings, The perfect companion to achieve your financial and marketing goals",
            templateUrl: "https://watan.dev/",
            hBG: [true, "#fff"],
          },
        ],
      },
      history: [
        {
          title: "Education",
          data: [
            {
              box: "diplome",
              type: "Certificate of Experience",
              src: "Alofuk Academy Malaysia",
              title: "Software Engineer",
              date: "DEC 2023",
              description: "Software Engineer student",
              linkPath: "files/alofuk.jpg",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Diplome",
              src: "Al Wataniya Private University",
              title: "Student",
              date: "jan 2020 - may 2022",
              description: "Informatics engineering student",
              linkPath: "files/university life en.jpg",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Bacalorious",
              src: "Mohsen Abbas School",
              title: "Student",
              date: "jan 2016 - may 2019",
              description: `Scientific study student in the Syrian Arab Republicans`,
              linkPath: "files/bacalorious en.jpg",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "HTML Diploma",
              date: "march 2022",
              description: `A course to learn to build and write the structure of websites`,
              linkPath: "files/diploma-HTMLCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "CSS Diploma",
              date: "march 2022",
              description: `A course to learn the design and coordination of websites`,
              linkPath: "files/diploma-CSSCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "Bootstrap Diploma",
              date: "march 2022",
              description: `A course to learn designing and formatting websites using bootstrap`,
              linkPath: "files/diploma-BootstrapCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "JavaScript Diploma",
              date: "April 2022",
              description: `A course to learn the java script language and deal with json and API files`,
              linkPath: "files/diploma-JavaScriptCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "PHP Diploma",
              date: "April 2022",
              description: `A course to learn the php language and deal with json files, API and databases to create integrated sites, login systems and Ecommerce`,
              linkPath: "files/diploma-PHPCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "SQL/MySQL Diploma",
              date: "April 2022",
              description: `A course to learn SQL / mysql and deal with databases`,
              linkPath: "files/diploma-SQL MySQLCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
            {
              box: "diplome",
              type: "Certificate",
              src: "Shiyar Academy",
              title: "JAVA Diploma",
              date: "April 2022",
              description: `A course to learn the design and coordination of
              Android applications using java and android
              studio`,
              linkPath: "files/diploma-javaCoderShiyar.pdf",
              havePopup: false,
              popup: null,
            },
          ],
        },
        {
          title: "Work History",
          data: [
            {
              box: "recommendation",
              type: "Information",
              src: "Software Engineer",
              title: "Special work",
              date: "APR 2019 - PRESENT",
              description: `Special work - extensive experience in building and developing systems, developing and designing user interfaces for both phone applications and websites, in addition to building, developing and securing databases of all kinds.`,
              linkPath: "https://wa.me/+9647864034927",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "View Website",
              src: "Group Coin SAL",
              title: "Software & Media Department Manager",
              date: "SEP 2025 - PRESENT",
              description: `<strong>Software & Media Department Manager :</strong><br>
                - Leads the software and digital media department within the Group Coin branch.<br>
                - Manages the development, maintenance, and automation of internal systems, including CRM and ERP integrations.<br>
                - Oversees the company's social media presence and digital marketing campaigns.<br>
                - Designs visual content, promotional materials, and coordinates with management to enhance brand visibility and customer engagement.`,
              linkPath: "https://coin-market.store",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "View Website",
              src: "Masfufat - Technical Company",
              title: "Front-End Developer",
              date: "MAR 2024 - OCT 2025",
              description: `Front-End Developer : <br>- Developed and enhanced user interfaces for masfufat.com using modern technologies such as HTML, CSS, JavaScript, and frameworks like Tailwind CSS and Vue.js.<br>- Collaborated with the design and development teams to improve user experience and meet requirements.<br>- Ensured cross-browser and cross-device compatibility through rigorous testing and performance optimization.`,
              linkPath: "https://masfufat.com",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "View Website",
              src: "Art-tech - Printing and Decoration Company",
              title: "Software Department Manager for Printing Machines",
              date: "DEC 2022 - JUN 2024",
              description: `<strong>Software Department Manager for Printing Machines :</strong><br>- Managed the software department for printing machines, including the development and optimization of software solutions for machine operations.<br/>- Oversaw software maintenance and performed regular updates to ensure optimal performance.<br/>- Collaborated with other departments to understand printing requirements and implement advanced technical solutions to enhance productivity.<br/>- Provided technical support and training to the team to ensure proper utilization of developed technologies.`,
              linkPath: "https://art-techiq.com",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "View Website",
              src: "Alghadaq - Technical Company",
              title: "Software Project Manager",
              date: "DEC 2022 - DEC 2024",
              description: `<strong>Software Project Manager :</strong><br>- Managed all software projects, including mobile app development and e-commerce website creation.<br>- Oversaw payment gateway integrations and linked shipping companies to clients' websites for seamless operations.<br>- Coordinated with technical teams to ensure on-time delivery and client satisfaction.<br>- Developed strategies to enhance processes and ensure the quality of delivered software solutions.`,
              linkPath: "https://alghadaqit.tech",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "View Website",
              src: "Moustaql",
              title: "Full Stack Developer",
              date: "DEC 2021 - PRESENT",
              description: `Programming services (websites, Android and iPhone applications,)`,
              linkPath: "https://mostaql.com/u/Aquarius_IT",
              havePopup: false,
              popup: {},
            },
            {
              box: "recommendation",
              type: "View Website",
              src: "Khamsat",
              title: "Graphic designer",
              date: "DEC 2021 - PRESENT",
              description: `Design services (logos, visual identity, social media, marketing)`,
              linkPath: "https://khamsat.com/user/aquarius_it",
              havePopup: false,
              popup: {},
            },
          ],
        },
      ],
      contact: [
        {
          id: 1,
          data: [
            ["Country:", "Syria", "l"],
            ["City:", "Homs", "l"],
            ["Streat:", "Old Clock, City Center 2 Building", "l"],
          ],
        },
        {
          id: 2,
          data: [
            ["Email:", "alaaqutfa.work@gmail.com", "e"],
            ["Whatsapp:", "+9647864034927", "w"],
            ["Office:", "+9647864034927", "p"],
          ],
        },
      ],
    },
    Brand: ["img/brands/1.png", "img/brands/2.png"],
    Copyright: ["https://wa.me/+9647864034927", "Alaa Qutfa"],
    Menu: ["Home", "Portfolio", "History", "Contact"],
    Language: [
      ["EN", true, "en"],
      ["AR", false, "ar"],
    ],
    Preloader: {
      id: "preloader",
      Name: "Alaa Qutfa",
      JobTitle: "Software Engineer",
    },
  },
    portfolio_ar = {
      Data: {
        Top: {
          Avatar: "img/face-1.png",
          Name: "علاء قطفة",
          Post: `مهندس برمجيات`,
        },
        Scroll: {
          About: [
            ["العمر", currentYear - 2001],
            ["البلد", "سوريا"],
            ["المدينة", "حمص"],
          ],
          Languages: [
            {
              Id: "circleprog1",
              Type: "Circle",
              Name: "العربية",
              Progress: "p100",
            },
            {
              Id: "circleprog2",
              Type: "Circle",
              Name: "الأنكليزية",
              Progress: "p80",
            },
            {
              Id: "circleprog3",
              Type: "Circle",
              Name: "الألمانية",
              Progress: "p35",
            },
            {
              Id: "circleprog4",
              Type: "Circle",
              Name: "الكردية",
              Progress: "p20",
            },
          ],
          Skills: [
            // Web Programming Languages :
            {
              Title: "لغات البرمجة :",
              items: [
                { id: "lineprog5", Type: "line", Name: "JavaScript (ES6+)", Progress: "100" },
                { id: "lineprog9", Type: "line", Name: "PHP", Progress: "100" },
                { id: "lineprog18", Type: "line", Name: "Python", Progress: "100" },
                {
                  id: "lineprog11",
                  Type: "line",
                  Name: "Java",
                  Progress: "85",
                },
                {
                  id: "lineprog10",
                  Type: "line",
                  Name: "Dart",
                  Progress: "100",
                },
              ],
            },
            // Front-End Technologies :
            {
              Title: "تقنيات الواجهات الأمامية :",
              items: [
                {
                  id: "lineprog1",
                  Type: "line",
                  Name: "HTML5",
                  Progress: "100",
                },
                {
                  id: "lineprog2",
                  Type: "line",
                  Name: "CSS3",
                  Progress: "100",
                },
                {
                  id: "lineprog3",
                  Type: "line",
                  Name: "Tailwindcss",
                  Progress: "100",
                },
                {
                  id: "lineprog3",
                  Type: "line",
                  Name: "Bootstrap",
                  Progress: "100",
                },
                {
                  id: "lineprog4",
                  Type: "line",
                  Name: "Sass",
                  Progress: "100",
                },
                {
                  id: "lineprog7",
                  Type: "line",
                  Name: "Vue js",
                  Progress: "90",
                },
                {
                  id: "lineprog7",
                  Type: "line",
                  Name: "React js",
                  Progress: "90",
                },
                {
                  id: "lineprog8",
                  Type: "line",
                  Name: "Jquery",
                  Progress: "100",
                },
              ],
            },
            // Back-End Technologies :
            {
              Title: "تقنيات الواجهات الخلفية :",
              items: [
                {
                  id: "lineprog21",
                  Type: "line",
                  Name: "Laravel",
                  Progress: "100",
                },
                {
                  id: "lineprog6",
                  Type: "line",
                  Name: "Node.js",
                  Progress: "100",
                },
                {
                  id: "lineprog22",
                  Type: "line",
                  Name: "Express.js",
                  Progress: "100",
                },
              ],
            },
            // Databases :
            {
              Title: "قواعد البيانات :",
              items: [
                {
                  id: "lineprog19",
                  Type: "line",
                  Name: "SQL/MySQL",
                  Progress: "100",
                },
                {
                  id: "lineprog20",
                  Type: "line",
                  Name: "MongoDB",
                  Progress: "100",
                },
              ],
            },
            // Mobile Development :
            {
              Title: "تطوير تطبيقات الموبايل :",
              items: [
                {
                  id: "lineprog23",
                  Type: "line",
                  Name: "Flutter",
                  Progress: "100",
                },
                {
                  id: "lineprog24",
                  Type: "line",
                  Name: "GetX",
                  Progress: "100",
                },
              ],
            },
            // Version Control :
            {
              Title: "التحكم في الإصدارات :",
              items: [
                {
                  id: "lineprog25",
                  Type: "line",
                  Name: "Git",
                  Progress: "100",
                },
                {
                  id: "lineprog26",
                  Type: "line",
                  Name: "GitHub",
                  Progress: "100",
                },
                {
                  id: "lineprog27",
                  Type: "line",
                  Name: "Azure",
                  Progress: "100",
                },
              ],
            },
            // Tools & Platforms :
            {
              Title: "الأدوات والمنصات :",
              items: [
                {
                  id: "lineprog28",
                  Type: "line",
                  Name: "Docker",
                  Progress: "100",
                },
                {
                  id: "lineprog29",
                  Type: "line",
                  Name: "Nginx",
                  Progress: "100",
                },
                {
                  id: "lineprog30",
                  Type: "line",
                  Name: "RESTful APIs",
                  Progress: "100",
                },
              ],
            },
            // UI/UX Programs :
            {
              Title: "UI/UX Programs :",
              items: [
                {
                  id: "lineprog12",
                  Type: "line",
                  Name: "Figma",
                  Progress: "90",
                },
                {
                  id: "lineprog12",
                  Type: "line",
                  Name: "Adobe XD",
                  Progress: "100",
                },
              ],
            },
            // Graphic Design Programs :
            {
              Title: "برامج التصميم الجرافيكي :",
              items: [
                {
                  id: "lineprog13",
                  Type: "line",
                  Name: "Adobe Photoshop",
                  Progress: "100",
                },
                {
                  id: "lineprog14",
                  Type: "line",
                  Name: "Adobe Illustrator",
                  Progress: "100",
                },
              ],
            },
            // Video Editing Programs :
            {
              Title: "برامج تحرير الفيديو :",
              items: [
                {
                  id: "lineprog15",
                  Type: "line",
                  Name: "Adobe Premiere Pro",
                  Progress: "90",
                },
                {
                  id: "lineprog16",
                  Type: "line",
                  Name: "Adobe After Effects",
                  Progress: "80",
                },
              ],
            },
            // Sound Editing Programs :
            {
              Title: "برامج تحرير الصوت :",
              items: [
                {
                  id: "lineprog17",
                  Type: "line",
                  Name: "Adobe Audition",
                  Progress: "70",
                },
              ],
            },
          ],
          Knowledges: [
            "القدرة على العمل لساعات طويلة",
            "قادر على العمل تحت الضغط",
            "روح الفريق والمشاركة",
            "تبادل الخبرات العلمية",
            "الالتزام بالمواعيد النهائية مع العملاء",
            "الدقة في العمل والاهتمام برأي العميل",
            "الاهتمام بقواعد التصميم الأكاديمي",
            "التغذية البصرية جيدة",
            "الدقة في اختيار الألوان المتناغمة",
            "إنشاء الهويات البصرية للشركات",
            "التعلم المستمر",
            "تطوير المهارات",
            "مواكبة التطور والتصميمات الحديثة",
            "اللباقة في التحدث والتعامل بمصداقية",
            "OOP",
            "Git & Github",
          ],
          CV: "files/alaaqutfa.pdf",
        },
        Bottom: {
          Whatsapp: [
            "https://wa.me/+9647864034927",
            `<i class="fa-brands fa-whatsapp"></i>`,
          ],
          Facebook: [
            "https://www.facebook.com/alaaqutfa.tech",
            `<i class="fa-brands fa-facebook"></i>`,
          ],
          Instagram: [
            "https://www.instagram.com/alaaqutfa.tech",
            `<i class="fa-brands fa-instagram"></i>`,
          ],
          Linkedin: [
            "https://www.linkedin.com/in/alaaqutfa",
            `<i class="fa-brands fa-linkedin"></i>`,
          ],
        },
      },
      Content: {
        home: {
          banner: {
            title: "اكتشف مساحتي الفنية المذهلة!",
            startStaticPhrae: "&lt;<i>code</i>&gt; أقوم ببناء",
            slidePhrases: `["واجهات الويب.", "تطبيقات ايفون و اندرويد.","نظام تخطيط موارد الشركات","نظام إدارة علاقات العملاء"]`,
            endStaticPhrae: "&lt;/<i>code</i>&gt;",
            btnText: "استكشف الآن",
            btnLink: "",
            linkText: "دعونا نعمل معا",
            linkUrl: "https://www.linkedin.com/in/alaaqutfa",
            bgImgPath: "img/bg.jpg",
            imgPath: "img/face-2.png",
          },
          counters: [
            ["سنوات خبرة", currentYear - 2019],
            ["المشاريع المنجزة", 12],
            ["الزبائن السعداء", 12],
            ["الأوسمة والجوائز", 8],
          ],
          services: [
            {
              title: "تطوير تطبيقات الهاتف",
              description: `حول أفكارك إلى واقع من خلال بناء تطبيقك الخاص، وارتقي بأعمالك إلى الفخامة والتميز، واجعل خدماتك ومبيعاتك أسهل وأسرع وعلى نطاق أوسع. وسأقدم لك الحلول المناسبة لتحقيق ذلك.`,
              linkUrl: "https://wa.me/+9647864034927",
            },
            {
              title: "خدمات تطوير الويب",
              description: `أقدم لك مواقع الويب الأكثر أمانًا والأسرع والأفضل جودة مع مجموعة واسعة من الخيارات التي تساعدك في العثور على حلمك وبدء عملك عبر الإنترنت.`,
              linkUrl: "https://wa.me/+9647864034927",
            },
            {
              title: "الاستضافة",
              description: `أفضل وأسرع استضافة مع دعم 24/7 وبأسعار مميزة مع امتدادات غير محدودة`,
              linkUrl: "https://wa.me/+9647864034927",
            },
            {
              title: "الأمن الإلكتروني",
              description: `يعد الأمن السيبراني مفهومًا يتغير باستمرار مع ظهور تهديدات جديدة كل يوم تهدد أمان معلوماتك وبياناتك من المتسللين. أقدم لك خدماتي لحماية بياناتك وأعمالك ومواكبة ما يحدث في الفضاء الإلكتروني`,
              linkUrl: "https://wa.me/+9647864034927",
            },
            {
              title: "التسويق",
              description: `سأساعدك في وضع خطة للوصول بمنتجك إلى أكبر عدد من العملاء وتفعيل حسابات أعمالك على صفحات التواصل الاجتماعي.`,
              linkUrl: "https://wa.me/+9647864034927",
            },
            {
              title: "التصميم",
              description: `سأضيف لمسات فنية على عملك ليجعله مميزاً ومتألقاً بين جميع الأعمال المشابهة.`,
              linkUrl: "https://wa.me/+9647864034927",
            },
          ],
          prices: [
            {
              title: "Single",
              price: `<span>$</span>8.3<span>mo</span>`,
              isPopular: false,
              conditions: [
                ["الأداء القياسي لموقعك", false],
                ["1 موقع", false],
                ["50 GB مساحة الذاكرة", false],
                ["نسخ أحتياطي أسبوعي", false],
                ["1 بريد الكتروني أحترافي", false],
                ["SSL مجاني غير محدود", false],
                ["غير محدود Bandwidth", false],
                ["24/7 الدعم", false],
                ["مجاني CDN", true],
                ["عنوان IP مخصص", true],
              ],
              linkUrl: "https://wa.me/+9647864034927",
              note: null,
            },
            {
              title: "Premium",
              price: `<span>$</span>12.5<span>mo</span>`,
              isPopular: true,
              conditions: [
                ["الأداء القياسي لموقعك", false],
                ["100 موقع", false],
                ["200 GB مساحة الذاكرة", false],
                ["نسخ أحتياطي أسبوعي", false],
                ["بريد إلكتروني مجاني", false],
                ["SSL مجاني غير محدود", false],
                ["غير محدود Bandwidth", false],
                ["24/7 الدعم", false],
                ["مجاني CDN", true],
                ["عنوان IP مخصص", true],
              ],
              linkUrl: "https://wa.me/+9647864034927",
              note: null,
            },
            {
              title: "Business",
              price: `<span>$</span>16.6<span>mo</span>`,
              isPopular: false,
              conditions: [
                ["زيادة الأداء", false],
                ["100 موقع", false],
                ["200 GB مساحة الذاكرة", false],
                ["نسخ أحتياطي يومي", false],
                ["بريد إلكتروني مجاني", false],
                ["SSL مجاني غير محدود", false],
                ["غير محدود Bandwidth", false],
                ["24/7 الدعم", false],
                ["مجاني CDN", false],
                ["عنوان IP مخصص", true],
              ],
              linkUrl: "https://wa.me/+9647864034927",
              note: null,
            },
            {
              title: "Ultimate Plan",
              price: `<span>$</span>26.6<span>mo</span>`,
              isPopular: false,
              conditions: [
                ["اداء عالي", false],
                ["300 موقع", false],
                ["200 GB مساحة الذاكرة", false],
                ["نسخ أحتياطي يومي", false],
                ["بريد إلكتروني مجاني", false],
                ["SSL مجاني غير محدود", false],
                ["غير محدود Bandwidth", false],
                ["24/7 الدعم", false],
                ["مجاني CDN", false],
                ["عنوان IP مخصص", false],
              ],
              linkUrl: "https://wa.me/+9647864034927",
              note: null,
            },
          ],
          recommendations: [
            {
              imgPath: "img/testimonials/moaaz.jpeg",
              name: "معاذ الحبال",
              description: "مطور ويب | فنان صوتي",
              text: `علاء هو مطور ويب ماهر للغاية يتمتع بنظرة ثاقبة للتفاصيل وشغف ببناء حلول فعالة وقابلة للتطوير. قدرته على تحويل الأفكار المعقدة إلى تطبيقات ويب سلسة ووظيفية مثيرة للإعجاب حقًا.<br>ما يجعل علاء مميزًا هو عقليته في حل المشكلات وتفانيه في كتابة أكواد نظيفة وقابلة للصيانة. إنه دائمًا حريص على التعلم والتكيف والمساهمة في نجاح الفريق، مما يجعل التعاون معه منتجًا وممتعًا.`,
              stars: 5,
            },
            {
              imgPath: "img/testimonials/hamza.jpeg",
              name: "حمزة  الصاغرجي",
              description: "مطور ويب متكامل لدى شركة مصفوفات دروبشيبنج في المملكة العربية السعودية",
              text: `لقد كان من دواعي سروري العمل مع علاء، وموهبته كمطور واجهة أمامية رائعة حقًا. يتميز دائمًا بإبداعه واهتمامه بالتفاصيل ومهاراته في حل المشكلات. كان العمل معه ملهمًا ومفيدًا.`,
              stars: 5,
            },
            {
              imgPath: "img/testimonials/mahmood.PNG",
              name: "محمود شاهين",
              description: "مصمم واجهة المستخدم وتجربة المستخدم || برامج تكنولوجيا المعلومات",
              text: `المهندس علاء من المميزين في العمل ويقدم خدمات احترافية وسريعة ومتفهم في التعامل كل الاحترام لكم`,
              stars: 5,
            },
          ],
        },
        gallery: {
          filter_nav: [
            ["*", "جميع الفئات"],
            [".web", "المواقع الإلكترونية"],
            [".applications", "التطبيقات"],
          ],
          filter_list: [
            {
              type: "web",
              imgPath: "img/gallery/syriansouq.png",
              title: "Syrian Souq",
              description: "At Syrian Souq, we provide a comprehensive e-commerce platform designed to connect Syrian sellers with customers worldwide. We believe shopping should be easy, reliable, and accessible to everyone, which is why we offer a wide range of high-quality products at competitive prices.",
              templateUrl: "https://syriansouq.com/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/alghadaq.png",
              title: "ALGHADAQ - IT",
              description: "ALGHADAQ - IT is an innovative IT Solutions company specializing in website development, software development, Product Design, and Application development. Providing cloud data services and electronic marketing interfaces for organizations in addition to accounting solutions and protecting electronic security in a professional manner that ensures smooth and harmonious work among the organization’s members.",
              templateUrl: "https://alghadaqit.tech/",
              hBG: [true, "#fff"],
            },
            {
              type: "applications",
              imgPath: "img/gallery/watan.png",
              title: "Watan eCommerce App",
              description: "The Watan eCommerce App is designed to provide a modern and seamless online shopping experience, allowing users to browse and purchase a wide variety of products with ease and security. We believe that mobile shopping should be fast, reliable, and convenient, which is why we offer secure payment options and trusted shipping services to ensure timely deliveries.",
              templateUrl: "https://play.google.com/store/apps/details?id=com.watan.consumers&pli=1",
              hBG: [true, "#fff"],
            },
            {
              type: "applications",
              imgPath: "img/gallery/watan-supplier.png",
              title: "Watan Suppliers App",
              description: "The Watan Suppliers App is a comprehensive platform designed to help suppliers manage their business with ease and efficiency. The app provides advanced tools for listing products, managing orders, and communicating with customers, making it easier for suppliers to expand their reach and grow their market presence.",
              templateUrl: "https://play.google.com/store/apps/details?id=net.watan.suppliers",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/Art-tech.png",
              title: "Art-tech",
              description: "Art-Tech is a team of architecture, decoration, and design enthusiasts who got together to establish a high-tech print house based in Erbil, KRI. We offer our services throughout Iraq and specialize in bringing to life all forms of artwork, be it traditional or avant-garde. We utilize the latest Printing technologies, and advanced wide format printing technologies to offer the Iraqi businesses and households all that they need when it comes to decoration variety. Our services also include ornaments for hotels, resorts, offices, and villas as well as wallpaper printing, murals and more.",
              templateUrl: "https://art-techiq.netlify.app/",
              hBG: [true, "#fff"],
            },
            {
              type: "applications",
              imgPath: "img/gallery/watan-agent.png",
              title: "Watan Services Agent App",
              description: "The Watan Services Agent App is the perfect platform for agents who want to provide Watan Services to users, offering them exclusive discounts and significant savings on their everyday purchases. Through this app, agents can manage customer subscriptions, track transactions, and maximize the benefits of the discount program.",
              templateUrl: "https://play.google.com/store/apps/details?id=com.watan.agent.app",
              hBG: [true, "#fff"],
            },
            {
              type: "applications",
              imgPath: "img/gallery/watan-users.png",
              title: "Watan Services Users App",
              description: "The Watan Services Users App is your gateway to a world of exclusive discounts and offers, helping you save big on your daily purchases. We believe that smart shopping should be easy and accessible to everyone, which is why we provide a seamless experience to enjoy special discounts across various stores and services.",
              templateUrl: "https://play.google.com/store/apps/details?id=com.watan.iq.app",
              hBG: [true, "#fff"],
            },
            {
              type: "applications",
              imgPath: "img/gallery/shaheen.png",
              title: "Shaheen Consumers App",
              description: "The Shaheen Consumers App is designed to provide a seamless and fast online shopping experience, allowing consumers to browse and purchase a wide range of high-quality products at competitive prices. We believe shopping should be convenient and secure, which is why we offer reliable payment options and fast shipping services to ensure smooth order delivery.",
              templateUrl: "https://shaheen-shop.com/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/Aljazeera-mockup.png",
              title: "Aljazeera Machinary",
              description: "Al Jazeera Machinery was established in 1995 and since then it has successfully been a supplier of printing equipment and printing services, which also includes importing and marketing raw materials, counselling and training of technical staffs. In order to accommodate a bigger selection of presses and servicing a larger area, Al Jazeera Machinery now has two branches located in (Baghdad & Erbil / Iraq).",
              templateUrl: "https://aljazeeramachinery.netlify.app/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/world-gate.png",
              title: "World Gate - Medical",
              description: "world gate medical and lab supply company has powerful technical force made up of aggressive, dedicated service engineers to take care of service and After Sales Service of medical equipment's in field of dermatology and cosmetic (Alex hair removal machines & diode laser, IPL) and all type of medical equipment's in all over IRAQ - Kurdistan region. World gate medical and lab Supply was found in the middle of the year 2009 which identified a market need for the high quality of medical equipment in field of dermatology and cosmetic in Iraq - Kurdistan Region at affordable prices.",
              templateUrl: "https://worldgate-medical.netlify.app/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/Limitless-tech.png",
              title: "Limitless-tech",
              description: "Limitless Tech is an innovative IT Solutions company specializing in website development, software development, Product Design, and Application development.",
              templateUrl: "https://limitless-tech.cloud/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/shaheenecommerce.png",
              title: "Shaheen-shop",
              description: "At Shaheen Shop, we strive to provide an exceptional online shopping experience that meets our customers’ needs with the best quality and prices. We offer a wide range of carefully selected products to ensure your complete satisfaction. Our goal is to provide reliable and fast service, backed by a dedicated team committed to delivering the best shopping experience possible.",
              templateUrl: "https://shaheen-shop.com/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/watanecommerce.png",
              title: "Watan eCommerce",
              description: "At Watan eCommerce, we strive to offer a modern online shopping experience that meets customers’ needs with ease and security. Our platform connects sellers with buyers, providing access to a wide range of high-quality products at competitive prices.",
              templateUrl: "https://watan.website/",
              hBG: [true, "#fff"],
            },
            {
              type: "web",
              imgPath: "img/gallery/watan.dev.png",
              title: "Watan Services",
              description: "Discover a world of convenience and savings, The perfect companion to achieve your financial and marketing goals",
              templateUrl: "https://watan.dev/",
              hBG: [true, "#fff"],
            },
          ],
        },
        history: [
          {
            title: "التعليم",
            data: [
              {
                box: "diplome",
                type: "شهادة الخبرة",
                src: "أكاديمية الأفق ماليزيا",
                title: "مهندس برمجيات",
                date: "ديسمبر 2023",
                description: "طالب هندسة معلوماتية",
                linkPath: "files/alofuk.jpg",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "دبلومة",
                src: "الجامعة الوطنية الخاصة",
                title: "طالب",
                date: "يناير 2020 - مايو 2022",
                description: "طالب هندسة معلوماتية",
                linkPath: "files/university life en.jpg",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "بكالوريوس",
                src: "ثانوية محسن عباس",
                title: "طالب",
                date: "يناير 2016 - مايو 2019",
                description: `الدراسة العلمية في الجمهورية العربية السورية`,
                linkPath: "files/bacalorious en.jpg",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "HTML دبلوم",
                date: "مارس 2022",
                description: `دورة لتعلم بناء وكتابة هيكل المواقع`,
                linkPath: "files/diploma-HTMLCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "CSS دبلوم",
                date: "مارس 2022",
                description: `دورة لتعلم تصميم وتنسيق المواقع الإلكترونية`,
                linkPath: "files/diploma-CSSCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "Bootstrap دبلوم",
                date: "مارس 2022",
                description: `دورة لتعلم تصميم وتنسيق مواقع الويب باستخدام bootstrap`,
                linkPath: "files/diploma-BootstrapCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "JavaScript دبلوم",
                date: "أبريل 2022",
                description: `دورة لتعلم لغة جافا سكريبت والتعامل مع ملفات json وAPI`,
                linkPath: "files/diploma-JavaScriptCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "PHP دبلوم",
                date: "أبريل 2022",
                description: `دورة لتعلم لغة php والتعامل مع ملفات json و API وقواعد البيانات لإنشاء مواقع متكاملة وأنظمة تسجيل الدخول والتجارة الإلكترونية`,
                linkPath: "files/diploma-PHPCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "SQL/MySQL دبلوم",
                date: "أبريل 2022",
                description: `دورة لتعلم SQL/mysql والتعامل مع قواعد البيانات`,
                linkPath: "files/diploma-SQL MySQLCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
              {
                box: "diplome",
                type: "شهادة",
                src: "أكاديمية شيار",
                title: "JAVA دبلوم",
                date: "أبريل 2022",
                description: `دورة لتعلم تصميم وتنسيق تطبيقات الأندرويد باستخدام Java وAndroid Studio`,
                linkPath: "files/diploma-javaCoderShiyar.pdf",
                havePopup: false,
                popup: null,
              },
            ],
          },
          {
            title: "العمل",
            data: [
              {
                box: "recommendation",
                type: "معلومات",
                src: "مهندس برمجيات",
                title: "عمل خاص",
                date: "أبريل 2018 – حتى الآن",
                description: `عمل خاص - خبرة واسعة في بناء وتطوير الأنظمة وتطوير وتصميم واجهات المستخدم لكل من تطبيقات الهاتف والمواقع الإلكترونية، بالإضافة إلى بناء وتطوير وتأمين قواعد البيانات بكافة أنواعها.`,
                linkPath: "https://wa.me/+9647864034927",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "عرض الموقع",
                src: "مجموعة كوين ش.م.ل",
                title: "مدير قسم البرمجة والإعلام الرقمي",
                date: "سبتمبر 2025 - حتى الآن",
                description: `<strong>مدير قسم البرمجة والإعلام الرقمي :</strong><br>
                  - الإشراف على قسم البرمجة والإعلام الرقمي ضمن فرع مجموعة كوين.<br>
                  - إدارة تطوير الأنظمة الداخلية وصيانتها وأتمتتها، بما في ذلك دمج أنظمة CRM و ERP.<br>
                  - الإشراف على حضور الشركة عبر وسائل التواصل الاجتماعي والحملات التسويقية الرقمية.<br>
                  - تصميم المحتوى المرئي والمواد الترويجية والتنسيق مع الإدارة لتعزيز العلامة التجارية وزيادة التفاعل مع العملاء.`,
                linkPath: "https://coin-market.store",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "عرض الموقع",
                src: "Masfufat - شركة تقنية",
                title: "مطوّر واجهات أمامية",
                date: "مارس 2024 - أكتوبر 2025",
                description: `<strong>مطوّر واجهات أمامية :</strong><br/>- طوّرت وحسّنت واجهات المستخدم لموقع masfufat.com باستخدام تقنيات حديثة مثل HTML، CSS، JavaScript، وإطارات العمل مثل Tailwind CSS و Vue.js.<br/>- تعاونت مع فرق التصميم والتطوير لتحسين تجربة المستخدم وتلبية المتطلبات.<br/>- ضمنت التوافق عبر المتصفحات والأجهزة المختلفة من خلال اختبارات دقيقة وتحسين الأداء.`,
                linkPath: "https://masfufat.com",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "عرض الموقع",
                src: "Art-tech - شركة الطباعة والديكور",
                title: "مدير قسم البرمجيات لآلات الطباعة",
                date: "ديسمبر 2022 - يونيو 2024",
                description: `<strong>مدير قسم البرمجيات لآلات الطباعة :</strong><br/>- أدرت قسم البرمجيات لآلات الطباعة، بما في ذلك تطوير وتحسين الحلول البرمجية لعمليات تشغيل الآلات.<br/>- أشرفت على صيانة البرمجيات وأجريت تحديثات منتظمة لضمان الأداء الأمثل.<br/>- تعاونت مع الأقسام الأخرى لفهم متطلبات الطباعة وتنفيذ حلول تقنية متقدمة لتعزيز الإنتاجية.<br/>- قدمت الدعم الفني والتدريب للفريق لضمان الاستخدام الصحيح للتقنيات المطورة.`,
                linkPath: "https://art-techiq.com",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "عرض الموقع",
                src: "Alghadaq - شركة تقنية",
                title: "مدير المشاريع البرمجية",
                date: "ديسمبر 2022 - ديسمبر 2024",
                description: `<strong>مدير مشاريع برمجية :</strong><br/>- أدرت جميع المشاريع البرمجية، بما في ذلك تطوير تطبيقات الجوال وإنشاء مواقع التجارة الإلكترونية.<br/>- أشرفت على تكامل بوابات الدفع وربط شركات الشحن بمواقع العملاء لضمان عمليات سلسة.<br/>- نسقت مع الفرق التقنية لضمان التسليم في الوقت المحدد وتحقيق رضا العملاء.<br/>- طورت استراتيجيات لتحسين العمليات وضمان جودة الحلول البرمجية المقدمة.`,
                linkPath: "https://alghadaqit.tech",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "عرض الموقع",
                src: "مستقل",
                title: "Full Stack مطور",
                date: "ديسمبر 2021 - حتى الآن",
                description: `خدمات البرمجة (مواقع الويب، تطبيقات أندرويد وآيفون)`,
                linkPath: "https://mostaql.com/u/Aquarius_IT",
                havePopup: false,
                popup: {},
              },
              {
                box: "recommendation",
                type: "عرض الموقع",
                src: "خمسات",
                title: "مصمم",
                date: "ديسمبر 2021 - حتى الآن",
                description: `خدمات التصميم (الشعارات، الهوية البصرية، وسائل التواصل الاجتماعي، التسويق)`,
                linkPath: "https://khamsat.com/user/aquarius_it",
                havePopup: false,
                popup: {},
              },
            ],
          },
        ],
        contact: [
          {
            id: 1,
            data: [
              ["البلد:", "سوريا", "l"],
              ["المدينة:", "حمص", "l"],
              ["الشارع:", "الساعة القديمة, بناء سيتي سنتر 2", "l"],
            ],
          },
          {
            id: 2,
            data: [
              ["Email:", "alaaqutfa.work@gmail.com", "e"],
              ["Whatsapp:", "+9647864034927", "w"],
              ["Office:", "+9647864034927", "p"],
            ],
          },
        ],
      },
      Brand: ["img/brands/1.png", "img/brands/2.png"],
      Copyright: ["https://wa.me/+9647864034927", "علاء قطفة"],
      Menu: ["الصفحة الرئيسية", "المعرض", "التاريخ", "الأتصال"],
      Language: [
        ["EN", false, "en"],
        ["ع", true, "ar"],
      ],
      Preloader: {
        id: "preloader",
        Name: "علاء قطفة",
        JobTitle: "مهندس برمجيات",
      },
    };
  //* Person Data :
  var portfolio;
  const portfolio_lang = localStorage.getItem("aq-apps-language");
  if (portfolio_lang == "ar") {
    portfolio = portfolio_ar;
  } else {
    portfolio = portfolio_en;
  }
  var portfolio_data_scroll_about = document.getElementById(
    "portfolio-data-scroll-about"
  ),
    portfolio_data_scroll_languages = document.getElementById(
      "portfolio-data-scroll-languages"
    ),
    portfolio_data_scroll_skills = document.getElementById(
      "portfolio-data-scroll-skills"
    ),
    portfolio_data_scroll_knowledge = document.getElementById(
      "portfolio-data-scroll-knowledge"
    ),
    portfolio_data_bottom = document.getElementById("portfolio-data-bottom"),
    portfolio_content_home_counters = document.getElementById(
      "portfolio-content-home-counters"
    ),
    portfolio_content_home_services = document.getElementById(
      "portfolio-content-home-services"
    ),
    portfolio_content_home_price = document.getElementById(
      "portfolio-content-home-price"
    ),
    portfolio_content_home_recommendations = document.getElementById(
      "portfolio-Content-home-recommendations"
    ),
    portfolio_content_gallery_filter_nav = document.getElementById(
      "portfolio-content-gallery-filter-nav"
    ),
    portfolio_content_gallery_filter_list = document.getElementById(
      "portfolio-content-gallery-filter-list"
    ),
    portfolio_content_history = document.getElementById(
      "portfolio-content-history"
    ),
    portfolio_content_contact = document.getElementById(
      "portfolio-content-contact"
    ),
    portfolio_brands = document.getElementById("portfolio-brands"),
    portfolio_menu = document.getElementById("portfolio-menu"),
    portfolio_language = document.getElementById("portfolio-language");
  // * Response Actions :
  $("#portfolio-data-top").html(`
                  <div class="art-avatar">
                    <a
                      data-fancybox="avatar"
                      href="${portfolio.Data.Top.Avatar}"
                      class="art-avatar-curtain">
                      <img src="${portfolio.Data.Top.Avatar}" alt="avatar" />
                      <i class="fas fa-expand"></i>
                    </a>
                    <div class="art-lamp-light">
                      <div class="art-available-lamp"></div>
                    </div>
                  </div>
                  <h5 class="art-name mb-10">
                    <a href="${portfolio.Data.Bottom.Whatsapp[0]}" target="_blank">${portfolio.Data.Top.Name}</a>
                  </h5>
                  <div class="art-sm-text">
                    ${portfolio.Data.Top.Post}
                  </div>
  `);
  jQuery.each(portfolio.Data.Scroll.About, (index, item) => {
    portfolio_data_scroll_about.innerHTML += `
    <li>
      <h6>${item[0]}</h6>
      <span>${item[1]}</span>
    </li>
    `;
  });
  jQuery.each(portfolio.Data.Scroll.Languages, (index, item) => {
    portfolio_data_scroll_languages.innerHTML += `
    <div class="art-lang-skills-item">
      <div id="${item.Id}" class="art-cirkle-progress ${item.Progress} ${item.Type}"></div>
      <h6>${item.Name}</h6>
    </div>
    `;
  });
  jQuery.each(portfolio.Data.Scroll.Skills, (index, item) => {
    portfolio_data_scroll_skills.innerHTML += `
    <div>
      <h6>
        <hr />
        ${item.Title}
        <hr />
      </h6>
    </div>
    `;
    jQuery.each(item.items, (index, skill) => {
      portfolio_data_scroll_skills.innerHTML += `
        <div class="art-hard-skills-item">
          <div class="art-skill-heading">
            <h6>${skill.Name}</h6>
          </div>
          <div class="art-line-progress">
            <div id="${skill.id}" class="${skill.Type + " " + skill.Progress
        }"></div>
          </div>
        </div>      
      `;
    });
  });
  jQuery.each(portfolio.Data.Scroll.Knowledges, (index, item) => {
    portfolio_data_scroll_knowledge.innerHTML += `<li>${item}</li>`;
  });
  $("#portfolio-data-scroll-CV").attr("href", portfolio.Data.Scroll.CV);
  jQuery.each(portfolio.Data.Bottom, (index, item) => {
    portfolio_data_bottom.innerHTML += `
    <a
    href="${item[0]}"
    target="_blank"
    >${item[1]}</a>
    `;
  });
  $("#portfolio-copyright").html(
    `<div>© ${currentYear} <a href="${portfolio.Copyright[0]}" target="_blank" >${portfolio.Copyright[1]}</a></div>`
  );
  $("#portfolio-preloader").html(`
          <h4>${portfolio.Preloader.Name}</h4>
          <p class="m-1">${portfolio.Preloader.JobTitle}</p>
          <div id="${portfolio.Preloader.id}" class="art-preloader-load"></div>
  `);
  jQuery.each(portfolio.Menu, (index, item) => {
    portfolio_menu.innerHTML += `
  <li class="menu-item route ${index == 0 ? "current-menu-item" : ""} ">
    <a>${item}</a>
  </li>
  `;
  });
  $(".route").on("click", function () {
    var i = $(this).index();
    $(".route-content").each((i, k) => {
      $(".route-content")[i].classList.add("d-none");
    });
    $(".route-content")[i].classList.remove("d-none");
    $(".route.current-menu-item").removeClass("current-menu-item");
    $(".route")[i].classList.add("current-menu-item");
    $(".art-current-page").text(portfolio.Menu[i]);
  });
  $("#portfolio-content-home-banner").html(`
  <div class="row p-60-0 p-lg-30-0 p-md-15-0">
    <div class="col-lg-12">
      <div
        class="art-a art-banner"
        style="background-image: url(${portfolio.Content.home.banner.bgImgPath})"
      >
        <div class="art-banner-back"></div>
        <div class="art-banner-dec"></div>
        <div class="art-banner-overlay">
          <div class="art-banner-title">
            <h1 class="mb-15">
            ${portfolio.Content.home.banner.title}
            </h1>
            <div class="art-lg-text art-code mb-25">
            ${portfolio.Content.home.banner.startStaticPhrae}
              <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='${portfolio.Content.home.banner.slidePhrases}'
              ></span
              >${portfolio.Content.home.banner.endStaticPhrae}
            </div>
            <div class="art-buttons-frame">
              <!-- button -->
              <a
                id="exploreBtn"
                class="art-btn art-btn-md"
                style="color: #20202a; cursor: pointer;"
                ><span>${portfolio.Content.home.banner.btnText}</span></a
              >
              <a
                href="${portfolio.Content.home.banner.linkUrl}"
                class="art-link art-white-link art-w-chevron"
                target="_blank"
                >${portfolio.Content.home.banner.linkText}</a
              >
            </div>
          </div>
          <img
            src="img/face-2.png"
            class="art-banner-photo"
            alt="Alaa Qutfa"
          />
        </div>
      </div>
    </div>
  </div>`);
  $("#exploreBtn").on("click", () => {
    $(".route-content").each((i, k) => {
      $(".route-content")[i].classList.add("d-none");
    });
    $(".route-content")[1].classList.remove("d-none");
    $(".route.current-menu-item").removeClass("current-menu-item");
    $(".route")[1].classList.add("current-menu-item");
    $(".art-current-page").text(portfolio.Menu[1]);
  });
  jQuery.each(portfolio.Content.home.counters, (index, item) => {
    portfolio_content_home_counters.innerHTML += `
    <div class="col-md-3 col-6">
      <div class="art-counter-frame">
        <div class="art-counter-box">
          <span class="art-counter">${item[1]}</span
          ><span class="art-counter-plus">+</span>
        </div>
        <h6>${item[0]}</h6>
      </div>
    </div>
    `;
  });
  jQuery.each(portfolio.Content.home.services, (index, item) => {
    portfolio_content_home_services.innerHTML += `
    <div class="col-lg-4 col-md-6">
      <div class="art-a art-service-icon-box">
        <div class="art-service-ib-content">
          <h5 class="mb-15">${item.title}</h5>
          <div class="mb-15">
          ${item.description}
          </div>
          <div class="art-buttons-frame">
            <a
              href="${item.linkUrl}"
              class="art-link art-color-link art-w-chevron"
              >Order now</a
            >
          </div>
        </div>
      </div>
    </div>
    `;
  });
  jQuery.each(portfolio.Content.home.prices, (index, item) => {
    portfolio_content_home_price.innerHTML += `
        <div class="col-lg-3">
        <div class="art-a art-price ${item.isPopular == true ? "art-popular-price" : ""
      }">
          <div class="art-price-body">
            <h5 class="mb-30">${item.title}</h5>
            <div class="art-price-cost">
              <div class="art-number">${item.price}</div>
            </div>
            <ul class="price-list art-price-list">
            </ul>
            <a
              href="${item.linkUrl}"
              class="art-link art-color-link art-w-chevron"
              >Order now</a
            >
            ${item.note != null
        ? `<div class="art-asterisk">
            <sup>*</sup>Free only when ordering paid services
          </div>`
        : ""
      }
          </div>
        </div>
      </div>
    `;
    let list = document.querySelectorAll(".price-list");
    jQuery.each(item.conditions, (i, c) => {
      list[index].innerHTML += `<li class="${c[1] == true ? "art-empty-item" : ""
        }">${c[0]}</li>`;
    });
  });
  jQuery.each(portfolio.Brand, (index, item) => {
    portfolio_brands.innerHTML += `
    <div class="col-6 col-lg-3">
                      <img
                        class="art-brand"
                        src="${item}"
                        alt="brand"
                      />
                    </div>`;
  });
  jQuery.each(portfolio.Content.home.recommendations, (index, item) => {
    portfolio_content_home_recommendations.innerHTML += `
    <div class="swiper-slide">
      <div class="art-a art-testimonial">
        <div class="testimonial-body">
          <img
            class="art-testimonial-face"
            src="${item.imgPath}"
            alt="face"
          />
          <h5>${item.name}</h5>
          <div class="art-el-suptitle mb-15">
          ${item.description}
          </div>
          <div class="mb-15">
          ${item.text}
          </div>
        </div>
        <div class="art-testimonial-footer">
          <div class="art-left-side">
            <ul class="rate-list art-star-rate"></ul>
          </div>
          <div class="art-right-side"></div>
        </div>
      </div>
    </div>
  `;
    var rate_list = document.querySelectorAll(".rate-list");
    for (var i = 0; i < item.stars; i++) {
      rate_list[index].innerHTML += `<li><i class="fas fa-star"></i></li>`;
    }
    for (var i = 0; i < 5 - item.stars; i++) {
      rate_list[
        index
      ].innerHTML += `<li class="art-empty-item"><i class="fas fa-star"></i></li>`;
    }
  });
  jQuery.each(portfolio.Content.gallery.filter_nav, (index, item) => {
    portfolio_content_gallery_filter_nav.innerHTML += `
    <a
      ${index == 0 ? `id="gallery-click-btn"` : ""}
      data-filter="${item[0]}"
      class="art-link ${index == 0 ? "art-current" : ""}"
      style="cursor:pointer;"
      >${item[1]}</a>
    `;
  });
  jQuery.each(portfolio.Content.gallery.filter_list, (index, item) => {
    portfolio_content_gallery_filter_list.innerHTML += `
      <div class="art-grid-item ${item.type}">
        <a
          data-fancybox="gallery"
          href="${item.imgPath}"
          class="art-a art-portfolio-item-frame art-horizontal"
        >
          <img src="${item.imgPath}" style="background-color: ${item.hBG[0] == true ? item.hBG[1] : "transparent"}" alt="item" />
          <span class="art-item-hover"
            ><i class="fas fa-expand"></i
          ></span>
        </a>
        
        <div class="art-item-description">
          <h5 class="mb-15">${item.title}</h5>
          <p>${item.description}</p>
          <a
            href="${item.templateUrl}"
            class="art-link art-color-link art-w-chevron"
            target="_blank"
            >Live View</a
          >
        </div>
      </div>
    `;
  });
  jQuery.each(portfolio.Content.history, (index, item) => {
    portfolio_content_history.innerHTML += `
    <div class="col-lg-6">
      <div class="art-section-title">
        <div class="art-title-frame">
          <h4>${item.title}</h4>
        </div>
      </div>
      <div class="art-timeline art-gallery history-timeline-portfolio"></div>
    </div>
    `;
    var time_line = document.querySelectorAll(".history-timeline-portfolio");
    jQuery.each(item.data, (i, d) => {
      var id = index + 1;
      time_line[index].innerHTML += `
      <div class="art-timeline-item">
      <div class="art-timeline-mark-light"></div>
      <div class="art-timeline-mark"></div>
      <div class="art-a art-timeline-content">
        <div class="art-card-header">
          <div class="art-left-side">
            <h5>${d.src}</h5>
            <div class="art-el-suptitle mb-15">
              ${d.title}
            </div>
          </div>
          <div class="art-right-side">
            <span class="art-date"
              >${d.date}</span
            >
          </div>
        </div>
        <p>
        ${d.description}
        </p>
        <a
          data-fancybox="${d.box}"
          href="${d.havePopup == true ? "#art-recomendation-popup-" + id : d.linkPath
        }"
          class="art-link art-color-link art-w-chevron"
          >${d.type}</a
        >
      </div>
      ${d.havePopup == true
          ? `
      <!-- popup -->
      <div
        class="art-recomendation-popup"
        style="display: none"
        id="art-recomendation-popup-${id}"
      >
        <div class="art-a art-testimonial">
          <div class="testimonial-body">
            <img
              class="art-testimonial-face"
              src="${d.popup.imgPath}"
              alt="face"
            />
            <h5>${d.popup.name}</h5>
            <div class="art-el-suptitle mb-15">
            ${d.popup.title}
            </div>
            <div class="mb-15">
            ${d.popup.description}
            </div>
          </div>
          <!-- testimonial footer -->
          <div class="art-testimonial-footer">
            <div class="art-left-side">
              <!-- star rate -->
              <ul class="art-star-rate">
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
                <li><i class="fas fa-star"></i></li>
              </ul>
              <!-- star rate end -->
            </div>
            <div class="art-right-side"></div>
          </div>
          <!-- testimonial footer end -->
        </div>
        <!-- testimonial end -->
      </div>
    </div>
      `
          : ""
        }
      `;
    });
  });
  jQuery.each(portfolio.Content.contact, (index, item) => {
    var count = portfolio.Content.contact.length,
      x = $("#portfolio-content-contact").parent().width(),
      fullWidth = (x * 80) / 100,
      width = fullWidth / count + "px";
    portfolio_content_contact.innerHTML += `
    <div class="art-a art-card" style="width:${width}; min-width: 280px !important;">
    <div class="art-table p-15-15">
      <ul class="contact-list"></ul>
    </div>
  </div>`;
    var contact_list = document.querySelectorAll(".contact-list");
    jQuery.each(item.data, (i, cd) => {
      var type;
      if (cd[2] == "m") {
        type = "mailto:" + cd[1];
      } else if (cd[2] == "w") {
        type = "https://wa.me/" + cd[1];
      } else if (cd[2] == "p") {
        type = "tel:" + cd[1];
      }
      if (cd[2] == "l") {
        contact_list[index].innerHTML += `
    <li style="cursor:pointer;">
          <h6>${cd[0]}</h6>
          <span
            > <a>${cd[1]}</a></span
          >
        </li>
    `;
      } else {
        contact_list[index].innerHTML += `
    <li style="cursor:pointer;">
          <h6>${cd[0]}</h6>
          <span
            ><a href="${type}"
              >${cd[1]}</a
            ></span
          >
        </li>
    `;
      }
    });
  });
  jQuery.each(portfolio.Language, (index, item) => {
    portfolio_language.innerHTML += `<li class="${item[2]} ${item[1] == true ? `art-active-lang"` : "lang-btn"
      }" style="cursor: pointer;"><a>${item[0]}</a></li>`;
  });
  var lang_btn = document.querySelectorAll(".lang-btn");
  jQuery.each(lang_btn, (index, item) => {
    item.addEventListener("click", () => {
      localStorage.removeItem("aq-apps-language");
      console.log(item.classList[0]);
      localStorage.setItem("aq-apps-language", item.classList[0]);
      location.reload();
    });
  });
  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector("#scrollbar"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector("#scrollbar2"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  // page loading
  $(document).ready(function () {
    anime({
      targets: ".art-preloader .art-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
      complete: function (anim) { },
    });
    anime({
      targets: ".art-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function (anim) {
        $(".art-preloader").css("display", "none");
      },
    });
    $(".route-content").addClass("d-none");
    $(".route-content").first().removeClass("d-none");
  });
  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: "easeInOut",
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });
  bar.animate(1);
  // counters
  anime({
    targets: ".art-counter-frame",
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: "linear",
  });
  anime({
    targets: ".art-counter",
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $(".art-counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "linear",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
  });
  // progressbars
  var CircleBar = document.querySelectorAll(".Circle");
  jQuery.each(CircleBar, (index, item) => {
    var prog = item.classList[1].match(/\d+/)[0] / 100,
      bar = new ProgressBar.Circle(item, {
        strokeWidth: 7,
        easing: "easeInOut",
        duration: 1400,
        delay: 2500,
        trailWidth: 7,
        step: function (state, circle) {
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value);
          }
        },
      });
    bar.animate(prog);
  });
  var LineBar = document.querySelectorAll(".line");
  jQuery.each(LineBar, (index, item) => {
    var prog = item.classList[1] / 100,
      bar = new ProgressBar.Line(item, {
        strokeWidth: 1.72,
        easing: "easeInOut",
        duration: 1400,
        delay: 2800,
        trailWidth: 1.72,
        svgStyle: {
          width: "100%",
          height: "100%",
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + " %");
        },
      });
    bar.animate(prog);
  });
  // Contact form
  $(".art-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("art-active");
    } else {
      $(this).removeClass("art-active");
    }
  });
  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      var tl = anime.timeline({
        easing: "easeOutExpo",
      });

      tl.add({
        targets: ".art-submit",
        opacity: 0,
        scale: 0.5,
      }).add({
        targets: ".art-success",
        scale: 1,
        height: "45px",
      });
    });
    return false;
  });
  // portfolio filter
  $(".art-filter a").on("click", function () {
    $(".art-filter .art-current").removeClass("art-current");
    $(this).addClass("art-current");
    var selector = $(this).data("filter");
    $(".art-grid").isotope({
      filter: selector,
    });
    return false;
  });
  // masonry Grid
  $(".art-grid").isotope({
    filter: "*",
    itemSelector: ".art-grid-item",
    transitionDuration: ".6s",
  });
  // slider testimonials
  var swiper = new Swiper(".art-testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });
  // slider works
  var swiper = new Swiper(".art-works-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-works-swiper-next",
      prevEl: ".art-works-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });
  // slider blog
  var swiper = new Swiper(".art-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-blog-swiper-next",
      prevEl: ".art-blog-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
  });
  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });
  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "close"],
  });
  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });
  $.fancybox.defaults.hash = false;
  $(".current-menu-item a").clone().appendTo(".art-current-page");
  $(".art-map-overlay").on("click", function () {
    $(this).addClass("art-active");
  });
  $(".art-info-bar-btn").on("click", function () {
    $(".art-info-bar").toggleClass("art-active");
    $(".art-menu-bar-btn").toggleClass("art-disabled");
  });
  $(".art-menu-bar-btn").on("click", function () {
    $(".art-menu-bar-btn , .art-menu-bar").toggleClass("art-active");
    $(".art-info-bar-btn").toggleClass("art-disabled");
  });
  $(".art-info-bar-btn , .art-menu-bar-btn").on("click", function () {
    $(".art-content").toggleClass("art-active");
  });
  $(".art-curtain , .art-mobile-top-bar").on("click", function () {
    $(
      ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
    ).removeClass("art-active , art-disabled");
  });
  $(".menu-item").on("click", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(this).children(".sub-menu").toggleClass("art-active");
    } else {
      $(
        ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
      ).removeClass("art-active , art-disabled");
    }
  });
  // reinit
  // document.addEventListener("swup:contentReplaced", function () {
  //   Scrollbar.use(OverscrollPlugin);
  //   Scrollbar.init(document.querySelector("#scrollbar"), {
  //     damping: 0.05,
  //     renderByPixel: true,
  //     continuousScrolling: true,
  //   });
  //   Scrollbar.init(document.querySelector("#scrollbar2"), {
  //     damping: 0.05,
  //     renderByPixel: true,
  //     continuousScrolling: true,
  //   });

  //   $("#form").submit(function () {
  //     $.ajax({
  //       type: "POST",
  //       url: "mail.php",
  //       data: $(this).serialize(),
  //     }).done(function () {
  //       var tl = anime.timeline({
  //         easing: "easeOutExpo",
  //       });

  //       tl.add({
  //         targets: ".art-submit",
  //         opacity: 0,
  //         scale: 0.5,
  //       }).add({
  //         targets: ".art-success",
  //         scale: 1,
  //         height: "45px",
  //       });
  //     });
  //     return false;
  //   });

  //   // Masonry Grid
  //   $(".art-grid").isotope({
  //     filter: "*",
  //     itemSelector: ".art-grid-item",
  //     transitionDuration: ".6s",
  //   });

  //   $(".art-filter a").on("click", function () {
  //     $(".art-filter .art-current").removeClass("art-current");
  //     $(this).addClass("art-current");

  //     var selector = $(this).data("filter");
  //     $(".art-grid").isotope({
  //       filter: selector,
  //     });
  //     return false;
  //   });

  //   anime({
  //     targets: ".art-counter-frame",
  //     opacity: [0, 1],
  //     duration: 800,
  //     delay: 300,
  //     easing: "linear",
  //   });

  //   $(".art-counter").each(function () {
  //     $(this)
  //       .prop("Counter", 0)
  //       .animate(
  //         {
  //           Counter: $(this).text(),
  //         },
  //         {
  //           duration: 2000,
  //           easing: "linear",
  //           step: function (now) {
  //             $(this).text(Math.ceil(now));
  //           },
  //         }
  //       );
  //   });

  //   // slider testimonials
  //   var swiper = new Swiper(".art-testimonial-slider", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: false,
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".art-testi-swiper-next",
  //       prevEl: ".art-testi-swiper-prev",
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 2,
  //       },
  //       1200: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 2,
  //       },
  //       768: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   // slider works
  //   var swiper = new Swiper(".art-works-slider", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: {
  //       delay: 4000,
  //     },
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".art-works-swiper-next",
  //       prevEl: ".art-works-swiper-prev",
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 2,
  //       },
  //       1200: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   // slider blog
  //   var swiper = new Swiper(".art-blog-slider", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     speed: 1400,
  //     autoplay: {
  //       delay: 4000,
  //     },
  //     autoplaySpeed: 5000,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".art-blog-swiper-next",
  //       prevEl: ".art-blog-swiper-prev",
  //     },
  //     breakpoints: {
  //       1500: {
  //         slidesPerView: 3,
  //       },
  //       1200: {
  //         slidesPerView: 3,
  //       },
  //       992: {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });

  //   $('[data-fancybox="gallery"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: ["zoom", "slideShow", "thumbs", "close"],
  //   });

  //   $('[data-fancybox="diplome"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: ["zoom", "slideShow", "thumbs", "close"],
  //   });

  //   $('[data-fancybox="recommendation"]').fancybox({
  //     animationEffect: "zoom-in-out",
  //     animationDuration: 600,
  //     transitionDuration: 1200,
  //     buttons: ["zoom", "slideShow", "thumbs", "close"],
  //   });

  //   $.fancybox.defaults.hash = false;

  //   $(".current-menu-item a").clone().prependTo(".art-current-page");

  //   $(".menu-item").on("click", function () {
  //     if ($(this).hasClass("menu-item-has-children")) {
  //       $(this).children(".sub-menu").toggleClass("art-active");
  //     } else {
  //       $(
  //         ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
  //       ).removeClass("art-active , art-disabled");
  //     }
  //   });
  // });
});
