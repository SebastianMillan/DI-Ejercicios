$(document).ready(() => {

    $.ajax({
        url: 'https://swapi.dev/api/people',
        type: 'GET'
    }).done(respuesta => {
        var listadoPersonajes = respuesta.results;
        listadoPersonajes.forEach(personaje => {
            var tarjeta = `<div class="col-xl-3 col-sm-12 col-md-6 personaje mb-5" itemid="${listadoPersonajes.indexOf(personaje)}">
                        <div class="card" style="width: 18rem;">
                            <img src="https://starwars-visualguide.com/assets/img/characters/${listadoPersonajes.indexOf(personaje) + 1}.jpg" class="card-img-top" alt="personaje star wars">
                            <div class="card-body">
                                <span class="card-text text-white fw-bold fs-3" id="name">${personaje.name}</span>
                                <br>
                                <span class="card-text text-white" id="height">${personaje.height}cm</span>
                                <br>
                                <span class="card-text text-white" id="mass">${personaje.mass}kg</span>
                            </div>
                        </div>
                    </div>`

            $('#listaPersonajes').append(tarjeta);
        });
    });

    $(document).on('click', '.personaje', function () {
        var personajeId = $(this).attr('itemid');
        var urlImg = 'https://starwars-visualguide.com/assets/img/characters/' + personajeId + '.jpg'
        $.ajax({
            url: `https://swapi.dev/api/people/${personajeId}`,
            type: 'GET'
        }).done(respuesta => {
            $('#name').text(respuesta.name);
            $('#birthday').text(respuesta.birth_day);
            $('#haircolor').text(respuesta.hair_color);
            $('#skincolor').text(respuesta.skin_color);
            $('#mass').text(respuesta.mass);
            $('#height').text(respuesta.height);
            $('#gender').text(respuesta.gender);

            $('.modalDetalle').modal('show');
        });
    });

    function getIdPersonaje(url) {
        url.split('/').reverse()[1];
    }

});