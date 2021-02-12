import React from 'react'
import { Menu, Segment, Container, Grid, Header } from 'semantic-ui-react';

class Beranda extends React.Component{
    render(){
        return(
             <div>
                <Container style={{ marginTop: '3em' }}>
                    <Grid columns={3} stackable>
                        <Grid.Column></Grid.Column>
                        <Grid.Column><img src={'mark.jpg'} alt='' width={350}/></Grid.Column>
                        <Grid.Column> </Grid.Column>
                    </Grid>
                    <Grid columns={3} stackable>
                        <Grid.Column></Grid.Column>
                        <Grid.Column>
                            <Header as='h2'textAlign='center'>Hii peeps</Header>
                            <p>Stage Name: Baekhyun (백현)</p><br></br>
                            <p>Real Name: Byun Baek Hyun (변백현)</p><br></br>
                            <p>Group Potition: Main Vocalist</p><br></br>
                            <p>Birth Date: 6 May 1992</p><br></br>
                            <p>Nation: Korea</p><br></br>
                            <p>Height: 174 cm (5’9″)</p><br></br>
                            <p>Blood Type: O</p><br></br>
                            <p>Hometown: Bucheon, Provinsi Gyeonggi, Korea Selatan</p><br></br>
                            <p>Another Talent: Hapkido, piano</p><br></br>
                            <p>Unit: EXO</p><br></br>
                            <p>Sub-unit: EXO-K, EXO-CBX, SuperM</p><br></br>
                            <p>Super Power (Badge): Light (Sun)</p><br></br>
                        </Grid.Column>
                        <Grid.Column> </Grid.Column>
                    </Grid>
                </Container>
        </div>
        )
    }
}

export default Beranda;