import { Box, Button } from '@material-ui/core';
import React from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap'

export default function DashBoard() {
  // const classes = useStyles();
  return (
    <DropdownButton
      variant="outline-secondary"
      title="Today"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
      <Dropdown.Divider/>
    </DropdownButton>
    
    )
}
