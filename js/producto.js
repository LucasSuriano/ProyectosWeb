/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    $("#container_nav").fadeOut('normal');
    $(".openbtn").fadeOut('normal');
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    $("#container_nav").fadeIn('normal');
    $(".openbtn").fadeIn('normal');
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
  }

