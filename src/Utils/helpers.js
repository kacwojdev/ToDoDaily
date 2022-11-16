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

export const USER_TYPE_CODE = '001'
export const TASK_TYPE_CODE = '002'
export const GROUP_TYPE_CODE = '003'

const _getRandomValue = () => {
    const values = 'qwertyuiopasdfghjklzxcvbnm1234567890'
    let code = []
    for (let i = 0; i<16; i++) {
        code.push(values[Math.floor(Math.random() * values.length)])
    }
    return `${code.join('')}`
}

export const getRandomKeyFor = (keyType) => {
    return `${keyType}__${_getRandomValue()}`
}