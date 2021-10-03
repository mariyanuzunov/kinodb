import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${(props) =>
        `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
    background-size: 100%;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHero 1s;

    @keyframes animateHero {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h2 {
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMedium);

        @media screen and (max-width: 720px) {
            font-size: var(--fontNormal);
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }
`;
