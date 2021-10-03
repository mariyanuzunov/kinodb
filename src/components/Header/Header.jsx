import { Link } from 'react-router-dom';
import { Content, TMDBLogo, Wrapper } from './Header.styles';
import tmbdLogoImg from '../../images/tmdb_logo.svg';

function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <h1>Kino DB</h1>
                </Link>
                <TMDBLogo src={tmbdLogoImg} />
            </Content>
        </Wrapper>
    );
}

export default Header;
