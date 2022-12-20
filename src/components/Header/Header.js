import './Header.scss';
import Container from '../Container/Container';
import { Row, Col } from 'antd';
import MainSearch from '../MainSearch/MainSearch';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import {BsFillChatDotsFill, BsPlusLg, BsBellFill} from 'react-icons/bs';
import Avatar from '../Avatar/Avatar';
import {Dropdown} from 'antd';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();
    return (
        <header className="Header">
            <Container>
                <div className="Header__in">
                    <div className="Header__logo Header__part">
                        
                    </div>
                    <div className="Header__action Header__part">
                        <div className="Header__action_item">
                            <Button
                                onClick={() => nav('/')}
                                text={'Home'}
                                />
                        </div>
                        <div className="Header__action_item">
                            <Button
                                // variant={'brown'}
                                variant={'white'}
                                text={'Create'}
                                after={<BsPlusLg/>}
                                tooltip={'Coming soon'}
                                />
                        </div>
                    </div>
                    <div className="Header__search Header__part">
                        <MainSearch/>
                    </div>
                    <div className="Header__action Header__part">
                        <div className="Header__action_item">
                            <IconButton
                                badge={10}
                                icon={<BsBellFill/>}
                                size={'30px'}
                                variant={'transparent'}
                                // color={'var(--blue)'}
                                color={'#fff'}
                                />
                        </div>
                        <Dropdown
                                // open={true}
                                placement={'top'}
                                dropdownRender={() => <ProfileMenu/>}
                                trigger={['click']}
                                >
                                 <div className="Header__action_item">
                                    <Avatar active={true}/>
                                </div>
                            </Dropdown>
                       
                    </div>

                </div>
            </Container>
        </header>
    )
}


export default Header;