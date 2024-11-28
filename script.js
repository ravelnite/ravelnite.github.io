function scrollToElement(elementSelector, instance = 0){
    //select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance){
        //scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const features = document.getElementById("features");
const pricing = document.getElementById("pricing");
const about = document.getElementById("about");
const hire = document.getElementById("hire");
const getst = document.getElementById("getst");

features.addEventListener('click', () => {
    scrollToElement('.header');
})
pricing.addEventListener('click', () => {
    //scroll to the second element with "header" class
    scrollToElement('.header', 1);
})
about.addEventListener('click', () => {
    scrollToElement('.column');
})
hire.addEventListener('click', () => {
    scrollToElement('.header', 1);
})
getst.addEventListener('click', () => {
    scrollToElement('.header');
})
