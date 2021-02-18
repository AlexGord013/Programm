let a = prompt('1 - Определяет, начинается ли строка с http://');
document.write(/^htmp:\/\//.test(a),'<br>');

let b = prompt('2 - Определяет, начинается ли строка с http:// или https://');
document.write(/^http:\/\/|^https:\/\//.test(b),'<br>');

let c = prompt('3 - Заканчивается ли строка на txt, html и php или нет');
document.write(/\.txt$|\.html$|\.php$/.test(c),'<br>');

let d = prompt('4 - Заканчивается ли строка на jpg, jpeg или нет');
document.write(/\.jpg$|\.jpeg$/.test(d),'<br>');

let e = prompt('5 - Заканчивается ли строка на jpg, jpeg, png или нет');
document.write(/\.jpg$|\.jpeg$|\.png$/.test(d),'<br>');

let f = prompt('6 - Входит ли цифра в диапозон от 1 до 12');
document.write(/(^[1-9]|^1[0-2])$/.test(f),'<br>');

let g = prompt('7 - Строка с правельным форматом или нет : год-месяц-день');
document.write(/\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])/.test(g),'<br>');

let h = prompt('8 - Строка с правельным форматом или нет : день:месяц:год');
document.write(/(0[1-9]|[12][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d/.test(h),'<br>');

let i = prompt('9 - Строка с правельным форматом или нет : часы:менуты:секунды');
document.write(/([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/.test(i),'<br>');

let j = prompt('10 - Является ли строка Электроной почтой');
document.write(/@((mail|yandex)\.ru|gmail\.com)$/.test(j),'<br>');

let k = prompt('11 - Верный домен или нет');
document.write(/(.su|.ru|.com|.org|.рф)$/.test(k),'<br>');
