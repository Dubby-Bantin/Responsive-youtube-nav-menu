const openMenu =document.querySelector('#show-menu');
const hideMenuIcon =document.querySelector('#hide-menu');
const sideMenu =document.querySelector('#nav-menu');

openMenu.addEventListener("click" ,function(){
    sideMenu.classList.add("active")
}) ;

hideMenuIcon.addEventListener("click" ,function(){
    sideMenu.classList.remove("active")
});

document.body.style.backgroundColor=('black');
document.body.style.fontFamily=('sans-serif');


function scrolll() {
    var left=document.querySelector(".div-scroll");
    left.scrollBy(-350,0)
};

function scrollr() {
    var right=document.querySelector(".div-scroll");
    right.scrollBy(360, 0)
};


function toggledButton(toggle) {
    const buttonElement = document.querySelector(toggle)
    if (!buttonElement.classList.contains('is-toggled')) {
        recent()
        buttonElement.classList.add("is-toggled")
    } else {
        buttonElement.classList.remove("is-toggled")
    }
};


function recent() {
    const recent = document.querySelector('.is-toggled') 
    if (recent) {
        recent.classList.remove("is-toggled")
    }   
};


function showCancelButton() {
    const inputElement = document.querySelector(".text")
    document.getElementById('times').style.display = 'block';
    
    if(inputElement.value === '') {
        document.getElementById('times').style.display = 'none';
    }
}


function clearDisplay() {
    const clearDisplay = document.querySelector('.text')
    clearDisplay.value = ''
    document.getElementById('times').style.display = 'none'
}


const inputElement = document.querySelector('.text');
inputElement.addEventListener("click", function(){
    inputElement.classList.add('border')
})


                        //small screen search-bar funtions 

function displaySearchBar() {
    document.getElementById('txt').style.border = '1px solid #1c62b9' ;
    document.getElementById('phone-search-bar').style.display = 'flex'
    document.getElementById('head1').style.display = 'none'
    document.getElementById('head2').style.display = 'none'
    document.getElementById('head3').style.display = 'none'
}

function removeSearchBar() {
    document.getElementById('phone-search-bar').style.display = 'none'
    document.getElementById('head1').style.display = 'flex'
    document.getElementById('head2').style.display = 'flex'
    document.getElementById('head3').style.display = 'flex'
}