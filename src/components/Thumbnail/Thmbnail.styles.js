import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumbnail 1s;

    :hover {
        opacity: 0.9;
        transform: scale(1.05);
    }

    @keyframes animateThumbnail {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
