fetch("xmlpodcast.xml")
  .then((Response) => Response.text())
  .then((data) => {
    //Aqui ponemos el codigo que debe ejecutarse cuando tenemos el xml
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
    console.log(xml);

    const post = xml.querySelectorAll("post");

    let tarjetas = "";

    for (let i = 0; i < post.length; i++) {
      let titulo = post[i].getAttribute("titulo");

      let nombre = post[i].querySelector("nombre").textContent;
      let foto = post[i].querySelector("imagen").textContent;
      let autor = post[i].querySelector("autor").textContent;
      let introduccion = post[i].querySelector("introduccion").textContent;
      let descripcion = post[i].querySelector("descripcion").textContent;
      let tiempo_lectura = post[i].querySelector("tiempo_lectura").textContent;

      let num_visualizaciones = post[i].querySelector(
        "num_visualizaciones"
      ).textContent;
      let num_comentarios =
        post[i].querySelector("num_comentarios").textContent;
      let num_megusta = post[i].querySelector("num_megusta").textContent;

      console.log(
        "post",
        titulo,
        "nombre",
        nombre,
        "autor",
        autor,
        "introduccion",
        introduccion,
        "descripcion",
        descripcion,
        "tiempo_lectura",
        tiempo_lectura,
        "num_visualizaciones",
        num_visualizaciones,
        "num_comentarios",
        num_comentarios,
        "num_megusta",
        num_megusta
      );

      const tarjeta = `
            <div class="box">
                <div class="foto">
                    <a href="#"><img src="imagenes/${foto}" alt="" /></a>
                </div>

                <div class="texto">
                    <div class="usuario">
                    <div class="menuusuario">
                        <div class="usu">
                        <div class="avatar">
                            <span class="material-symbols-outlined">
                            account_circle
                            </span>
                        </div>
                        <div class="nombre">
                            <span>${nombre}</span>
                            <i class="fa-solid fa-crown"></i>
                            <p>20 ene 2023 - 1 min.</p>
                        </div>
                        </div>
                        <div class="puntos">
                        <a href="#"
                            ><span class="material-symbols-outlined">
                            more_vert
                            </span></a
                        >
                        </div>
                    </div>

                    
                    </div>

                    <h1>${titulo}</h1>
                    <p>${introduccion}</p>
                    <p>${descripcion}</p>

                    <div class="comentarios">
                    <div class="coments">
                        <span>${num_visualizaciones} views</span>
                        <span>${num_comentarios} coments</span>
                    </div>
                    <div class="likes">
                        <span>${num_megusta} </span>
                        <span class="material-symbols-outlined"> favorite </span>
                    </div>
                    </div>
                </div>
            </div>
        `;
      tarjetas = tarjetas + tarjeta;
    }
    document.querySelector("#divpost").innerHTML = tarjetas;
  });
