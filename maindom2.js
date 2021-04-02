/*
Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
b) робить шириниу елементу ul 400px
c) робить шириниу всіх елементів з класом linkList шириною 50%
d) отримує текст який зберігається в елементі з класом listElement2
e) отримує всі елементи li та змінює ім колір фону на сірий
f) отримує всі елементи 'a' та додає їм клас anchor
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
змінює йому розмір тексту на 40 пікселів
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
 Колір отримати з prompt()
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)*/
let title = document.getElementById('main_header');
title.innerText = 'mon-year';
title.style.color = 'pink';
let allUl = document.getElementsByTagName ('ul');
for (let i = 0; i < allUl.length; i++) {
    allUl[i].style.width = '400px';
    allUl[i].style.fontSize = ' 30px';
    allUl[i].style.backgroundColor = '#00ffff' ;
}
let allLi = document.getElementsByTagName ('li');
for (let i = 0; i < allLi.length; i++) {
    allLi[i].style.width = '50%';
    allLi[i].style.color = 'brown';
    allLi[i].style.backgroundColor = 'silver';
}

let aOne = document.getElementsByTagName('a');
aOne[0].classList.add('anchor','element_XXX');
aOne[1].classList.add('anchor','element_XXX');
aOne[2].classList.add('anchor','element_XXX');
for (let i = 0; i < aOne.length; i++) {
   aOne[i].innerText='XXX';

}
console.log(aOne)
let conOne = document.getElementsByClassName('sub-header');
r = Math.floor(Math.random() * (256));
g = Math.floor(Math.random() * (256));
b = Math.floor(Math.random() * (256));
color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
for (let i = 0; i < conOne.length; i++) {
    conOne[i].style.background = color;
 
    prompt('color')

}
let allP = document.getElementsByTagName('p');
for (let i = 0; i < allP.length; i++) {
    allP[i].style.padding = '20px';
}
let cont1 = document.getElementsByClassName('content_1');
for (let i = 0; i < cont1.length; i++) {
    cont1[i].style.backgroundColor = '#CCEEFF';
   prompt('color','blue');
}
let texxtWo = document.getElementsByClassName('text2')
for (let i = 0; i < texxtWo.length; i++) {
   texxtWo[i].innerHTML= 'mon-year';

}

/*Є масив котрий характеризує правила.
    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html*/
/*let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
const  wrap = document.createElement('div');
wrap.id = 'wrap';
for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    div.className = `rule rules ${i+1}`;
    h2.innerText = rule.title;
    p.innerText = rule.body;
    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div);
}
document.body.appendChild(wrap);*/
/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масcив*/
/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for ( const user of usersWithId) {
    for (const city of citiesWithId) {
        if( user.id === city.user_id){
            user.address = city;
        }
    }
}
console.log(usersWithId);*/
