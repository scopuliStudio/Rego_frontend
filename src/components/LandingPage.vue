<template>
    <div> <!-- this is body-->
<nav class="navbar custom-nav" role="navigation" aria-label="main navigation">
  <div class="navbar-brand brand-title">
    <a href="#" class="navbar-item">REGO</a>
    <span class="navbar-burger burger" data-target="navMenu">
      <span></span> 
      <span></span> 
      <span></span> 
    </span>
  </div>
  <div id="navMenu" class="navbar-menu custom-navbar">
    <div class="navbar-end">
      <a href="#" class="navbar-item is-active custom-navitem">Home</a>
       <a href="#" class="navbar-item custom-navitem">About</a>
        <a href="#" class="navbar-item">Contact</a>
    </div>
    </div>




</nav>
</div>   
</template>

<style>
  

</style>
<script>
export default {
   
  created(){
    test: {
      document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
    }
  }

}
</script>
