import React from 'react'
import { Menu, Segment, Container, Grid } from 'semantic-ui-react';

class TentangSaya extends React.Component{
    render(){
        return(
           
                <div>
                    <h2>ini beranda</h2>
                        <Container style={{ marginTop: '3em' }}>
                        <Grid columns={3} stackable>
                        <Grid.Column></Grid.Column>
                        <Grid.Column><img src={'mark.jpg'} alt='' width={350}/></Grid.Column>
                        <Grid.Column> </Grid.Column>
                        </Grid>
                        </Container>
                </div>
        )
    }
}
export default TentangSaya;