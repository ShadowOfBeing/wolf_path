function getLayout(category) {
    // сохраняем категорию в объекте sessionStorage браузера
    sessionStorage.setItem("category", category)
    // обновляем страницу
    window.location.href = window.location.href
}

function getStep(category, step, stepValue) {
    step = parseInt(step)
    var tmpStep = step + stepValue
    var pages = ''
    if (tmpStep in messages[category]) {
        step = tmpStep
        sessionStorage.setItem("step", step)
        //document.getElementsByClassName('chat-wrapper')[0].insertAdjacentHTML('afterbegin', messages[category][step])
        document.getElementsByClassName('text-wrapper')[0].innerHTML = messages[category][step]
        for (let i in messages[category]) {
            let active = i == step ? 'active' : ''
            pages += `<div class="page ${active}" onclick="getStep('${category}', ${step}, ${i - step})">${i}</div>`
        }
        document.getElementById('pages').innerHTML = pages
//        document.getElementsByClassName('chat-wrapper')[0].innerHTML =
//        `
//            ${messages[category][step]}
//            <div id="prev-btn" onclick="getStep(category, sessionStorage.getItem('step'), -1)">вернуться на шаг назад</div>
//            <div id="next-btn" onclick="getStep(category, sessionStorage.getItem('step'), 1)">я всё понял, идём дальше</div>
//        `
    }
}

function viewImage(option) {
    if (option == 'img-1') {
        var img = document.getElementById('img-1')
        img.style.display = 'block';
//        document.addEventListener('click', function (event) {
//          img.style.display = 'none';
//        });
    }
}

function viewChatsList() {
  var chats = document.getElementById('chats-list').querySelectorAll('a')
  var arrow = document.getElementById('chats-list-title').children[0]

  if (arrow.classList.contains('arrow-down')) {
    arrow.classList.replace('arrow-down', 'arrow-up')
    chats.forEach((item) => {
      item.style.display = 'flex';
    });
  } else {
    arrow.classList.replace('arrow-up', 'arrow-down')
    chats.forEach((item) => {
      item.style.display = 'none';
    });
  }
}

function mobileCSS() {
//    if (window.innerHeight / window.innerWidth > 2) {
//        var titles = document.querySelector(".rubrics-menu").querySelectorAll(".main-title")
//        titles.forEach((mainTitle) => {
//            mainTitle.style.fontSize = '4.5vw'
//        })
//        //console.log(111)
//    }
}