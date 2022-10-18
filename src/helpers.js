export const removeElementAtIndex = (array, indexToRemove) => {
    console.log('old array ', array)
    let arrayToUpdate = array;
    arrayToUpdate.splice(indexToRemove, 1)
    console.log('new array ', arrayToUpdate)
    return arrayToUpdate
}