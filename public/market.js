const fs = require('fs');

// Путь к HTML-странице с ценами (относительно текущего рабочего каталога)
const htmlPath = '/home/a202509271/web/alimet66.ru/public_html/prices.html';

// Путь к результирующему XML-файлу (относительно текущего рабочего каталога)
const xmlPath = '/home/a202509271/web/alimet66.ru/public_html/market.xml';

// Читаем HTML-страницу
const html = fs.readFileSync(htmlPath, 'utf-8');

// Функция для преобразования даты и времени в формат YYYY-MM-DD hh:mm
function getFormattedDateTime() {
  const date = new Date();
  const yyyy = String(date.getFullYear());
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');

  return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
}

// Функция для генерации XML-файла
const generateMarketXml = (rows) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE yml_catalog SYSTEM "shops.dtd">
<yml_catalog date="${getFormattedDateTime()}">
  <shop>
    <name>Компания Алимет</name>
    <company>OOO «Компания Алимет»</company>
    <url>https://alimet66.ru</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Металлолом</category>
    </categories>
    <offers>`;

  rows.forEach((row, index) => {
    const cols = row.split('|');
    const category = cols[0].trim();
    const name = cols[1].trim();
    const composition = cols[2].trim();
    const price = cols[3].trim();

    // Проверяем, является ли цена числом и не пуста
    if (!isNaN(price) && price.trim() !== '') {
      xml += `
        <offer id="${index + 1}" available="true">
          <name>${name}</name> 
          <price>${price}</price>
          <currencyId>RUR</currencyId>
          <categoryId>1</categoryId>
          <description>${composition}</description>
          <param name="Категория">${category}</param>
          <param name="Состав">${composition}</param>
        </offer>`;
    }
  });

  xml += `
    </offers>
  </shop>
</yml_catalog>`;

  return xml;
};

// Обработка HTML-файла с помощью регулярных выражений
let matches = html.match(/<tr[^>]*>\s*(.*?)<\/tr>/gs);
let rows = [];

// Пропускаем первую строку (заголовки колонок)
for (let i = 1; i < matches.length; i++) {
  let tds = matches[i].match(/<td[^>]*>\s*(.*?)\s*<\/td>/gs);
  if (tds.length === 4) {
    rows.push(tds.map(td => td.replace(/<(.*?)>/g, '').replace(/\s+/g, ' ').trim()).join('|'));
  }
}

// Генерируем XML-файл
const xmlContent = generateMarketXml(rows);

// Записываем файл на сервер
fs.writeFileSync(xmlPath, xmlContent, 'utf-8');

// Выводим в консоль дату и время до секунд и успешное сообщение
const now = getFormattedDateTime(); // Используем ту же функцию для Екатеринбурга
console.log(`${now}: Файл market.xml успешно создан.`);