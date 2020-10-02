async function getNoticias(){
    let resposta = fetch("http://newsapi.org/v2/top-headlines?apikey=28f19403396e4ad3b7acfebc38438f13&country=br&category=technology");
    let noticias = await resposta.json();

    for (let i = 0; i < noticias.articles.length; i++) {
        let noticia = noticias.articles[i];
        
        let cardNoticias = `
        <div class="col-3">
            <div class="card">
                <img src=".${noticia.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${noticia.title}</h5>
                <p class="card-text">${noticias.description}</p>
                <a href="${noticias.url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        conteinerNoticias.innerHTML += cardNoticias;
    }
}
getNoticias();