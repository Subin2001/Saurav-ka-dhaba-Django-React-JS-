import React from 'react'
import Controls from '../components/Controls'
import Food_Cards from '../components/Food_Cards'
import Header from '../components/Header'


function HomeScreen() {
    return (
        <div>
            <Header />
            <Controls />
            <Food_Cards />
        </div>
    )
}

export default HomeScreen
