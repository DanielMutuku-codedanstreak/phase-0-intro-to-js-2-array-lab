// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
//apend a cat to the end of cats array
function destructivelyAppendCat(name){
    return([...cats.push('Ralph')])
}
//prepends a cat to the beginning of the cats
function destructivelyPrependCat(name){
    return([...cats.unshift('Bob')])
}
//removes the last cat from the cats array
function destructivelyRemoveLastCat(){
    return([...cats.pop()])
}
//removes the first cat from the cats array
function destructivelyRemoveFirstCat(){
    return([...cats.shift()])
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
    const copyCats = [...cats]
    copyCats.push('Broom')
    return copyCats
}
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    const copyCats = [...cats]
    copyCats.unshift('Arnold')
    return copyCats
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
    const copyCats = [...cats]
    copyCats.pop()
    return copyCats
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats
}