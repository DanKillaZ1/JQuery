//instancia jquery e evita conflitos


//jQuery( function($){

$(document).ready(function () {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') //tag

    let item = $('.feature-item') //class

    let destaques = $('#featured') //id

    console.log(titulos.first());

    //Configuraçao de produtos

    $('.fearured-item a').addClass('btn btn-dark stretch-link');

    $('.fearured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.fearured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.fearured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.fearured-item:first h4').addClass('active')
    // $('.fearured-item:first h4').removeClass('active')
    // $('.fearured-item:first h4').toggleClass('active') //ativa elemento
    // $('.fearured-item:first h4').hide() //add dysplay none
    // $('.fearured-item:first h4').show()
    // $('.fearured-item:first h4').fade()
    // $('.fearured-item:first h4').fadeIn(2000)
    // $('.fearured-item:first h4').fadeOut(2000)

    // $('.fearured-item:first h4').css('color', '#f00')
    $('.fearured-item h4').dbclick(function () {

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });
    });

    /*
     * Manipulação de eventos
     */
    $('.featured-item a').on('blur', function (event) {

        event.preventDefault();

        alert('Produto esgotado');

    })

    /*
     *Callback
     * entendendo açoes que começam ao termino de outra
     */

     $('.featured-item:nth(1)').hide(2000, function () {
            //este é o callback
            console.log( $(this).find('h4').text() + ' esgotado')
        })

         .show(2000, function () {
             console.log($(this).find('h4').text() + ' em estoque')

         })

    /*
     * Animações
     */

    const duracao = 1000 //1 seg

    $('.featured-item:nth(0)')
        .hide(duracao)
        .show(duracao)
        .fadeOut(duracao)
        .fadeIn(duracao)
        .toggle(duracao)
        .toggle(duracao)
        
    $('#form-submit').on('click', function(event){

        event.preventDefault()

        if($('#email').val() != ''){

            $('#email').animate({
                opacity: "toggle",
                top: "-50" //no css temos que colocar posicao relative, para que esta funçao funcione o -50
            }, 500, function(){
                console.log($(this).val())
            })
        }
        
        /*
        * Ouvinte de eventos .nav-modal-open
        */

        $('.nav-modal-open').on('click', function(event){

            event.preventDefault();

            let elem = $(this).attr('rel')
            
            $('.modal-body').html($('#' +elem).html())
            $('.modal-header h5.modal-title').html($(this).text())

            let myModal = new bootstrap.Modal($('#modelId'))

            myModal.show()
        })
    })

















})