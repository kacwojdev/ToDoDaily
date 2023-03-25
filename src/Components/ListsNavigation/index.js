import React from 'react'

// styles
import { ListsNavigationWrapper } from './style'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ListsNavigation = ({ handleArrowClick }) => {
    return (
        <ListsNavigationWrapper>
            <button onClick={() => handleArrowClick('left')}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>
            Navigate throughout your lists
            <button onClick={() => handleArrowClick('right')}>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </ListsNavigationWrapper>
    )
}

export default ListsNavigation
