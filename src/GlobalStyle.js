import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #ffffff;
        --lightGrey: #eeeeee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.6rem;
        --fontBig: 1.8rem;
        --fontMedium: 1.3rem;
        --fontNormal: 1rem;
        --fontSmall: 0.8rem;
    }

    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

   h1 {
       font-size: 2rem;
       font-weight: 600;
       color: var(--white);
       margin: 15px 0 15px 0;
   }

   h2 {
       font-size: 1.5rem;
       font-weight: 600;
       color: var(--white);
       margin: 15px 0 15px 0;
   }

   h3 {
       font-size: 1.1.rem;
       font-weight: 600;
   }

   p {
       font-size: var(--fontNormal);
       color: var(--white);
   }
`;
