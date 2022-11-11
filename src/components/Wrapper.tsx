import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';
import { AddressBook, CalendarCheck, Chats, ChatText, Handshake, SquaresFour, Wallet } from 'phosphor-react';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode | React.ReactNode []
}
export default function Wrapper(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const drawer = (
    <div>
      <Toolbar/>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SquaresFour size={32} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
      <Typography sx={{paddingLeft: 2, paddingTop: 2}} fontSize="small" color="#797979"> Requests </Typography>
      <Divider/>
      <List>
        {[{ title: 'Prayers', icon: <Handshake size={32} /> }, {title: 'Counseling', icon: <Chats size={32} />}].map((item, index) => (
          <ListItem key={item.title}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography sx={{paddingLeft: 2, paddingTop: 2}} fontSize="small" color="#797979"> Management </Typography>
      <Divider />
      <List>
        {[{ title: 'Event', icon: <CalendarCheck size={32} /> }, 
        { title: 'Finance', icon: <Wallet size={32} />},
        { title: 'Messages', icon: <ChatText size={32} />},
        { title: 'Members', icon: <AddressBook size={32} /> }].map((item, index) => (
          <ListItem key={item.title}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        {props.children}
    </Box>
  )
}
