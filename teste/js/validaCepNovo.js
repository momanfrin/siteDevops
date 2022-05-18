(function () {
    //javascript de validação do form
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      });
  
    // correção do scroll no elemento anchor
    //https://stackoverflow.com/questions/11501025/div-anchors-scrolling-too-far
    document.querySelectorAll("a").forEach(function (element) {
      element.addEventListener("click", function (event) {
        if (!event.target.hash)
          return;
        window.location.hash = event.target.hash;
        // dynamically determining the height of your navbar
        let navbar = document.querySelector("nav");
        let navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        // show 5 pixels of previous section just for illustration purposes 
        let scrollHeight = document.querySelector(event.target.hash).offsetTop - navbarheight - 5;
        if (event.target.classList.contains('dropdown-item')) {
          scrollHeight += 100
        }
  
        scrollHeight = scrollHeight < 0 ? 0 : scrollHeight;
        /*
        if esle ternário
        é igual a isso:
        if(scrollHeight < 0){
            scrollHeight = 0;
        }else{
            scrollHeight = scrollHeight;
        }
        */
        /* scrolling to the element taking the height of the static bar*/
        window.scroll(0, scrollHeight);
        /*properly updating the window location*/
        /* do not execute default action*/
        event.preventDefault();
      });
    });
  
  })();