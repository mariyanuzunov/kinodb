import { Wrapper, Content, Text } from './Hero.styles';

function Hero({ image, title, text }) {
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    );
}

export default Hero;
