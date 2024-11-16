const search = document.querySelector('.nav-search');
// toggles the class expand for search input element on navbar, applying border to search icon if expanded
function expandNavSearch(){
    if(search.classList.toggle('expand')){
        document.querySelector('.search-btn').style.border = "3px #ff8a00 solid";
        document.querySelector('.search-btn').style.borderRadius = "10px"; 
    } else {
        document.querySelector('.search-btn').style.border = "none";
    }
}

document.querySelector('.search-btn').addEventListener('click', function () {
    expandNavSearch();
});