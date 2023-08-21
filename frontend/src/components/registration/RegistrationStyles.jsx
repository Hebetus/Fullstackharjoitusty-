export const registrationStyle = () => {
    return {
        margin: 5,
        fontFamily: 'monospace',
        fontSize: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export const paragraphStyle = () => {
    return {
        textAlign: 'center'
    }
}

export const formStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}

export const nameinputStyle = (nameValid) => {
    return {
        borderColor: nameValid ? null : 'red',
        alignContent: 'center'
    }
}

export const emailinputStyle = (emailValid) => {
    return {
        borderColor: emailValid ? null : 'red'
    }
}

export const usernameinputStyle = (usernameValid) => {
    return {
        borderColor: usernameValid ? null : 'red'
    }
}

export const passwordinputStyle = (passwordValid) => {
    return {
        borderColor: passwordValid ? null : 'red'
    }
}

export const errorStyle = () => {
    return {
        color: 'red',
        fontSize: 14,
        textAlign: 'center'
    }
}