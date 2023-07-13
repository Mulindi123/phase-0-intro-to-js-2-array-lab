let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName){
   cats.push('Ralph');
}

function destructivelyPrependCat(catName){
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat(catName){
  cats.pop();
}

function destructivelyRemoveFirstCat(catName) {
  cats.shift();
}

function appendCat() {
  let newCatName = 'Broom'
   let newCats = [...cats];
   newCats.push(newCatName);
   return newCats;
}

function prependCat(catName) {
  return [catName,...cats];
}

function removeLastCat(catName) {
  const catRemoved = cats.slice(0,-1)
  return catRemoved;
}
function removeFirstCat(catName) {
  const firstCatRemoved = cats.slice(1);
  return firstCatRemoved;
}