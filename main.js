//menu header
const menuButtonClose = document.querySelector('#mobile-menu-trigger')
const mainHeader = document.querySelector('#main-header')

menuButtonClose.addEventListener('click', menuButtonOpen)

function menuButtonOpen() {
	mainHeader.classList.toggle("menu-open")
}

// select areas in header-mobile and close menu
const $headerMobile = $('.header-mobile');


$(document).mouseup(e => {
   if (!$headerMobile.is(e.target) // if the target of the click isn't the container...
   && $headerMobile.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $headerMobile.removeClass('menu-open');
  	}
 });

$('.menu-drop-down__btn').on('click', () => {
  $headerMobile.toggleClass('menu-open');
});

//modal-open
const btnForModal = document.querySelector('#modal-open')
const btnModal = document.querySelector('#modal')
const btnModalTrigger = document.querySelector('#modal-trigger')
btnForModal.addEventListener('click', modalOpen)
btnModalTrigger.addEventListener('click', modalClose)

function modalOpen() {
	btnModal.classList.toggle("modal-open")
}
function modalClose() {
	btnModal.classList.remove("modal-open")
}

//modal-open-mobile

const btnForModalMobile = document.querySelector('#modal-open-mobile')
btnForModalMobile.addEventListener('click', modalOpenMobile)


function modalOpenMobile() {
	btnModal.classList.toggle("modal-open")
}
// function modalClose() {
// 	btnModal.classList.remove("modal-open")
// }

//small menu
$(document).on('scroll', function() {
  
  // Seleciona a navegação
  // Identifica o tamanho total do menu
  // Verifica a distância entre o scroll e o topo
  var $nav = $('.header-mobile'),
      navHeight = $nav.outerHeight(),
      windowTop = $(this).scrollTop();

  // Verifica quando a distância do scroll for maior que o tamanho total do menu
  if (windowTop > navHeight) {
    // Adiciona a classe small ao menu
    $nav.addClass('small-header');
    // Modifica o nome inteiro da empresa para uma sigla apenas
  } else {
    // Remove a classe small do menu
    $nav.removeClass('small-header');
    // Coloca o nome inteiro da empresa novamente
    // $('nav > a').text('The Company');
  }
});


//select area in About
const $areasSelect = $('.areas-drop-down');

$(document).mouseup(e => {
   if (!$areasSelect.is(e.target) // if the target of the click isn't the container...
   && $areasSelect.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $areasSelect.removeClass('areas-drop-down-open');
  	}
 });

$('.areas-drop-down__select').on('click', () => {
  $areasSelect.toggleClass('areas-drop-down-open');
});

//smoth scroll
$(document).ready(function(){
  $('.campus').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -40
      }, 500, function(){

        window.location.hash = hash;
      });
    } 
  });
});
$(document).ready(function(){
  $('.about').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -80
      }, 500, function(){

        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function(){
  $('.about-mobile').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -50
      }, 500, function(){

        window.location.hash = hash;
      });
    } 
  });
});


$(document).ready(function(){
  $('.campus-mobile').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -50
      }, 500, function(){

        window.location.hash = hash;

      });
    } 
  });
});
$(document).ready(function(){
  $('.scroll-testimony').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -80
      }, 500, function(){

        window.location.hash = hash;

      });
    } 
  });
});

