<template>
    <div clas> <!-- this is body-->
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand brand-title">
      REGO
  </div>
  <div class="navbar-menu">
    <!-- navbar start, navbar end -->
  </div>
</nav>
</div>

    
</template>

<style>
    .brand-title {
      line-height: 65px;
    }

</style>
<script>
export default {
  created(){
    test:{
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
