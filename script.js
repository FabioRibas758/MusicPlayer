//Array para guardar as info. das músicas.

let musics = [
    {
    title: 'Until Dawn', 
    artist : 'Retro Girl', 
    src:'Musicas/until-dawn-lofi-hip-hop.mp3',
    image:'Imagens/marek-okon-9gtODWv-L5I-unsplash.jpg'
    },
    {
    title: 'Dungeon Ni Deai OST', 
    artist: 'Aethersan', 
    src:'Musicas/yong-sok-suruke-nozhong-de-acoustic-arrangement.mp3',
    image:'Imagens/joran-quinten-wYzuwwLKmGM-unsplash.jpg'
    }

];

// Variáveis

let music = document.querySelector('audio');
let indexMusic = 0 

let duracaoMusic = document.querySelector('.Fim')
let imagemAlbum = document.querySelector('img')
let nomeMusica = document.querySelector('.Description h2') 
let nomeArtista = document.querySelector('.Description i') 

renderizarMusica(indexMusic);



// Eventos

document.querySelector('.Botao-play').addEventListener('click', tocarMusica);

document.querySelector('.Botao-pause').addEventListener('click', pausarMusica);

music.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.Anterior').addEventListener('click', () =>{
    indexMusic--
    if(indexMusic< 0){
        indexMusic = 2 
    }
    renderizarMusica(indexMusic)

})

document.querySelector('.Proxima').addEventListener('click', () =>{
    indexMusic++
    if(indexMusic > 2){
        indexMusic = 0 
    }
    renderizarMusica(indexMusic)
    
})

// Funções

function renderizarMusica(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musics[index].title
        nomeArtista.textContent = musics[index].artist
        imagemAlbum.src = musics[index].image
        duracaoMusic.textContent = secToMinutes(Math.floor(music.duration))
    })

}

function tocarMusica(){
    music.play();
    document.querySelector('.Botao-pause').style.display = 'block'
    document.querySelector('.Botao-play').style.display = 'none'
}

function pausarMusica(){
    music.pause();
    document.querySelector('.Botao-pause').style.display = 'none'
    document.querySelector('.Botao-play').style.display = 'block'
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((music.currentTime/music.duration) * 100 )+ '%'
    let tempoDecorrido = document.querySelector('.Inicio')
    tempoDecorrido.textContent = secToMinutes(Math.floor(music.currentTime));

}

function secToMinutes(segundos){
    let campoMinutos = Math.floor (segundos /60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}
