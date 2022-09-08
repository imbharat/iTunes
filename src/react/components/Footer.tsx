import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledFooter } from '../styled-components/StyledFooter'

function Footer() {
  return (
        <StyledFooter>
            <div>
                <NavLink to='/about'>
                    About Us
                </NavLink>
            </div>
        </StyledFooter>
  )
}

export default Footer