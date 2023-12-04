import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS } from '../../constants'

const Logo = (props) => {
  return (
    <Link href='/'>
      <Wrapper {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  )
}

const Link = styled.a`
  /* justify-self: flex-start; */
  /* position: absolute; */
  text-decoration: none;
  color: inherit;
`

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`

export default Logo
