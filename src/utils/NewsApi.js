import moment from 'moment';
import 'moment/locale/ru';
import transformDate from './transformDate';

const dateFrom = transformDate(moment().format('L'));
const dateTo = transformDate(moment().subtract(7, 'days').calendar());

const getArticles = (key) => {
  console.log(key);
  return fetch(`http://newsapi.org/v2/everything?q=${key}&from=${dateFrom}&to=${dateTo}&pageSize=100&apiKey=448b9fac67c1435aac1aaeaeba4f6e6e`, {
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      } else {
        return res.json();
      }
    });
}

export default getArticles;