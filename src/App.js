import React from 'react';

import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import Home from './components/Home';
import Subjects from './components/Subjects';
import TimeTable from './components/TimeTable';
import {Link,Switch,Route} from 'react-router-dom';

const App = () => {
  const [visible, setVisible] = React.useState(true);

  let changeState=()=>setVisible(!visible);

  return (
    <div>
        {
          visible?
          <Button icon="close" secondary onClick={changeState}></Button>
          :
          <Button secondary onClick={changeState}>
            <Icon  name="bars"></Icon>
            Menu
          </Button>
        }

        <Sidebar.Pushable style={{height:'500px'}}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            // inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            style={{height:'500px'}}
            // width='thin'
          >
            <Menu.Item as={Link} to="/">
              <Icon name='home' />
              DashBoard
            </Menu.Item>
            <Menu.Item as={Link} to="/TimeTable">
              <Icon name='table' />
              TimeTable
            </Menu.Item>
            <Menu.Item as={Link} to="/Subjects">
              <Icon name='book' />
              Subjects
            </Menu.Item>
            <Menu.Item as={Link} to="/" >
              <Icon name='paperclip' color="red"/>
              Pending Assignments
            </Menu.Item>
            <Menu.Item as={Link} to="/">
              <Icon name='paperclip' color="green" />
              Submitted Assignments
            </Menu.Item>
            <Menu.Item as={Link} to="/Lecture-contact-info">
              <Icon name='phone' />
              Lecturers Contact Info.
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment >
              <Switch>
                <Route exact path="/" ><Home /></Route>
                <Route path="/TimeTable"><TimeTable /></Route>
                <Route path="/Subjects" ><Subjects /></Route>
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
  )
}

export default App;