/*
<!--
    Autor: Francisco Daniel Montañez Franco
    Fecha: 12/11/2023
    Descripcion: El documento principal que controla la logica de las pestañas HTML con jQuery y sus plugins como Validator, Sliders,
    MomentJS y jQUeryUI
-->
*/
$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1 ){
        $(function(){
            $('.galeria').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 700,
              responsive: true,
            });
          });
    }

    if(window.location.href.indexOf('index') > -1 ){
        //POST
        var posts = [
            {
                title: "prueba de titulo 1",
                date: 'publicado el día: ' +moment().format("DD")+ ' de ' +moment().format("MMMM")+ ' del ' +moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non gravida ex, vel laoreet enim."
            },
            {
                title: "prueba de titulo 2",
                date: 'publicado el día: ' +moment().format("DD")+ ' de ' +moment().format("MMMM")+ ' del ' +moment().format("YYYY"),
                content: "Pellentesque odio turpis, condimentum tincidunt magna mattis, rhoncus malesuada justo. Cras varius in tortor ac posuere"
            },
            {
                title: "prueba de titulo 3",
                date: 'publicado el día: ' +moment().format("DD")+ ' de ' +moment().format("MMMM")+ ' del ' +moment().format("YYYY"),
                content: "Curabitur eu dui et dolor rutrum fermentum quis quis dolor. Cras vulputate efficitur mollis. Donec ligula est, laoreet non justo feugiat, accumsan dignissim libero. Suspendisse odio nulla, pharetra in metus et, sollicitudin varius augue."
            },
            {
                title: "prueba de titulo 4",
                date: 'publicado el día: ' +moment().format("DD")+ ' de ' +moment().format("MMMM")+ ' del ' +moment().format("YYYY"),
                content: "In fringilla ac lectus at consequat. Praesent venenatis tempus justo, volutpat dignissim ex condimentum vitae. Nulla facilisi. In dapibus quam et diam fringilla fermentum. Morbi leo erat, ornare sit amet lacinia ac, semper quis felis. Maecenas finibus dictum erat a consectetur. Pellentesque porttitor nunc vitae felis aliquet mattis. Integer ultricies condimentum iaculis. "
            },
            {
                title: "prueba de titulo 5",
                date: 'publicado el día: ' +moment().format("DD")+ ' de ' +moment().format("MMMM")+ ' del ' +moment().format("YYYY"),
                content: "Cras sed enim elit. Nunc tempor erat leo, ut convallis mauris hendrerit eget. Etiam dictum sit amet justo non pretium. Vestibulum eget aliquet sapien. Sed nec lectus in nulla fringilla vulputate sed id nunc. "
            },
            {
                title: "prueba de titulo 6",
                date: 'publicado el día: ' +moment().format("DD")+ ' de ' +moment().format("MMMM")+ ' del ' +moment().format("YYYY"),
                content: "Etiam dictum sit amet justo non pretium. Vestibulum eget aliquet sapien. Sed nec lectus in nulla fringilla vulputate sed id nunc. "
            }
        ];

        posts.forEach((valor, index)=>{
            var post = `
            <article class="post">
                <h2>${valor.title}</h2>
                <span class="date">${valor.date}</span>
                    <p>
                        ${valor.content}
                    </p>
                        <a href="#" class="button-more">Leer mas</a>
            </article>`;
            $("#posts").append(post);
        });
    }

    //Selector de tema
    var theme = $("#theme");

    $("#nigth").click(function(){
        theme.attr("href", "css/nigth.css")
    });
    $("#red").click(function(){
        theme.attr("href", "css/red.css")
    });
    $("#blue").click(function(){
        theme.attr("href", "css/blue.css")
    });
    //Scroll arriba web
    $(".subir").click(function(e){
        e.preventDefault();

        $('html , body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //Login falso
    $("#login form").submit(function(){
        var name = $("#name").val();
        localStorage.setItem("name",name);
        location.reload();
    });

    var name = localStorage.getItem("name");
    if (name != null && name != "undefined"){
        var about_parrafo = $("#about p");

        $("#about p").html("<br><strong>Bienvenido " +name+ "</strong><br>");
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    };  

    if(window.location.href.indexOf('about') > -1 ){
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf('reloj') > -1 ){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss a");
            $("#reloj").html(reloj);
        }, 1000);
    }
    //Validacion
    if(window.location.href.indexOf('contact') > -1 ){
        $("#form input[name='date']").datepicker();

        $("#form-contact").validate({
            rules:{
                name:{
                    required: true,
                    minlength: 2,
                },
                apellidos: "required",
                email: {
                    required: true,
                    email: true,
                },
                fechaDenacimiento: {
                    required: true,
                    date: true

                },
                years: {
                    required: true,
                    number: true
                },
            },messages:{
                name:{
                    required: "Please enter your name",
                    minlength: "Your name must be 2 length minimun",
                },
                apellidos: "Please enter your Lastname",
                email: {
                    required: "Please enter email",
                    email: "Please enter valid email",
                },
                fechaDenacimiento: {
                    required: "Please enter your years",
                    date: ""
                },
                years: {
                    required: "Please enter your birthday",
                    number: "Please enter a valid format"
                },
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    } 
});