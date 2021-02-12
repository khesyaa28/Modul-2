import React from 'react'
import {Link} from 'react-router-dom';
import { Card, Image, Icon, Container, Grid } from 'semantic-ui-react';


class Karya extends React.Component{
    render(){
        return(
            <div>
                <Container style={{ marginTop: '3em' }}>
                    <Grid columns={3} stackable>
                        <Card fluid >
                            <Card.Content>
                                <Card.Header ><h2>Album Released</h2></Card.Header><br></br>
                                    <Card.Group centered>
                                            <Card color='red' href='https://www.youtube.com/watch?v=J4GF8QVKJxg&list=PLMTFeCITHMAyPQBzD9kZhZiupE2nfToRL'>
                                                <Image src='https://upload.wikimedia.org/wikipedia/en/3/33/Baekhyun_-_City_Lights.png' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>City Lights:the 1st Mini Album</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Released on July 10, 2019</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                    the debut extended play by South Korean singer Baekhyun. It was released by SM Entertainment. 
                                                    The album features six tracks, including the lead single "UN Village".
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a>
                                                        <Icon name='chart line' />
                                                        Sold 400.000+++ copies
                                                    </a>
                                                </Card.Content>
                                            </Card>
                                        
                                            <Card color='purple' href='https://www.youtube.com/watch?v=gmgcRWxhmqY&list=PLMTFeCITHMAz93RFG4sUk2DBFJxzb4mKE'>
                                                <Image src='https://upload.wikimedia.org/wikipedia/en/f/f4/Delight_-_cover.jpg' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>Delight: the second EP</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Released on May 25, 2020</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                    the second extended play by South Korean singer Baekhyun. It was released by SM Entertainment,
                                                    and features seven tracks, including the lead single, "Candy".
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a>
                                                        <Icon name='chart line' /> 
                                                        Sold 1.000.000+++ copies
                                                    </a>
                                                </Card.Content>
                                            </Card>
                                            <Card color='orange' href='https://www.youtube.com/watch?v=uqcZUIUb7fk'>
                                                <Image src='https://upload.wikimedia.org/wikipedia/en/c/c1/Baekhyun_-_cover.png' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>Get You Alone : 1st Solo Japan Album</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Joined in 2015</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                    the debut Japanese extended play (third overall) by South Korean singer Baekhyun. It was released on January 20, 2021, by Avex Trax. 
                                                    The album features six tracks, including the lead single "Get You Alone".
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a>
                                                        <Icon name='chart line' /> 
                                                        Sold 300.000+++ copies
                                                    </a>
                                                </Card.Content>
                                            </Card>
                                        </Card.Group>
                                    </Card.Content>
                                </Card>
                                <Card fluid >
                            <Card.Content>
                                <Card.Header ><h2>Collab Promotions</h2></Card.Header><br></br>
                                    <Card.Group centered>
                                            <Card color='brown' href='https://www.youtube.com/watch?v=WfYgbFBFe1EL'>
                                                <Image src='https://upload.wikimedia.org/wikipedia/en/7/76/Dream_Suzy_Baekhyun.jpg' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>"Dream"(with Suzy)</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Released on July 10, 2019</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                    the debut extended play by South Korean singer Baekhyun. It was released by SM Entertainment. 
                                                    The album features six tracks, including the lead single "UN Village".
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a>
                                                        <Icon name='chart line' />
                                                        Sold 60.000+++ copies
                                                    </a>
                                                </Card.Content>
                                            </Card>
                                        
                                            <Card color='purple' href='https://www.youtube.com/watch?v=L8UUYfe6-UA'>
                                                <Image src='https://cdn.idntimes.com/content-images/post/20200508/1-5b15203ffd87bb3e00a7600858050a4c.jpg' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>"Leo" (나비와 고양이)(Bol4 ft.Baekhyun)</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Released on May 25, 2020</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                    the second extended play by South Korean singer Baekhyun. It was released by SM Entertainment,
                                                    and features seven tracks, including the lead single, "Candy".
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a>
                                                        <Icon name='chart line' /> 
                                                        -no physical album-
                                                    </a>
                                                </Card.Content>
                                            </Card>
                                            <Card color='orange' href='https://www.youtube.com/watch?v=KXnoYHCMjMI'>
                                                <Image src='https://pressfrom.info/upload/images/real/2021/02/02/a-person-standing-in-front-of-a-store-t1-x-raiden-baekhyun-and-changmo__985263_.jpg?content=1' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>"Runner"(with Changmo and Raiden)</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>Joined in 2015</span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                    is the debut Japanese extended play (third overall) by South Korean singer Baekhyun. It was released on January 20, 2021, by Avex Trax. 
                                                    The album features six tracks, including the lead single "Get You Alone".
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <a>
                                                        <Icon name='chart line' /> 
                                                        -no physical album-
                                                    </a>
                                                </Card.Content>
                                            </Card>
                                        </Card.Group>
                                    </Card.Content>
                                </Card>
                    </Grid>
                </Container>
        )
        </div>
        )
    }
}

export default Karya;