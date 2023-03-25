import React from 'react'

// styles
import { ListsNavigationWrapper } from './style'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ListsNavigation = () => {
    return (
        <ListsNavigationWrapper>
            <button>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </button>
            Navigate throughout your lists
            <button>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </ListsNavigationWrapper>
    )
}

export default ListsNavigation
