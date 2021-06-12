import React from "react";
import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Icon,
    List,
    Segment,
} from "semantic-ui-react";

export default function Footer() {
    return (
        <div className="footer">
            <Segment inverted vertical style={{ padding: "3em 0em" }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                
                                <List link inverted>
                                    <Icon name="phone" color="yellow" />
                                    <List.Item as="a">İletisim</List.Item>
                                    <Icon name="info circle" color="yellow" />
                                    <List.Item as="a">Hakkımızda</List.Item>
                                    <Icon name="question circle" color="yellow" />
                                    <List.Item as="a">Yardım</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div class="descriptionPosition">
                                    <Header as="h2">
                                        <Header.Content>
                                            <font color="white">
                                                Human Resource Management System <br />

                                            </font>
                                            <br />
                                            <Icon name="github" color="yellow" />
                                            <a href="https://github.com/alkinbora">
                                                GitHub
                                            </a>
                                            <br />
                                            <Icon name="linkedin" color="yellow" />
                                            <a href="https://www.linkedin.com/in/alkinboraucak/">
                                                LinkedIn
                                            </a>
                                            <Header.Subheader>
                                                <font color="white"></font>
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    <Icon name="copyright" color="yellow" />
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                               
                                <List link inverted>
                                    <Icon name="dollar sign" color="yellow" />
                                    <List.Item as="a">İlan Satın Al</List.Item>
                                    <Icon name="briefcase" color="yellow" />
                                    <List.Item as="a">İş İlanları</List.Item>
                                </List>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}