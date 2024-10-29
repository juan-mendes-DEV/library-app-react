import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84'
}
export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;

        body{
            color: ${cores.branca};
            background-color: #1a2135;
        }
    }
    .linki{
      text-decoration: none;
      color: white;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
`
// export const Container = styled.div`

// `
