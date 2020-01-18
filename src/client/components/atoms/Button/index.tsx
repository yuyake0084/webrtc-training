import * as React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  display: block;
  padding: 12px 40px;
  color: #fff
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  border: 2px solid transparent;
  letter-spacing: 0.5px;
  transition: all 0.3s;

  ${({ color }) => `
    background-color: ${color};
  
    &:hover {
      color: ${color};
      background-color: #fff;
      border-color: ${color};
    }
  `}
`

type Props = {
  value: HTMLButtonElement['value']
  color?: string
  style?: Object
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({ value, color = '#6ed696', ...rest }) => {
  return (
    <ButtonComponent color={color} {...rest}>
      {value}
    </ButtonComponent>
  )
}
