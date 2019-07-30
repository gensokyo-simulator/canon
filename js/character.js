window.onload=function(){
  var character = document.querySelectorAll('.character_list>a');

  for(var i = 0; i < character.length; i++){
    var name = character[i].className;
    var name = name.split(' ');

    switch(name[0]){
      //TH06
      case 'reimu':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "하쿠레이 레이무";
        break;
      }

      case 'marisa':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "키리사메 마리사";
        break;
      }

      case 'rumia':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "루미아";
        break;
      }

      case 'big_fairy':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "대요정";
        break;
      }

      case 'cirno':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "치르노";
        break;
      }

      case 'meiling':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "홍 메이링";
        break;
      }

      case 'koakuma':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "소악마";
        break;
      }

      case 'patchouli':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "파츄리 널릿지";
        break;
      }

      case 'sakuya':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "이자요이 사쿠야";
        break;
      }

      case 'remilia':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "레밀리아 스칼렛";
        break;
      }

      case 'flandre':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "플랑드르 스칼렛";
        break;
      }

      //TH07
      case 'letty':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "레티 화이트락";
        break;
      }

      case 'chen':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "첸";
        break;
      }

      case 'alice':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "앨리스 마가트로이드";
        break;
      }

      case 'lily':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "릴리 화이트";
        break;
      }

      case 'lunasa':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "루나사 프리즘리버";
        break;
      }

      case 'merlin':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "메를랑 프리즘리버";
        break;
      }

      case 'lyrica':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "리리카 프리즘리버";
        break;
      }

      case 'youmu':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "콘파쿠 요우무";
        break;
      }

      case 'yuyuko':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "사이교우지 유유코";
        break;
      }

      case 'ran':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "야쿠모 란";
        break;
      }

      case 'yukari':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "야쿠모 유카리";
        break;
      }

      //TH07.5
      case 'suika':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "이부키 스이카";
        break;
      }

      //TH08
      case 'wriggle':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "리글 나이트버그";
        break;
      }

      case 'mystia':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "미스티아 로렐라이";
        break;
      }

      case 'keine':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "카미시라사와 케이네";
        break;
      }

      case 'tewi':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "이나바 테위";
        break;
      }

      case 'reisen':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "레이센";
        break;
      }

      case 'eirin':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "야고코로 에이린";
        break;
      }

      case 'kaguya':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "호라이산 카구야";
        break;
      }

      case 'mokou':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "후지와라노 모코우";
        break;
      }

      //TH09
      case 'aya':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "샤메이마루 아야";
        break;
      }

      case 'medicine':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "메디슨 멜랑콜리";
        break;
      }

      case 'komachi':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "오노즈카 코마치";
        break;
      }

      case 'yuka':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "카자미 유카";
        break;
      }

      case 'shikieiki':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "시키에이키";
        break;
      }

      //TH10
      case 'shizuha':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "아키 시즈하";
        break;
      }

      case 'minoriko':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "아키 미노리코";
        break;
      }

      case 'hina':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "카기야마 히나";
        break;
      }

      case 'nitori':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "카와시로 니토리";
        break;
      }

      case 'momiji':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "이누바시리 모미지";
        break;
      }

      case 'sanae':{
        character[i].querySelector("img").src = "images/character/sanae.png";
        character[i].querySelector("h5").innerHTML = "코치야 사나에";
        break;
      }

      case 'kanako':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "야사카 카나코";
        break;
      }

      case 'suwako':{
        character[i].querySelector("img").src = "images/yinyang.png";
        character[i].querySelector("h5").innerHTML = "모리야 스와코";
        break;
      }


    }

    //box color
    if(name.length > 1){
      switch(name[1]){
        case 'playable':{
          character[i].querySelector("h5").style.backgroundColor = "#ff0000";
          break;
        }

        case 'final_boss':{
          character[i].querySelector("h5").style.backgroundColor = "#8a2be2";
          break;
        }

        case 'extra':{
          character[i].querySelector("h5").style.backgroundColor = "#666666";
          break;
        }

        case 'phantasm':{
          character[i].querySelector("h5").style.backgroundColor = "#ff00ff";
          break;
        }
      }
    }
  }
};
