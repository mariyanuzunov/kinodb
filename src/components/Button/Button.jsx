import { Wrapper } from './Button.styles';

function Button({ text, cb }) {
    return (
        <Wrapper type="button" onClick={cb}>
            {text}
        </Wrapper>
    );
}

export default Button;
