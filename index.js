// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// removes the last cat from the cats array
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

// removes the first cat from the cats array
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchang
function appendCat(name) {
    const meows = [...cats];
    meows.push(name);
    return meows;
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const meows = [...cats];
    meows.unshift(name);
    return meows;
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(name) {
    const meows = [...cats];
    meows.pop(name);
    return meows;
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(name) {
    const meows = [...cats];
    meows.shift(name);
    return meows;
}

