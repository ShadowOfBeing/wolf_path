function getLayout(category) {
    // сохраняем категорию в объекте sessionStorage браузера
    sessionStorage.setItem("category", category)
    // обновляем страницу
    window.location.href = window.location.href
}

function getStep(category, step, stepValue) {
    step = parseInt(step)
    var tmpStep = step + stepValue
    if (tmpStep in messages[category]) {
        step = tmpStep
        sessionStorage.setItem("step", step)
        //document.getElementsByClassName('chat-wrapper')[0].insertAdjacentHTML('afterbegin', messages[category][step])
        document.getElementsByClassName('text-wrapper')[0].innerHTML = messages[category][step]
//        document.getElementsByClassName('chat-wrapper')[0].innerHTML =
//        `
//            ${messages[category][step]}
//            <div class="prev-btn" onclick="getStep(category, sessionStorage.getItem('step'), -1)">вернуться на шаг назад</div>
//            <div class="next-btn" onclick="getStep(category, sessionStorage.getItem('step'), 1)">я всё понял, идём дальше</div>
//        `
    }
}