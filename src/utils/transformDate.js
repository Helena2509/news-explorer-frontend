
const transformDate = (date) => {
  const dateMassive = date.split('.');
  const dateMassiveReverse = dateMassive.reverse();
  const dateFinal = dateMassiveReverse.join('-');
  return dateFinal;
}

export default transformDate;