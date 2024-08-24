import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Post from './Post'

test('Renders Post component with test data', () => {
    const post = {
        id: 0,
        content: 'Testipostaus komponenttien yksikkötestejä varten',
        postedAt: '2023-6-11',
        likes: 5,
        topic: 'general',
        userId: 0,
        picture: null
    }
    const isLoggedIn = false

    render(<Post post={post} isLoggedIn={isLoggedIn} key={Math.random()} />)

    const element = screen.getByText('Testipostaus komponenttien yksikkötestejä varten')

    expect(element).toBeDefined()
})