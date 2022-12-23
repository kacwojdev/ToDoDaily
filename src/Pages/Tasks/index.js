import React, { useState } from 'react'
import { NavLink, useParams, Outlet } from 'react-router-dom'
import { HeaderBar, PageHeader, HeaderBarGroup, GroupLabel, MainContentContainer } from '../../styledComponents'
import { groups } from '../../Utils/groups'

const Tasks = () => {
    const params = useParams()

    const navLinkStyle = {
        marginRight: '10px',
        padding: '.5rem 1rem',
        border: 'none',
        borderRadius: '1rem',
        fontSize: '.7rem',
        fontWeight: '400',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
    }

    const activeStyle = {
        marginRight: '10px',
        padding: '.5rem 1rem',
        border: 'none',
        borderRadius: '1rem',
        fontSize: '.7rem',
        fontWeight: '400',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: '#d0d0d0'
    }

    return (
        <div>
            <HeaderBar>
                <HeaderBarGroup>
                    <GroupLabel>GROUP / </GroupLabel>
                    <PageHeader>{params.groupId}</PageHeader>
                </HeaderBarGroup>
                <HeaderBarGroup>
                    <nav>
                        <NavLink to={`tasks`} style={({isActive}) => isActive ? activeStyle : navLinkStyle}>
                                Tasks
                        </NavLink>
                        <NavLink to={`archive`}  style={({isActive}) => isActive ? activeStyle : navLinkStyle}>
                                Archive
                        </NavLink>
                        <NavLink to={`labels`}  style={({isActive}) => isActive ? activeStyle : navLinkStyle}>
                                Labels
                        </NavLink>
                    </nav>
                </HeaderBarGroup>
            </HeaderBar>
            <MainContentContainer>
                <Outlet />
            </MainContentContainer>
        </div>
    )
}

export default Tasks