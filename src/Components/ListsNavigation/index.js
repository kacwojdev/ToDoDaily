import React, { useEffect, useState } from 'react'

// styles
import { ListsNavigationWrapper, ArrowButton } from './style'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ListsNavigation = ({ handleArrowClick, sliderRef }) => {
    const [displayArrows, setDisplayArrows] = useState(false)

    useEffect(() => {
        setDisplayArrows(sliderRef.current.clientWidth < sliderRef.current.scrollWidth)
        const handleResize = () => {
            setDisplayArrows(sliderRef.current.clientWidth < sliderRef.current.scrollWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        <ListsNavigationWrapper show={displayArrows}>
            <ArrowButton
                aria-label="Strzałka do nawigowania po listach w lewo"
                onClick={() => handleArrowClick('left')}
            >
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </ArrowButton>
            Możesz nawigować po listach używając strzałek.
            <ArrowButton
                aria-label="Strzałka do nawigowania po listach w prawo"
                onClick={() => handleArrowClick('right')}
            >
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </ArrowButton>
        </ListsNavigationWrapper>
    )
}

export default ListsNavigation
