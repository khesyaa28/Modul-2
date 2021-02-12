import React from 'react'
import { Card, Image, Icon, Container, Grid } from 'semantic-ui-react';


class Kontak extends React.Component{
    render(){
        return(
            <div>
                <Container style={{ marginTop: '3em' }}>
                        <Card fluid color='brown' href='http://smtown.com/'>
                            <Image src='https://cdn.wishnote.tw/500/2019/01/02/500_1389409_1546423536.jpeg' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>SM Entertainment</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Open 24 hours</span>
                                    </Card.Meta>
                                    <Card.Description>
                                    <Icon name='map pin' />
                                        Address: 648 SAmseong-ro, Samseong1(il)-dong, Gangnam-gu, Seoul, South Korea<br></br>
                                        Call Number: +82 2-6240-9800
                                    </Card.Description>
                                    </Card.Content>
                                </Card>  
                        <Grid columns={3} stackable centered>
                        <Card.Group centered>
                                            <Card  href='https://youtube.com/c/SMTOWN'>
                                                <Image src='https://cdn.vox-cdn.com/thumbor/FsfanOAchuKft3JYrLykPIcuHmk=/0x0:960x960/1200x800/filters:focal(404x404:556x556)/cdn.vox-cdn.com/uploads/chorus_image/image/58442023/14915318_10155148305236754_7471955098066766739_n.0.png' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>SM Town Official Youtube Channel</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>SMTOWN</span>
                                                    </Card.Meta>
                                                </Card.Content>
                                            </Card>
                                            <Card href='https://instagram.com/smtown?igshid=qgwceolcn4hf'>
                                                <Image src='https://www.hotspotshield.com/imgs/resources/unblock-instagram.png' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>SM Town Official Instagram</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>@smtown</span>
                                                    </Card.Meta>
                                                </Card.Content>
                                            </Card>
                                            <Card href='https://twitter.com/SMTOWNGLOBAL?s=09'>
                                                <Image src='https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png' wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>SM Town Official Twitter</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>@SMTOWNGLOBAL</span>
                                                    </Card.Meta>
                                                </Card.Content>
                                            </Card>
                                    </Card.Group>
                        </Grid>
                </Container>                         
            </div>
        )
    }
}

export default Kontak;