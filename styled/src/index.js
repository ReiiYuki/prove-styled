import styled, { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import React from 'react'

const sheet = new ServerStyleSheet()

const TestStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    ${props => props.color && `background: ${props.color}`}
`

const TestStyled2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    ${props => props.color && `background: ${props.color}`}
`

const Red = () => <TestStyled color="red" />

renderToString(
    sheet.collectStyles(
        <TestStyled>
            <Red />
             <Red />
             <Red />
            <TestStyled2 color="red" />
            <TestStyled color="red" />
            <TestStyled2 color="red" />
        </TestStyled>
    )
)

console.log(sheet.getStyleTags())

// const sheet = new ServerStyleSheet()

// const Red = () => <TestStyled color="red" />

// renderToString(
//     sheet.collectStyles(
//         <TestStyled>
//             <Red />
//             <Red />
//             <Red />
//         </TestStyled>
//     )
// )

// console.log(sheet.getStyleTags())
