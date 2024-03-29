'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { styled, useTheme, Theme, CSSObject, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Autocomplete from '@mui/material/Autocomplete';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const options = [
  {label:'System1', href: '/system/system1'}, 
  {label:'System2', href: '/system/system2'}
];

function UseAutocomplete() {
  return (
    <Autocomplete
      sx={{
        display: 'inline-block',
        '& input': {
          width: 200,
          bgcolor: 'background.paper',
        },
      }}
      id="custom-input-demo"
      options={options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input type="text" {...params.inputProps} />
        </div>
      )}
    />
  );
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${64}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const dashboardMenuList = (open: boolean, router:AppRouterInstance, path: String) => {
  return (
    <List>
      <ListItem key={1} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => {router.push('/dashboard/dashboard1')}}
          selected={path === "dashboard1" ? true : false}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText 
            primary={"dashboard1"} 
            sx={{ opacity: open ? 1 : 0 }} 
          />
        </ListItemButton>
      </ListItem>
      <ListItem key={2} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => {router.push('/dashboard/dashboard2')}}
          selected={path === "dashboard2" ? true : false}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText 
            primary={"dashboard2"} 
            sx={{ opacity: open ? 1 : 0 }} 
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

const systemMenuList = (open: boolean, router:AppRouterInstance, path: String) => {
  return (
    <List>
      <ListItem key={1} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => {router.push('/system/system1')}}
          selected={path === "system1" ? true : false}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <SettingsSuggestIcon />
          </ListItemIcon>
          <ListItemText 
            primary={"system1"} 
            sx={{ opacity: open ? 1 : 0 }}  
          />
        </ListItemButton>
      </ListItem>
      <ListItem key={2} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
          onClick={() => {router.push('/system/system2')}}
          selected={path === "system2" ? true : false}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <SettingsSuggestIcon />
          </ListItemIcon>
          <ListItemText 
            primary={"system2"} 
            sx={{ opacity: open ? 1 : 0 }} 
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MiniDrawer = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5
              }}
            >
              <MenuIcon />
            </IconButton>
            <Button
                key={1}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => router.push('/dashboard/dashboard1')}
                variant="outlined"
                color={pathname.split("/")[1] === "dashboard" ? "secondary" : "primary"}
              >
                DashBoard
            </Button>
            <Button
                key={2}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => router.push('/system/system1')}
                variant="outlined"
                color={pathname.split("/")[1] === "system" ? "secondary" : "primary"}
              >
                System
            </Button>
          </Box>

          <Box 
            display="flex"
            alignItems="center"
            sx={{ flexGrow: 0 }}>
            <Search>
              {UseAutocomplete()}
            </Search>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
              sx={{ mr: 2 }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              onClose={handleClose}
              anchorEl={anchorEl}
              open={menuOpen}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>LogOut</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          TryLab
        </DrawerHeader>
        {pathname.split("/")[1] === "dashboard" ? dashboardMenuList(open, router, pathname.split("/")[2]) : systemMenuList(open, router, pathname.split("/")[2])}
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export { MiniDrawer };