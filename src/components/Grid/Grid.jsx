import { Wrapper, Content } from './Grid.styles';

function Grid({ header, children }) {
    return (
        <Wrapper>
            <h2>{header}</h2>
            <Content>{children}</Content>
        </Wrapper>
    );
}

export default Grid;
