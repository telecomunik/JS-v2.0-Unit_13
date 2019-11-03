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
        out_2 += a2[key] + '<br>';
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
        out_3 += key + '<br>';
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

// let btn14 = document.querySelector('.u14-branch');
// function func_14() {
//     let sel_14 = document.querySelector('#u14-find-station');
//     let out_14 = '';
//     for (let key in a11) {
//         for (let i = 0; i < a11[key].length; i++) {
//             if (sel_14.value == a11[key][i]) {
//                 out_14 = key;
//             }
//         }
//     }
//     document.querySelector('.out-14').innerHTML = out_14;
// }
// btn14.onclick = func_14;

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
    // let sel_14 = document.querySelector('#u14-find-station');
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
        // console.log(out15_1);
        out15_1.innerHTML = a11[key][i];
        out15_2.innerHTML = a11[key][i];
        sel15_1.append(out15_1);
        sel15_2.append(out15_2);

    }

}

function func_15() {
    let branch_15 = 0;
    let out15 = document.querySelector('.out-15');

    for (let key in a11) {
        for (let i = 0; i < a11[key].length; i++) {
            if (sel15_1.value == a11[key][i]) {
                // out15 = key;
                // console.log(a11[key].includes(sel15_1.value));
                branch_15 += 1;

            }

        }
        // }
        // }
        // out15.innerHTML = branch_15;

        console.log(branch_15);
    }

}
btn15.onclick = func_15;
// Task 16
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

// Task 17
// ССоздайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.

// la17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }

// Task 18
// Выведите на страницу только станции с переходами из массива a17.

// Task 19
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. Выведите его на страницу.

// Task 20
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.