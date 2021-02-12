import React, { Component } from 'react'
import Utama from './utama';
import Beranda from '../Components/beranda';
import {Link} from 'react-router-dom';
import { Menu, Segment, Container, Grid, Header, Card, List, Divider, Image, Icon} from 'semantic-ui-react';


 class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Card fluid><img fluid src={'headerbbh.jpg'}/></Card>
          <Header centered as='h2' color='teal' textAlign='center' style={{ margin: '1em', height: 20 }}>
           
          </Header>
       
        <Menu pointing secondary> 
            <Link to="/beranda">
              
                <img src={'bbh.png'} width='80'/>
              
            </Link>
            <Link to="/tentangsaya">
              <Menu.Item
                name='About Me'
                active={activeItem === 'About Me'}
                onClick={this.handleItemClick}
              /></Link>
            <Link to="/karya">
              <Menu.Item
                name='Works'
                active={activeItem === 'Works'}
                onClick={this.handleItemClick}
              /></Link>
              <Link to="/kontak">
              <Menu.Item
                name='Contact'
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
              /></Link>
            </Menu>
        <p><Utama /></p>
      
        
    <Segment inverted vertical style={{ margin: '50em 1em 0em', padding: '5em 0em' }}>
      <Grid divided inverted stackable>
        <Grid.Column textAlign='center'>
          <Header  as='h4' content='Visit Us!!'/>
            <p>Link Down Below</p>
          <Divider inverted section /> 
          <Image centered size='mini' src='https://i.pinimg.com/236x/7a/dc/31/7adc31900f4912938c0e2c594beb0dbb.jpg' /> 
          <List horizontal inverted divided link size='small'> 
          <List.Item as='a' href='https://instagram.com/baekhyunee_exo?igshid=zsiua1ur8xam'><Icon name='instagram' />  Official Instagram </List.Item> 
          <List.Item as='a' href='https://twitter.com/B_hundred_Hyun?s=09'><Icon name='twitter square' /> Official Twitter </List.Item> 
          <List.Item as='a' href='https://youtube.com/c/baekhyun'><Icon name='youtube' /> Official Youtube </List.Item> 
          </List>
        </Grid.Column>
      </Grid>
    </Segment>
      </div>
    )
  }
}
export default MenuExampleSecondaryPointing;
