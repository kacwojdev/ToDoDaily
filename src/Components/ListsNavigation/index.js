import React from 'react'

// styles
import { ListsNavigationWrapper, ArrowButton } from './style'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ListsNavigation = ({ handleArrowClick }) => {
    return (
        <ListsNavigationWrapper>
            <ArrowButton onClick={() => handleArrowClick('left')}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </ArrowButton>
            Możesz nawigować po listach używając strzałek.
            <ArrowButton onClick={() => handleArrowClick('right')}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </ArrowButton>
        </ListsNavigationWrapper>
    )
}

export default ListsNavigation
