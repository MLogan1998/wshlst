import { React, useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';

export const Item = (props) => {
  const [ category, setCategory ] = useState("");
  const [ divider, setDivider ] = useState(false);

  useEffect(() => {
    return setCategory(props.item.category);
  }, [])

  useEffect(() => {
    return setDivider(props.divider);
  }, [])
  
  return (
    <>
      <ListItem>
          <ListItemAvatar>
            <Avatar>
              { category && (category==='Home') ? (<HouseIcon />) : (<WorkIcon />)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.item.name} secondary={`$${props.item.price}`} />
      </ListItem>
      { divider && (divider) ? (<Divider />) : '' }
    </>
  )
}
