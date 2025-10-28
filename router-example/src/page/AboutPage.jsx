import React from 'react'
import { useNavigate } from 'react-router'

const AboutPage = () => {
    const navigate = useNavigate()
    const GoToHomepage=()=>{
        navigate('/')
    }
return (
<div>
    <h1>AboutPage</h1>
    <button onClick={GoToHomepage}>Go to Hompage</button>
</div>
)
}

export default AboutPage