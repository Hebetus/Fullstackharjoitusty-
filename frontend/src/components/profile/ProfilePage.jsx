import { paragraphStyle } from './ProfileStyles'

const ProfilePage = () => {
    //implement future graphql query for retrieving profile info

    return (
        <div>
            <p style={paragraphStyle()}>Käyttäjänimi: {'username'}</p>
        </div>
    )
}

export default ProfilePage