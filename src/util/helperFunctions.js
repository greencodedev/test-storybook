export const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export const getErrorMsg = response => {
    let errorMsg = ''

    if (typeof response.data === 'string') {
        errorMsg = response.data
    } else {
        errorMsg = response.data.message || ''
    }
    return errorMsg
}

export const sanitizeTransKey = key =>
    key.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')

// Password helpers
export const isHashed = password => {
    if (typeof password !== 'string' || !password) {
        return false
    }

    return password.split('$').length === 4
}

export const hasNumberUpperLowerChars = password => {
    const passwordChars = password.split('')

    let hasNumber = false
    let hasUpperChars = false
    let hasLowerChars = false

    passwordChars.forEach(char => {
        if (!isNaN(+char)) {
            hasNumber = true
        } else if (char === char.toUpperCase()) {
            hasUpperChars = true
        } else if (char === char.toLowerCase()) {
            hasLowerChars = true
        }
    })

    return hasNumber && hasUpperChars && hasLowerChars
}
