const key = '5d487cbd28339c2df4dada75bca25de4';

function exibeFilme(){
    let divTela = document.getElementById('mostraPesquisa');
    let texto = '';
    let dados = JSON.parse(this.responseText);
    for (i=0;i<dados.results.length;i++)
    {
        texto += `
        <div id="mostraPesquisa" class="row">
        <img id="apimg" src="https://image.tmdb.org/t/p/w500/${dados.results[i].poster_path}" alt="">
        <p id="mostraBranco">Título: ${dados.results[i].title}</p> <br>
        <p id="mostraClaro">Resumo: ${dados.results[i].overview}</p>
        <p id="mostraClaro">Data de lançamento: ${dados.results[i].release_date}</p> <br>
        <p> <a href="https://www.themoviedb.org/movie/${dados.results[i].id} id="mostraClaro">Veja mais detalhes...</a></p>
        </div>
        
        
        `
    }
    divTela.innerHTML = texto;
}



function processaDados (){
    let query = document.getElementById('caixa').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilme;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&query=${query}`);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener ('click', processaDados);