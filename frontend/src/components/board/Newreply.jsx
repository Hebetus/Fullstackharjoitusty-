import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { REPLY } from '../../graphql/mutations'

import { boxStyle, replyStyle, replybuttonStyle } from './BoardStyles'
import { closedialogStyle } from './BoardStyles'

const Newreply = ({ id, isLoggedIn, addReply }) => {
    const [reply, setReply] = useState('')

    const userId = parseInt(window.localStorage.getItem('userId'))

    const [mutate] = useMutation(REPLY)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!isLoggedIn) {
            showDialog()
            return
        }
        mutate({ variables: { content: reply, pic: 'testi', postId: id, userId: userId } })
        addReply({
            id: null,
            content: reply,
            pic: null,
            date: String(new Date()).substring(4, 15)
        })
        setReply('')
    }

    const handleChange = (event) => {
        setReply(event.target.value)
    }

    const showDialog = () => {
        const replyDialog = document.getElementById('replyDialog')
        replyDialog.showModal()
    }

    const closeDialog = (event) => {
        event.preventDefault()
        const replyDialog = document.getElementById('replyDialog')
        replyDialog.close()
    }

    return (
        <div style={boxStyle()}>
                <dialog id='replyDialog'>
                    <p>Kirjaudu sisään vastataksesi postaukseen</p>
                    <button style={closedialogStyle()} onClick={closeDialog}>
                        X
                    </button>
            </dialog>
            <form onSubmit={handleSubmit}>
                <input value={reply} onChange={handleChange} style={replyStyle()}></input>
                <button type="submit" style={replybuttonStyle()}>Vastaa</button>
            </form>
        </div>
    )
}

export default Newreply