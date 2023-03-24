import React from 'react'
import { BsTelephone } from "react-icons/bs";

import { HeaderSt, Title } from './Header.styled'

export const Header = () => {
  return (
    <HeaderSt>
        <BsTelephone/>
        <Title>Call me, man</Title>
    </HeaderSt>
  )
}
