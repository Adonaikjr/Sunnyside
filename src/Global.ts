import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow:0 0 0 2px ${({ theme }) => theme.base_border}
    }
    * {
  scrollbar-width: thin;
    }
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  border-radius: 1px;
}

    body{
        background: ${({ theme }) => theme.base_background};
        color: ${({ theme }) => theme.base_text};
    }
    body, input, textarea, button{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
`
