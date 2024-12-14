const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

const searchUrls = [
  "https://www.swiggy.com/instamart/search?custom_back=true&query=",
  "https://www.dmart.in/search?searchTerm=",
  "https://blinkit.com/s/?q=",
  "https://www.amazon.in/s?k=", // Special handling needed (see note below)
  "https://www.flipkart.com/search?q=", // Special handling needed
  "https://www.jiomart.com/search/"
];

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    searchUrls.forEach(url => {
      if (url.includes("amazon.in")) {
          //Amazon special case
          chrome.tabs.create({ url: url + searchTerm + "&i=nowstore&rh=n%3A16392737031&crid=2EVMLYZY5PNFV&sprefix=carrot%2Cnowstore%2C219&ref=nb_sb_noss_2" });
      } else if(url.includes("flipkart.com")){
          //Flipkart special case
          chrome.tabs.create({ url: url + searchTerm + "&otracker=search&otracker1=search&marketplace=GROCERY&as-show=on&as=off" });
      } else {
          chrome.tabs.create({ url: url + searchTerm });
      }
    });
  }
});