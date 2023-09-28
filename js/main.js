$(function () {
  "use strict";
  var currentYear = new Date().getFullYear();
  //* Person Data :
  var portfolio = {
      Data: {
        Top: {
          Avatar: "img/face-1.png",
          Name: "Alaa Qutfa",
          Post: `Software Engineer <br />Full-Stack Developer <br />Ui/UX Designer,<br />Graphic Designer,`,
        },
        Scroll: {
          About: [
            ["Age", currentYear - 2000],
            ["Residence", "Iraq"],
            ["City", "Erbil"],
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
              Progress: "p77",
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
              Title: "Web Programming Languages :",
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
                  Name: "Bootstrap",
                  Progress: "100",
                },
                {
                  id: "lineprog4",
                  Type: "line",
                  Name: "Sass",
                  Progress: "100",
                },
                { id: "lineprog5", Type: "line", Name: "JS", Progress: "100" },
                {
                  id: "lineprog6",
                  Type: "line",
                  Name: "Node js",
                  Progress: "85",
                },
                {
                  id: "lineprog7",
                  Type: "line",
                  Name: "React js",
                  Progress: "70",
                },
                {
                  id: "lineprog8",
                  Type: "line",
                  Name: "Jquery",
                  Progress: "100",
                },
                { id: "lineprog9", Type: "line", Name: "PHP", Progress: "100" },
              ],
            },
            // Mobile Applications Programming Languages :
            {
              Title: "Mobile Applications Programming Languages :",
              items: [
                {
                  id: "lineprog10",
                  Type: "line",
                  Name: "Flutter & Dart",
                  Progress: "95",
                },
                {
                  id: "lineprog11",
                  Type: "line",
                  Name: "Java",
                  Progress: "35",
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
                  Name: "Adobe XD",
                  Progress: "85",
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
                  Progress: "85",
                },
                {
                  id: "lineprog14",
                  Type: "line",
                  Name: "Adobe Illustrator",
                  Progress: "85",
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
                  Progress: "75",
                },
                {
                  id: "lineprog16",
                  Type: "line",
                  Name: "Adobe After Effects",
                  Progress: "65",
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
                  Progress: "65",
                },
              ],
            },
          ],
          Knowledges: [
            "Bootstrap, Materialize",
            "Stylus, Sass, Less",
            "the ability to work long hours",
            "Able to work under pressure",
            "Team spirit and participation",
            "Sharing scientific experiences",
            "Commitment to deadlines with clients",
            "Accuracy in work and attention to the opinion of the customer",
            "Welcoming dealing with customers",
            "Pay attention to the rules of academic design",
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
          CV: "files/Alaa_Qutfa.pdf",
        },
        Bottom: {
          Whatsapp: [
            "https://wa.me/+9647517960618",
            `<i class="fa-brands fa-whatsapp"></i>`,
          ],
          Facebook: [
            "https://www.facebook.com/aloosh2712000/",
            `<i class="fa-brands fa-facebook"></i>`,
          ],
          Instagram: [
            "https://www.instagram.com/alaaqutfa/",
            `<i class="fa-brands fa-instagram"></i>`,
          ],
          Linkedin: [
            "https://www.linkedin.com/in/alaa-qutfa-96a326256/",
            `<i class="fa-brands fa-linkedin"></i>`,
          ],
        },
      },
      Content: {
        home: {
          banner: {
            title: "Discover my Amazing <br />Art Space!",
            startStaticPhrae: "&lt;<i>code</i>&gt; I build",
            slidePhrases: `["web interfaces.", "ios and android applications."]`,
            endStaticPhrae: "&lt;/<i>code</i>&gt;",
            btnText: "Explore now",
            btnLink: "",
            linkText: "Hire me",
            linkUrl: "https://mostaql.com/u/Aquarius_IT",
            bgImgPath: "img/bg.jpg",
            imgPath: "img/face-2.png",
          },
          counters: [
            ["Years Experience", currentYear - 2015],
            ["Completed Projects", 25],
            ["Happy Customers", 65],
            ["Honors and Awards", 13],
          ],
          services: [
            {
              title: "Mobile Applications Development",
              description: `Turn your ideas into reality by building your own application, elevate your business to luxury and excellence, and make your services and sales easier, faster and on a larger scale. I will provide you with the appropriate solutions to achieve this.`,
              linkUrl: "https://wa.me/+9647517960618",
            },
            {
              title: "Web Development",
              description: `I offer you the safest, fastest, and best quality websites with a wide range of options that help you find your dream and start your business online.`,
              linkUrl: "https://wa.me/+9647517960618",
            },
            {
              title: "Hosting",
              description: `The best and fastest hosting with 24/7 support at special prices with unlimited extensions`,
              linkUrl: "https://wa.me/+9647517960618",
            },
            {
              title: "Cyber Security",
              description: `Cybersecurity is a constantly changing concept with new threats emerging every day that threaten the security of your information and data from hackers. I offer you my services to protect your data and business and keep up with what is happening in cyberspace`,
              linkUrl: "https://wa.me/+9647517960618",
            },
            {
              title: "Marketing",
              description: `I will help you develop a plan to make your product reach the largest number of customers and make your business accounts active on social media pages.`,
              linkUrl: "https://wa.me/+9647517960618",
            },
            {
              title: "Graphic Design",
              description: `I will add artistic touches to your work to make it distinctive and shine among all similar works.`,
              linkUrl: "https://wa.me/+9647517960618",
            },
          ],
          prices: {},
          recommendattions: {},
        },
        gallery: {},
        history: {},
        contact: {},
      },
      Brand: {},
      Copyright: ["https://wa.me/+9647517960618", "Alaa Qutfa"],
      Menu: ["Home", "Portfolio", "History", "Contact"],
      Preloader: {
        id: "preloader",
        Name: "Alaa Qutfa",
        JobTitle: "Software Engineer",
      },
    },
    portfolio_data_scroll_about = document.getElementById(
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
    portfolio_menu = document.getElementById("portfolio-menu");
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
            <div id="${skill.id}" class="${
        skill.Type + " " + skill.Progress
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
      complete: function (anim) {},
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
