import { paragraphStyle } from './ProfileStyles'

const ProfilePage = () => {
    const username = window.localStorage.getItem('username')
    const name = window.localStorage.getItem('name')
    const signupDate = window.localStorage.getItem('signupDate')
    const email = window.localStorage.getItem('email')

    /**
     * const profilePic = window.localStorage.getItem('profilePic')
     * FUTURE SUPPORT FOR RETRIEVING AND SHOWING PROFILE PIC
     */

    return (
        <div>
            <p style={paragraphStyle()}>Käyttäjänimi: {username}</p>
            <p style={paragraphStyle()}>Nimi: {name}</p>
            <p style={paragraphStyle()}>Rekisteröitymispäivämäärä: {signupDate}</p>
            <p style={paragraphStyle()}>Sähköposti: {email}</p>
        </div>
    )
}

export default ProfilePage