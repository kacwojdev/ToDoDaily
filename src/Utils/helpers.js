export const removeElementAtIndex = (array, indexToRemove) => {
    console.log('old array ', array)
    let arrayToUpdate = array;
    arrayToUpdate.splice(indexToRemove, 1)
    console.log('new array ', arrayToUpdate)
    return arrayToUpdate
}

export const emailValidator = (emailAddr) => {
    const re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])")
    const isValid = re.test(emailAddr)

    return isValid
}

export const pswdValidator = (pswd) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    const isValid = re.test(pswd)

    return isValid
}

export const nameValidator = (fullName) => {
    const re = new RegExp("^([A-Za-z0-9]){2,20}$")
    const isValid = re.test(fullName)

    return isValid
}
