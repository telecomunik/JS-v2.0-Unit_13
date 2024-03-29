// Task 1
// Выведите массив a1 на страницу.
//  a1 = {
//    3 : 'hello',
//    'one' : 'hi'
//  };

const a1 = {
    3: 'hello',
    'one': 'hi',
};
let out_1 = '';
for (let key in a1) {
    out_1 += key + '--' + a1[key] + '<br>';
}
document.querySelector('.out-1').innerHTML = out_1;

// Task 2
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.
// a2 = {
//   3: 'hello',
//   'one': 'hi',
//   'testt': 'vodoley',
//   'ivan': 'ivanov'
// };

const a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

let out_2 = '';
for (let key in a2) {
    let a2_1 = a2[key].split('');
    if (a2_1.length > 4) {
        out_2 += key + ' -- ' + a2[key] + '<br>';
    }
}
document.querySelector('.out-2').innerHTML = out_2;

// Task 3
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
// a3 = {
//   3 : 'hello',
//   'one' : 'hi',
//   'testt' : 'vodoley',
//   'ivan' : 'ivanov'
//  };

const a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

let out_3 = '';
for (let key in a3) {
    let a3_1 = key.split('');
    if (a3_1.length > 4) {
        out_3 += key + ' -- ' + a3[key] + '<br>';
    }
}
document.querySelector('.out-3').innerHTML = out_3;

// Task 4
// Выведите на страницу элементы из масиива a4 у которых значение - число.
// a4 = {
//  3 : 'hello',
//  'one' : 4,
//  'testt' : 'vodoley',
//  'ivan' : 6
// };

const a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};
let out_4 = '';
for (let key in a4) {
    let a4_1 = a4[key];
    if (isNaN(a4_1) == false) {
        out_4 += key + ' -- ' + a4[key] + '<br>';
    }
}
document.querySelector('.out-4').innerHTML = out_4;

// Task 5
//Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
// a5 = {
//   a : 7,
//   z : 4,
//   45 : 12,
//   f : 6
//  };

const a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};
let summ = 0;
for (let key in a5) {
    summ += +a5[key];
}
document.querySelector('.out-5').innerHTML = summ;

// Task 6
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.

const a6 = {
    'name': 'Ruslan',
    'age': 33,
    'sex': 'man',
    'height': 27
};
out_6 = '';
for (let key in a6) {
    out_6 += key + '--' + a6[key] + '<br>';
}
document.querySelector('.out-6').innerHTML = out_6;

// Task 7
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

let a7 = {};
let inp7_key = document.querySelector('.u7-key__input');
let inp7_value = document.querySelector('.u7-value__input');
let btn7 = document.querySelector('.task7Btn');
out_7 = '';
function func_7() {
    let key = inp7_key.value;
    a7[key] = inp7_value.value;
    out_7 += key + ' -- ' + a7[key] + '<br>';
    document.querySelector('.out-7').innerHTML = out_7;
    inp7_key.value = '';
    inp7_value.value = '';
}
btn7.onclick = () => func_7();

// Task 8
//Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.

let inp8_key = document.querySelector('.u8-delete-value__input');
let btn8 = document.querySelector('.task8Btn');
function func_8() {
    out_8 = '';
    delete a7[inp8_key.value];
    for (let key in a7) {
        out_8 += key + ' -- ' + a7[key] + '<br>';
    }
    document.querySelector('.out-8').innerHTML = out_8;
    inp8_key.value = '';
}
btn8.onclick = () => func_8();

// Task 9
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.

let inp9_value = document.querySelector('.u9-delete-value__input');
let btn9 = document.querySelector('.task9Btn');
function func_9() {
    out_9 = '';
    for (let key in a7) {
        if (a7[key] == inp9_value.value) {
            delete a7[key];
        }
    }
    for (let key in a7) {
        out_9 += key + ' -- ' + a7[key] + '<br>';
    }
    document.querySelector('.out-9').innerHTML = out_9;
    inp9_value.value = '';
}
btn9.onclick = () => func_9();

// Task 10
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.

let inp10_key = document.querySelector('.u10-has-key__input');
let btn10 = document.querySelector('.task10Btn');
function func_10() {
    let a10 = false;
    for (let key in a7) {
        if (key == inp10_key.value) {
            a10 = true;
        }
    }
    inp10_key.value = '';
    console.log(a10);
}
btn10.onclick = func_10;

// Task 11
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
// a11 = {
// 	"red" : ['Академгородок',...],
// 	"green" : 
// }

let a11 = {
    "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],
    "green": ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец      спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],
    "blue": ['Героев Днепра', 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченка', 'Контрактовая площадь', 'Почтовая площадь', 'Майдан Нэзалэжности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец "Украина"', 'Лыбедская', 'Демеевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Иподром', 'Теремки']
}
let out_11 = '';
for (let key in a11) {
    out_11 += key + ' --- ';
    for (let i = 0; i < a11[key].length; i++) {
        out_11 += a11[key][i] + ' &nbsp ';
    }
    out_11 += '<br>';
}
document.querySelector('.out-11').innerHTML = out_11;

// Task 12
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.

let btn12 = document.querySelector('.task12Btn');
let sel_12 = document.querySelector('#u12-branch');
function func_12() {
    let out_12 = '';
    let key = sel_12.value;
    for (let i = 0; i < a11[key].length; i++) {
        out_12 += a11[key][i] + ' &nbsp ';
    }
    document.querySelector('.out-12').innerHTML = out_12
}
btn12.onclick = func_12;

// Task 13
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

let btn13 = document.querySelector('.u13-reverse');
function func_13() {
    let out_13 = '';
    let key = sel_12.value;
    for (let i = a11[key].length - 1; i >= 0; i--) {
        out_13 += a11[key][i] + ' &nbsp ';
    }
    document.querySelector('.out-13').innerHTML = out_13
}
btn13.onclick = func_13;

// Task 14
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

let btn14 = document.querySelector('.u14-branch');
let sel14 = document.querySelector('#u14-find-station');
for (let key in a11) {
    let out14 = '';
    for (i = 0; i < a11[key].length; i++) {
        out14 = document.createElement('option');
        out14.innerHTML = a11[key][i];
        sel14.append(out14);
    }
}
function func_14() {
    let out_14 = '';
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            if (sel14.value == a11[key][i]) {
                out_14 = key;
            }
        }
    }
    document.querySelector('.out-14').innerHTML = out_14;
}
btn14.onclick = func_14;

// Task 15
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).

let btn15 = document.querySelector('.u15-btn');
let sel15_1 = document.querySelector('#u15-1-station');
let sel15_2 = document.querySelector('#u15-2-station');
for (let key in a11) {
    let out15_1 = '';
    let out15_2 = '';
    for (let i = 0; i < a11[key].length; i++) {
        out15_1 = document.createElement('option');
        out15_2 = document.createElement('option');
        out15_1.innerHTML = a11[key][i];
        out15_2.innerHTML = a11[key][i];
        sel15_1.append(out15_1);
        sel15_2.append(out15_2);
    }
}
function func_15() {
    let key1 = '';
    let key2 = '';
    let i1 = 0;
    let i2 = 0;
    let out15 = '';
    let div15 = document.querySelector('.out-15');
    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            if (sel15_1.value == a11[key][i]) {
                key1 = key;
                i1 = i;
            }
            if (sel15_2.value == a11[key][i]) {
                key2 = key;
                i2 = i;
            }
            if (key1 == key2 && i1 != i2) {
                out15 = Math.abs(i2 - i1) - 1;
            }
        }
    }
    div15.innerHTML = out15;
}
btn15.onclick = func_15;

// Task 16
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.


let inpRadio_16 = document.querySelectorAll('.u16-radio');
let outSelect_16 = document.querySelector('.u16-select');
let station = '';
for (let i = 0; i < inpRadio_16.length; i++) {
    inpRadio_16[i].oninput = func_16;
    function func_16() {
        outSelect_16.innerHTML = '';
        for (let key in a11) {
            if (inpRadio_16[i].value == key) {
                for (let k16 = 0; k16 < a11[key].length; k16++) {
                    station = document.createElement('option');
                    station.innerHTML = a11[key][k16];
                    outSelect_16.append(station);
                }
            }
        }
    }
}


// Task 17
// ССоздайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.
// la17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }

let a17 = {
    "red": [['Академгородок', 0], 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', ['Театральная', 1], ['Крещатик', 1], 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', ['Лесная', 0]],
    "green": [['Сырец', 0], 'Дорогожичи', 'Лукьяновская', ['Золотые ворота', 1], ['Дворец спорта', 1], 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', ['Красный хутор', 0]],
    "blue": [['Героев Днепра', 0], 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченка', 'Контрактовая площадь', 'Почтовая площадь', ['Майдан Нэзалэжности', 1], ['Площадь Льва Толстого', 1], 'Олимпийская', 'Дворец "Украина"', 'Лыбедская', 'Демеевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Иподром', ['Теремки', 0]]
}

// Task 18
// Выведите на страницу только станции с переходами из массива a17.

let out_18 = document.querySelector('.out-18');
let station_18 = '';
for (let key in a17) {
    for (let i = 0; i < a17[key].length; i++) {
        for (let k = 0; k < a17[key][i].length; k++) {
            if (a17[key][i][k] == 1) {
                station_18 += a17[key][i][k - 1] + ' &nbsp ';
            }
        }
    }
}
out_18.innerHTML = station_18;

// Task 19
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. Выведите его на страницу.

let a19 = {
    'Abkhazia': { 'сapital': 'Сухуми', 'population': 243564, 'area': 860 },
    'Azerbaijan': { 'сapital': 'Баку', 'population': 970560, 'area': 86600 },
    'Armenia': { 'сapital': 'Ереван', 'population': 2995100, 'area': 29741 },
    'Afghanistan': { 'сapital': 'Кабул', 'population': 29822848, 'area': 647500 },
    'Bangladesh': { 'сapital': 'Дакка', 'population': 160221000, 'area': 144000 },
    'Bahrain': { 'сapital': 'Манама', 'population': 1397000, 'area': 701 },
    'Brunei': { 'сapital': 'Бандар-Сери-Бегаван', 'population': 436620, 'area': 5770 },
    'Bhutan': { 'сapital': 'Тхимпху', 'population': 784000, 'area': 47000 },
    'East-Timor': { 'сapital': 'Дили', 'population': 1167242, 'area': 14874 },
    'Vietnam': { 'сapital': 'Ханой', 'population': 91713300, 'area': 329560 },
    'Georgia': { 'сapital': 'Тбилиси', 'population': 3720400, 'area': 69700 },
    'Israel': { 'сapital': 'Иерусалим', 'population': 8585000, 'area': 22072 },
    'India': { 'сapital': 'Нью-Дели', 'population': 1268961000, 'area': 3287590 },
    'Indonesia': { 'сapital': 'Джакарта', 'population': 255461700, 'area': 1904556 },
    'Jordan': { 'сapital': 'Амман', 'population': 9813095, 'area': 89400 },
    'Iraq': { 'сapital': 'Багдад', 'population': 37883543, 'area': 437072 },
    'Iran': { 'сapital': 'Тегеран', 'population': 80840713, 'area': 1648000 },
    'Yemen': { 'сapital': 'Сана', 'population': 27478000, 'area': 527970 },
    'Kazakhstan': { 'сapital': 'Астана', 'population': 17753200, 'area': 2724900 },
    'Cambodia': { 'сapital': 'Пномпень', 'population': 15827000, 'area': 181040 },
    'Qatar': { 'сapital': 'Доха', 'population': 2553393, 'area': 11437 },
    'Cyprus': { 'сapital': 'Никосия', 'population': 848319, 'area': 9250 },
    'China': { 'сapital': 'Пекин', 'population': 1410549741, 'area': 9640821 },
    'North-Korea': { 'сapital': 'Пхеньян', 'population': 25281000, 'area': 120540 },
    'Kuwait': { 'сapital': 'Эль-Кувейт', 'population': 4330308, 'area': 17820 },
    'Kyrgyzstan': { 'сapital': 'Бишкек', 'population': 6019500, 'area': 198500 },
    'Laos': { 'сapital': 'Вьентьян', 'population': 6492400, 'area': 236800 },
    'Lebanon': { 'сapital': 'Бейрут', 'population': 5988000, 'area': 10452 },
    'Malaysia': { 'сapital': 'Куала-Лумпур', 'population': 31790277, 'area': 329750 },
    'Maldives': { 'сapital': 'Мале', 'population': 402071, 'area': 300 },
    'Mongolia': { 'сapital': 'Улан-Батор', 'population': 3081677, 'area': 1564116 },
    'Myanmar': { 'сapital': 'Нейпьидо', 'population': 51419420, 'area': 678500 },
    'Nepal': { 'сapital': 'Катманду', 'population': 28431494, 'area': 140800 },
    'UAE': { 'сapital': 'Абу-Даби', 'population': 9267000, 'area': 82880 },
    'Oman': { 'сapital': 'Маскат', 'population': 4523401, 'area': 309500 },
    'Pakistan': { 'сapital': 'Исламабад', 'population': 196174380, 'area': 881913 },
    'Russia': { 'сapital': 'Москва', 'population': 146600000, 'area': 17125200 },
    'Saudi-Arabia': { 'сapital': 'Эр-Рияд', 'population': 31015999, 'area': 2218000 },
    'Singapore': { 'сapital': 'Сингапур', 'population': 5607300, 'area': 714 },
    'Syria': { 'сapital': 'Дамаск', 'population': 17185170, 'area': 185180 },
    'Tajikistan': { 'сapital': 'Душанбе', 'population': 8551000, 'area': 143100 },
    'Thailand': { 'сapital': 'Бангкок', 'population': 68147000, 'area': 514000 },
    'Taiwan': { 'сapital': 'Тайбэй', 'population': 23188078, 'area': 35980 },
    'Turkmenistan': { 'сapital': 'Ашхабад', 'population': 5439000, 'area': 491200 },
    'Turkey': { 'сapital': 'Анкара', 'population': 78741053, 'area': 780580 },
    'Uzbekistan': { 'сapital': 'Ташкент', 'population': 31807000, 'area': 447400 },
    'Philippines': { 'сapital': 'Манила', 'population': 102980480, 'area': 300000 },
    'Sri-Lanka': { 'сapital': 'Коломбо', 'population': 21866445, 'area': 65610 },
    'South-Korea': { 'сapital': 'Сеул', 'population': 51664244, 'area': 98480 },
    'Japan': { 'сapital': 'Токио', 'population': 127103388, 'area': 377944 }
}

let out_19 = '';
for (let key19_1 in a19) {
    out_19 += key19_1 + ' -- ';
    for (let key19_2 in a19[key19_1]) {
        out_19 += key19_2 + ' - ' + a19[key19_1][key19_2] + ' ; ';
    }
    out_19 += '<br>';
}
document.querySelector('.out-19').innerHTML = out_19;

// Task 20
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.

let outSelect_20 = document.querySelector('.u20-select');
let outDiv_20 = document.querySelector('.out-20')
let out20 = '';
let out20_1 = '';
for (let key in a19) {
    out20 = document.createElement('option');
    out20.classList.add('option')
    out20.innerHTML = key;
    outSelect_20.append(out20);
    outSelect_20.oninput = func_20;
}
function func_20() {
    out20_1 = '';
    for (let key20_1 in a19) {
        if (outSelect_20.value == key20_1) {
            out20_1 += key20_1 + ' -- ';
            for (let key20_2 in a19[key20_1]) {
                out20_1 += key20_2 + ' - ' + a19[key20_1][key20_2] + '; ';
            }
        }
        outDiv_20.innerHTML = out20_1;
    }
}
