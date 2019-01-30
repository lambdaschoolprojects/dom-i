
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// helper function for adding content to tags
const addDataToElement = (elements, data) => {
    console.log("elements", elements, "data", data);
    for (let i = 0; i < elements.length; i++) {
        const elm = elements[i];
        const curData = data[i] || ["", ""];
        //console.log(data[i]);

        elm.id = curData[0];
        elm.text = curData[1];
        elm.textContent = curData[1];
    }
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Adding images
const middleImage = document.querySelector('#middle-img');
const ctaImage = document.querySelector('#cta-img');

middleImage.src = siteContent["main-content"]["middle-img-src"];
ctaImage.src = siteContent.cta["img-src"];

// Adding nav
const anchors = document.querySelectorAll('a');
const anchorData =
    Object.entries(siteContent.nav)
    .filter(item => item[0].match(/nav/));

// for(let i = 0; i < anchors.length; i++) {
//     const anchor = anchors[i];
//     anchor.href = '#';
//     anchor.id = anchorData[i][0];
//     anchor.text = anchorData[i][1];
// }
//console.log("anchors", anchors);
addDataToElement(anchors, anchorData);
console.log(anchors);

// Adding cta section
const ctaH1 = document.querySelector('h1');
const ctaButton = document.querySelector('button');

ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

// Adding main content - top content
const mainContentH4 = document.querySelectorAll('h4');

console.log("mch4", mainContentH4);

const mainContentH4Data =
    Object.entries(siteContent["main-content"])
    .filter(item => item[0].match(/h4/));

//console.log(mainContentH4Data)

addDataToElement(mainContentH4, mainContentH4Data);


