import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 20px;
        margin: 0 20px;
        padding: 15px 0;
        flex: 1;
    }

    @media screen and (max-width: 768px) {
        display: block;
        .column {
            margin: 20px 0;
        }
    }
`;
