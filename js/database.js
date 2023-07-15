messages = {
    'introduction': {
        1: `Это волчий путеводитель, который за руку проведёт тебя по волчьим тропам. По умолчанию считаем, что ты уже
            определился с направлением в IT, тут это обсуждать не будем. Тут собраны советы и инструкции по разным темам.
            Пожалуйста, не нажимай правую красную кнопку внизу пока не усвоишь весь материал по тем рекомендациям, что тебе
            будут показывать тут. Придерживайся следующей логики:<br>
            1) Получаем инструкцию/совет<br>
            2) Внимательно усваиваем, выполняем всё что там написано<br>
            3) Только после этого жмём красную кнопку и переходим к следующему пункту`,
        2: `Начни с раздела <red class="pointer" onclick="getLayout('summary')">Резюме</red>.`,
    },
    'summary': {
        1: `Первое, что нужно начинающему волку - составить резюме. Резюме нужно, чтобы тебя заметили и пригласили на
            собеседование. Для этого первым делом идём в тематический чат <red>ОМ: Резюме</red>
            (ссылку на этот чат и любой другой ищи <a href="https://telegra.ph/Poleznye-ssylki-stai-Osoznannaya-merkantilnost-07-10" target="_blank">тут</a>).`,
        2: `В чате <red>ОМ: Резюме</red> находим топик <red>Правила [FAQ]</red> и внимательно изучаем всё что там написано.`,
        3: `В чате <red>ОМ: Резюме</red> переходим в топик <red>Резюме</red> и внимательно изучаем всю инфу по ссылкам в закрепе.`,
        4: `Далее в этом же топике <red>Резюме</red> в поиске по ключевым словам ищем примеры резюме по своему направлению
            и языку (те версии, что прошли одобрение модераторов) и из кучи таких резюме собираем своё.
            Не нужно переписывать слово в слово, компании придумываете сами, задачи тоже берёте по аналогии.`,
        5: `Далее в этот же топик <red>Резюме</red> скидываете своё резюме в том формате, что указан в правилах в закрепе.
            Когда на резюме прилетает обратная связь, исправляете все косяки и скидываете снова. Повторяете, пока замечаний
            не останется. Когда замечания к вашему резюме закончатся, значит оно более-менее неплохое (по факту в среднем
            по рынку оно будет отличное).<br>
            <br>`,
        6: `Резюме готово, можно переходить к следующему блоку <red class="pointer" onclick="getLayout('preparationForInterviews')">Подготовка к собесам</red>.`,
    },
    'preparationForInterviews': {
        1: `Далее нужно минимально подготовиться к собеседованиям. Безусловно всё выучить нереально, но нерационально с
            нулём знаний идти на собесы, это слишком долгий путь, а мы ведь не ищем таких путей?<br><br>
            Первым делом в чате <red>ОМ: Резюме</red> идём в топик <red>Собеседования</red> и изучаем внимательно всю информацию в закрепе.`,
        2: `Самые частые вопросы со скринингов и с техсобесов можно найти в
            <a href="https://docs.google.com/document/d/1JAObwghUnQ3K7t_8oITbYEDDRREFxxI1NGRdT9vhbqs/edit#heading=h.82aspg1bcpei" target="_blank">Базе знаний</a> -
            находим и учим ответы.<br>
            <br>
            Так же можно поспрашивать ссылки у людей в тематических чатах (<red>ОМ: Backend</red>, <red>ОМ: Frontend</red> и т.д.).
            База знаний наполняется медленно, может что-то новенькое подскажут.`,
        3: `Так же полезно посмотреть несколько записей реальных собеседований, как задают вопросы, как на них обычно отвечают.
            Ищем в <a href="https://docs.google.com/document/d/1JAObwghUnQ3K7t_8oITbYEDDRREFxxI1NGRdT9vhbqs/edit#heading=h.82aspg1bcpei" target="_blank">Базе знаний</a>,
            ищем на <a href="https://youtube.com" target="_blank">youtube</a>.`,
        4: `Так же можешь попробовать пройти мок-собес в стае перед прохождением реальных собесов. Волки помогут подсветить
            твои слабые места + поборешь страх собесов. Для этого у нас есть <a href="https://t.me/mock_interview_robot" target="_blank">бот</a>.`,
        5: `Так же хорошо проработай свою легенду, если собираешься крутить опыт. Нет, серьёзно, продумай всё до мельчайших
            деталей, попроси товарищей по тематическому чату накидать каверзных вопросов и продумывай все детали легенды.<br>
            Вдохновение можешь черпать из телеграм-канала <a href="https://t.me/one_IT_day" target="_blank">Один день ITтишника</a>.<br>
            <br>`,
        6: `С этим закончили, можно переходить к следующему блоку <red class="pointer" onclick="getLayout('responsesToVacancies')">Отклики на вакансии</red>.`,
    },
    'responsesToVacancies': {
        1: `Когда подготовились, выкладываем резюме на площадки: <a href="https://hh.ru" target="_blank">HeadHunter</a>,
            <a href="https://habr.ru" target="_blank">Хабр</a>, <a href="https://geekjobs.ru" target="_blank">Geekjobs</a>,
            <a href="https://linkedin.com" target="_blank">Linkedin</a> и начинаем откликаться на вакансии.<br>
            <br>
            Помимо этих площадок вакансии также можно искать в чате <red>ОМ: Вакансии</red>, а так же в тематических
            телеграм каналах за пределами стаи (например <a href="https://t.me/myresume_ru" target="_blank">в таком</a>)
            и в специальных ботах с вакансиями (например <a href="https://t.me/g_jobbot" target="_blank">в таком</a>).<br>
            <br>
            Так же у многих крупных компаний есть свои корпоративные площадки вакансий, например такие:<br>
            - <a href="https://yandex.ru/jobs" target="_blank">Яндекс</a><br>
            - <a href="https://job.ozon.ru" target="_blank">Ozon</a><br>
            - <a href="http://rabota.sber.ru" target="_blank">Сбер</a><br>
            - <a href="https://people.sovcombank.ru" target="_blank">Совкомбанк</a>`,
        2: `Обращайте внимание на красные флаги. Например:<br>
            - вакансия очень долго открыта<br>
            - не хотят говорить вилку по зарплате<br>
            - очень размытые требования к кандидату<br>
            - сфера деятельности компании из серого списка (ставки на спорт, сайты для взрослых, казино, микрозаймы)<br>
            - оформление по ГПХ или как самозанятый<br>
            - стартап, который оплачивает работу акциями`,
        3: `С этим закончили, можно переходить к следующему блоку <red class="pointer" onclick="getLayout('screening')">Скрининг</red>.`,
    },
    'screening': {
        1: `Переписка с эйчаром - лучше не затягивать и созвониться как можно раньше.`,
        2: `На скрининге помимо общих вопросов эйчары могут поспрашивать технические вопросы по бумажке, либо
            тест с вариантами ответов, нужно быть к этому готовым. Твои ответы будут оценивать не они, они запишут
            ответы либо текстом, либо на аудио.`,
        3: `Скрининг с эйчаром - отвечаем уверенно, в конце задаём свои вопросы. Обязательно задавай вопросы эйчару,
            отсутствие вопросов может произвести впечатление, что ты не сильно заинтересован в вакансии. Примеры
            вопросов, которые можно задать - <a href="https://github.com/kix/reverse-interview/blob/master/README.md" target="_blank">ссылка</a><br>
            <br>
            Обязательно уточняем в течение какого времени дадут ответ.`,
        4: `Напоминаем о себе, если в оговоренное время не дали ответ.`,
        5: `Когда будете с эйчаром выбирать дату техсобеса, выбирайте день как можно раньше. Выучить что-то за несколько
            дней в любом случае не успеете, а вот потерять вакансию шансы увеличиваются.`,
        6: `С этим разобрались, можно переходить к блоку <red class="pointer" onclick="getLayout('technicaInterview'")>Скрининг</red>.`,
    },
    'technicaInterview': {
        1: `Не ставь на один день больше 2 технических собеседований, лучше вообще 1. Скринингов это не касается,
            можно и 5 штук поставить.`,
        2: `Не приходи на собеседование уставшим, в состоянии опьянения, в плохом самочувствии, лучше в таком случае
            объясниться и попросить перенести встречу.`,
        3: `Включай запись с экрана когда проходишь техническое собеседование. Телефонные созвоны с эйчарами тоже
            желательно записывать. Потом отсматривай/отслушивай, выписывай вопросы что задают, обращай внимание
            как сам отвечаешь, корректируй свои ответы. Найди оптимальный темп ответа: слишком быстрые ответы будут
            выглядеть как заученные, при слишком долгих размышлениях будете выглядеть неуверенно. Идеально знать ответ
            на вопрос и делать вид, что слегка задумался, а потом постепенно выдавать ответ, будто вспоминаешь.<br>
            Ещё одна хитрость - старайся растягивать ответ, можно уйти в рассуждения, углубить ответ, затронуть другие темы,
            скорее всего собеседующий тебя сразу же не прервёт и ты выиграешь драгоценное время, ведь нам важно, чтобы за
            собеседование нам задали как можно меньше вопросов, а собеседование не резиновое.<br>
            <br>
            Так же помоги своим товарищам и не забывай заполнять
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUFdOoAbk8sA6PlHNeYqcNQkCn4zIq90a94Hdn456EbPlT1Q/viewform" target="_blank">эту форму</a>.`,
        4: `Не спорьте с собеседующим, за исключением случаев, когда в задании ошибка. Даже если вы при нём загуглите
            и докажите что он неправ в реальности это скорее вызовет у него обиду, нежели восхищение какой вы умный и
            инициативный и умеете отстаивать свою точку зрения. Это не касается случаев, когда сам собеседующий
            приглашает подискутировать.`,
        5: `Если не знаете ответа, то не нужно мяться и делать долгих пауз, лучше сказать честно, что либо забыл, либо
            не сталкивался с таким в работе, но попробуешь порассуждать. Обращают внимание как ты отвечаешь на вопросы
            на которые не знаешь ответа, пробуешь ли рассуждать, смотрят за логикой рассуждений.`,
        6: `Обязательно просить фидбек в конце интервью, даже если чувствуешь, что провалил его. Ты всегда можешь
            переоценивать или недооценивать себя, послушай оценку опытного человека со стороны.`,
        7: `Если получишь
            отказ по вакансии, то не стоит загоняться по поводу причины отказа, причины могут быть совершенно разные:<br>
            - недостаточные знания<br>
            - не устроила причина твоего увольнения с последнего места работы<br>
            - в резюме слишком частые смены работ<br>
            - вакансия уже закрылась (хотя эту причину обычно озвучивают)<br>
            - ты попросил слишком много денег<br>
            - не понравилась твоя внешность<br>
            - не понравилась твоя манера общения<br>
            - не понравились твои взгляды на работу<br>
            - не подошёл твой предыдущий опыт (искали кандидата с релевантным опытом, например в банковской сфере)<br>
            - не совпали по твоим ожиданиям от работы и то что они могут предложить`,
        8: `Пара слов про опыт разных людей: у каждого свой уникальный опыт и своя статистика по поиску работы. Кому-то
            может улыбнуться удача и он получит оффер с первого же собеса, другой же потратит на первый оффер 500 откликов
            и несколько десятков технических собеседований. Если после 20 технических собесов ты всё ещё не получил оффер -
            не ставь на себе крест, это вполне нормальная статистика. Главное после каждого собеса проводить работу над
            ошибками. Вода камень точит, рано или поздно ты получишь свой заветный оффер.<br>
            <br>
            Ещё как вариант можно спросить в чате по своему направлению (<red>ОМ: Backend</red>, <red>ОМ: Frontend</red> и т.д.)
            соразмерны ли твои зарплатные ожидания тому опыту и технологиям, что ты расписал в резюме. Возможно стоит
            ещё накрутить опыта, либо же поубавить свои аппетиты (конечно же второй вариант не для нас, ауф).`,
        9: `При трудоустройстве нужно понимать текущую ситуацию в найме и психологию нанимающей стороны. Так сложилось, что
            на данный момент работодатель спрашивает больше знаний, чем требуется в работе. Работодатель предпочитает взять
            специалиста с запасом по скилам, пусть даже это усложнит подбор кадров в компанию. Вас проще отсеять на этапе
            скрининга или техсобеса, чем потом мучаться с вами на испытательном сроке или боже упаси после него. Поэтому
            не стоит пугаться сложных вопросов на собесах, в работе как правило не так всё страшно: есть готовый код проекта,
            на который можно ориентироваться, есть коллеги, которым можно и нужно задавать вопросы. Плюс на собеседованиях
            пытаются нащупать границу твоей компетентности, твоих скилов, так что не стоит думать, что если на что-то не
            можешь ответить, то значит ты самозванец. Это лишь значит, что ты упёрся в потолок своих знаний, а собеседующий
            уже решит, устраивает ли его этот уровень.`,
        10: `Блок закончен, идём в раздел <red class="pointer" onclick="getLayout('salaryNegotiations')">Зарплатные переговоры</red>.`,
    },
    'salaryNegotiations': {
        1: `При получении оффера нужно помнить, что оффер != 100% трудоустройство, равно как и трудоустройство != прохождение
            испытательного срока. При получении оффера ещё в течение недели можно проходить собесы, рассматривать варианты.
            Дольше не стоит, оффер могут и отозвать.`,
        2: `Обязательно стоит попробовать поторговаться за зарплату. Сказать, что тебе пришёл ещё один оффер или даже два,
            естественно назвать сумму больше чем тут предлагают. Конечно может и не прокатить, но врядли у тебя отзовут
            оффер, в крайнем случае согласишься на ту сумму, что изначально предложили, только придётся придумать причину
            почему отказался от других офферов.<br>
            <br>
            Подробнее про зарплатные переговоры можно узнать <a href="https://teletype.in/@your_soft_skillzz/rJiG3XsCX" target="_blank">тут</a>.<br>
            Так же посмотри <a href="https://www.youtube.com/watch?v=NrJM8Uyi8GE" target="_blank">это видео</a>.`,
        3: `После трудоустройства не забываем написать пост в <red>ОМ: Полезное</red> и поделиться своей историей.`,
        4: `С этим блоком всё, переходи к блоку <red class="pointer" onclick="getLayout('probation')">Испытательный срок</red>.`,
    },
    'probation': {
        1: `После испытательного срока пишем пост в один день айтишника и отзыв на компанию.`,
        2: `2`,
        3: `3`,
        4: `<red class="pointer" onclick="getLayout('dismissal')">Испытательный срок</red>.`,
    },
    'dismissal': {
        1: `1`,
        2: `2`,
    },
}

/*

            в процессе работы записываем все крупные задачи над которыми ты работал, чтобы потом вставить в резюме
            периодически (допустим раз в месяц) просим у тимлида фидбек на счёт себя
            не убегаем из стаи, а остаёмся и помогаем новичкам
            привлекаем новых людей в сообщество
            не перестаём платить сотку!
*/