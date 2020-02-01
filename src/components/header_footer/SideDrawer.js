import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) =>{
    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                {props.drawerItems.map((item,i)=>
                    <ListItem key={i} button onClick={()=>console.log(item.name)}>
                        {item.name}
                    </ListItem>
                )}
            </List>
        </Drawer>
    )
}

export default SideDrawer;