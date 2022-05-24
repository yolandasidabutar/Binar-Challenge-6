let playerGlobal = null;

function comRandom() {
    const com = Math.random();
    if(com<0.34) return 'batu';
    if(com>=0.34 && com<0.67) return 'gunting';
    return 'kertas';
}

function ruleHasil(player,com) {
    if(player == com) return 'DRAW';
    if(player == 'batu') return (com == 'gunting') ? 'PLAYER 1 WIN' : 'COM WIN';
    if(player == 'gunting') return (com == 'batu') ? 'COM WIN' : 'PLAYER 1 WIN';
    if(player == 'kertas') return (com == 'gunting') ? 'COM WIN' : 'PLAYER 1 WIN';
}

function chooseplayer (e) {
    if (!playerGlobal) {
        playerGlobal = e.getAttribute("data-player1");
        const pilihanComputer = comRandom();
        const hasil = ruleHasil(playerGlobal, pilihanComputer);

        const pilihanPlay = document.querySelectorAll('.'+playerGlobal);
        pilihanPlay[0].classList.add('selected');
        const pilihanCom = document.querySelectorAll('.com'  +pilihanComputer); 
        pilihanCom[0].classList.add('selected');
    
        const class_vs = document.getElementsByClassName('vs');
        class_vs[0].classList.add('hasilgame');
        const hasilGame = document.getElementsByClassName('hasilgame');
        const info = hasilGame[0].querySelector('p');
        const newHasil = document.createElement('p');
        const teksnewHasil = document.createTextNode(hasil);
        newHasil.appendChild(teksnewHasil);
        hasilGame[0].replaceChild(newHasil, info);
        if (hasil=='DRAW') {
            hasilGame[0].style.backgroundColor='#035B0C';
        }

        else{
            hasilGame[0].style.backgroundColor='#4C9654';
        }

        const mousePlayer1 = document.getElementsByClassName('hover');
        let arr = [].slice.call(mousePlayer1);
        arr.forEach(item=>{
          item.classList.remove('hover');
        })

        const reload = document.querySelectorAll('.refresh');
        reload[0].addEventListener('click', function(){
            
            const pilihanPlay = document.querySelectorAll('.'+playerGlobal);
            let a = [].slice.call(pilihanPlay);
            a.forEach(ikon=>{  
            ikon.classList.remove('selected');
            })

            const pilihanCom = document.querySelectorAll('.com'  +pilihanComputer); 
            pilihanCom[0].classList.remove('selected');

            const mousePlayer1 = document.querySelectorAll('.player1 ul li img');
            let arr = [].slice.call(mousePlayer1);
            arr.forEach(item=>{
             item.classList.add('hover');
            })

            const hasilGame = document.getElementsByClassName('vs hasilgame');
            let c = [].slice.call(hasilGame);
            c.forEach(ikon=>{  
            ikon.style.backgroundColor='#9C835F';
            ikon.classList.remove('hasilgame');
            const vs = document.getElementsByClassName('vs');
            const pvs = vs[0].querySelector('p');
            const newHasil = document.createElement('p');
            const teksnewHasil = document.createTextNode('VS');
            newHasil.appendChild(teksnewHasil);
            vs[0].replaceChild(newHasil, pvs);
            })
            playerGlobal = null;
        })
}}
