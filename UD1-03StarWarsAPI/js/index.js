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

    $(document).on('click', '.personaje', () => {
        var personajeId = $(this).attr('itemid');
        debugger;
        $.ajax({
            url: 'https://swapi.dev/api/people/' + personajeId,
            type: 'GET'
        }).done(respuesta => {
            var listadoPersonajes = respuesta.results;
            var modalDetalle = `<div class="modal fade" id="detalle" tabindex="-1"
            aria - labelledby="detalleModal" aria - hidden="true" >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2" id="detalleModal">Characters
                            Details</h5>
                        <button type="button" class="btn-close bg-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-4 mx-auto d-block">
                                <img src="https://starwars-visualguide.com/assets/img/characters/${personajeId}.jpg"
                                    alt="personaje detalle star wars"
                                    class="w-100">
                            </div>
                            <div class="col-8">
                                <p class="fw-bold fs-2">${listadoPersonajes[personajeId].name}</p>
                                <span class="fw-bold">Birthday:</span><span> ${listadoPersonajes[personajeId].birth_year}</span>
                                <br>
                                    <span class="fw-bold">Eye color:</span><span> ${listadoPersonajes[personajeId].eye_color}</span>
                                    <br>
                                        <span class="fw-bold">Hair color:</span><span> ${listadoPersonajes[personajeId].hair_color}</span>
                                        <br>
                                            <span class="fw-bold">Skin color:</span><span> ${listadoPersonajes[personajeId].skin_color}</span>
                                            <br>
                                                <span class="fw-bold">Mass:</span><span> ${listadoPersonajes[personajeId].mass}kg</span>
                                                <br>
                                                    <span class="fw-bold">Height:</span><span> ${listadoPersonajes[personajeId].height}cm</span>
                                                    <br>
                                                        <span class="fw-bold">Gender:</span><span> ${listadoPersonajes[personajeId].gender}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>`
            $(modalDetalle).show();
        });
    });

});