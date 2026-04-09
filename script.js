const musicList = [
    './songs/Gorilla_Glue_-_Bragi_dva_bidona_80118126.mp3',
    './songs/Gorilla_Glue_-_Banya_80828104.mp3',
    './songs/Gorilla_Glue_-_WOOPAAA_80763629.mp3',
    './songs/Gorilla_Glue_-_Derevenskijj_Trap_80989636.mp3',
    './songs/Gorilla_Glue_-_Oladushki_80892397.mp3',
    './songs/GORILLA_GLUE_LIL_NAKUR_-_SVEG_NARODNYJ_(SkySound.cc).mp3',
    './songs/Gorilla_Glue_-_Bragi_dva_bidona_80118126.mp3',
    './songs/Gorilla_Glue_-_WOOPAAA_80763629.mp3',
    './songs/Gorilla_Glue_-_Banya_80828104.mp3'
    
];


const players = {};

function playMusic(index) {
    const buttons = document.querySelectorAll('.albPl');
    const button = buttons[index];
    
    if (!button) return;
    
    if (players[index]) {
        const player = players[index];
        
        if (player.isPlaying) {

            player.audio.pause();
            player.isPlaying = false;
            button.src = './img/Group 8.png';
        } else {

            player.audio.currentTime = 0;
            player.audio.play();
            player.isPlaying = true;
            button.src = './img/Group 32 (1).png';
        }
    } else {

        stopAllMusic();
        

        const audio = new Audio(musicList[index]);
        audio.play();
        
        players[index] = {
            audio: audio,
            isPlaying: true
        };
        
        button.src = './img/Group 32 (1).png';
        

        audio.addEventListener('ended', () => {
            players[index].isPlaying = false;
            button.src = './img/Group 8.png';
            delete players[index];
        });
    }
}

function stopAllMusic() {

    for (let key in players) {
        if (players[key].isPlaying) {
            players[key].audio.pause();
            players[key].audio.currentTime = 0;
            players[key].isPlaying = false;
            

            const buttons = document.querySelectorAll('.albPl');
            const button = buttons[key];
            if (button) {
                button.src = './img/Group 8.png';
            }
        }
        delete players[key];
    }
}