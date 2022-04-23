const checkSimilarPassWord = (password, confirmPassword) => {
    if(password === confirmPassword) {
        return false
    }
    return true
}

const checkIsEmpty = (input) => {
    if(input.trim() === '') {
        return true
    }
    return false
}



export { checkSimilarPassWord, checkIsEmpty } 