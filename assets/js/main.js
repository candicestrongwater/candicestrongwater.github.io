$(document).ready(function() {

  // if(window.location !== "index.html"){
  //       $('.popup__container--about').addClass('showme');
  // }


  class Header extends HTMLElement {
connectedCallback() {
  this.innerHTML = `


    <div class="header-content__container">

      <div class="flex-item--left header-item--left">
        <a class="nav-link nav-link--home" href="../index.html">Candice Strongwater</a>
      </div>

      <div class="flex-item--right header-item--right">
        <a class="nav-link nav-link--exhibitions" href="./index.html">Work</a>
        <a class="nav-link nav-link--programs" href="./writing.html">Writing & Talks</a>
        <span class="nav-link nav-link--about">About</span>
      </div>

    </div>

    <div class="popup__container--about">
      <div class="flex-item--left about-item--left">
         <span class="about-text-lc">
         Candice Strongwater is an independent curator and Senior Manager of Research and Curatorial Initiatives at SITU Research. She coordinates the team’s visual investigations and focuses on how investigative findings are presented across legal and policy contexts, as well as in cultural or artistic formats such as exhibitions and events. Recent projects include <span class="body-ital">Patterns of Life</span> (2024), developed with SITU and Mona Chalabi at the Cooper Hewitt, Smithsonian Design Museum, and <span class="body-ital">Visual Investigations: Between Advocacy, Journalism and Law</span> (2024) at the Architekturmuseum der TUM. She is currently co-curating an exhibition opening in the Fall of 2026 at John Jay College of Criminal Justice, CUNY.
         <br><br>
         Candice holds an M.A. from the Center for Curatorial Studies, Bard College, where she curated <span class="body-ital">Classroom Arsenal</span> (2021), a group exhibition drawing on Elaine Scarry’s <span class="body-ital">The Body in Pain</span>, and co-taught a course on photography’s vexed relationship to human rights claims. She has contributed a commissioned essay on the student body as both image and dataset—circulating between pedagogy, surveillance, and state power— to RIGA (Riga Technoculture Research Unit) at Kim? Contemporary Art Centre, Latvia, and has co-authored forthcoming writing in Senses of Cinema with filmmaker Max Bowens. Previously, from 2015 to 2020, she was Associate Curator and Head of Public Programs at Red Bull Arts New York.
         </span>

      </div>

      <div class="flex-item--right about-item--right">
        <span class="nav-link nav-link--close">Close X</span>
      </div>
    </div>


  `;
}
}


customElements.define('main-header', Header);







// ABOUT POPUP

$('.nav-link--about').click(function() {
    $('.header-content__container').addClass('hideme');
    $('.main-content__container').addClass('hideme');
    $('.popup__container--about').addClass('showme');
    $('body').addClass('bg-color-change');

});

$('.nav-link--close').click(function() {
    $('.popup__container--about').removeClass('showme');
    $('.header-content__container').removeClass('hideme');
    $('.main-content__container').removeClass('hideme');
    $('body').removeClass('bg-color-change');
});














  });
