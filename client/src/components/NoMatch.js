import React from 'react';
import { Link, } from "react-router-dom";
import { Button, Header, } from 'semantic-ui-react'

const NoMatch = () => (
  <div style={StyleSheet.container}>
    <Header as='h1' style={styles.header}>Oops!</Header>
    <Header as='h1' style={styles.header}>All Snakes</Header>
    <Header as='h3'>𓆙𓆙𓆙𓆙𓆙𓆙𓆙</Header>
    <Link to='/'>
      <Button color='blue'>Home</Button>
    </Link>
  </div>
)

const styles = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginTop: '50px',
  },
  header: {
    fontSize: '50px'
  },
};

export default NoMatch;