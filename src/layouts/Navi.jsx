import React from "react";
import { Button, Container, Dropdown, Menu, Icon, Flag } from "semantic-ui-react";

export default function Navi() {
    return (

        <div>
            <Menu inverted fixed="top" size="massive">
                <Container>
                    <Button color='black'>
                        <Icon name="home" color="yellow" size="big" />
                        Ana Sayfa
                    </Button>
                    <Button color='black'>
                        <Icon name="briefcase" color="yellow" size="big" />
                        İş İlanları
                    </Button>
                    <Menu.Menu position="right">

                        <Menu.Item>
                            <Button.Group color="black" inverted>
                                <Button primary inverted color="grey" >
                                    <Icon name="signup" color="yellow" size="large" />
                                    Kaydol
                                </Button>
                                <Button.Or />
                                <Button positive inverted color="grey">
                                    <Icon name="sign in" color="yellow" size="large" />
                                    Giriş Yap
                                </Button>
                            </Button.Group>

                        </Menu.Item>
                    </Menu.Menu>
                    {
                        <Dropdown item text="Dil" pointing vertical>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Flag name='tr' />
                                    Turkish
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Flag name='us' />
                                    English
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Flag name='es' />
                                    Spanish
                                </Dropdown.Item>
                                <Dropdown.Item><Flag name='fr' />
                                    French
                                </Dropdown.Item>
                                <Dropdown.Item><Flag name='de' />
                                    German
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </Container>
            </Menu>
        </div>
    );
}