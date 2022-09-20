import { AccountCircle, NotesSharp, SearchOutlined } from '@mui/icons-material';
import {
  Box,
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { useState } from 'react';
import { ThemeContext } from '../../theme';

/* eslint-disable-next-line */
export interface MainPageLayoutProps {
  children: React.ReactNode;
  toggleTheme?: () => void;
}

export function MainPageLayout({ children, toggleTheme }: MainPageLayoutProps) {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event: any) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleMenuSelect = (menuId: string) => {
    alert(`You clicked on ${menuId}`);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <nav>
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                sx={{ mr: 2, border: 1 }}
              >
                <NotesSharp color={'primary'} fontSize="large" />
              </IconButton>
              <Typography
                variant="h4"
                noWrap
                component={'div'}
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Todo's
              </Typography>
              <TextField
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <ThemeTogglerButton />
              {auth ? (
                <div>
                  <IconButton
                    size="large"
                    color="inherit"
                    sx={{ ml: 2 }}
                    onClick={handleMenu}
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleMenuSelect('profile')}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuSelect('settings')}>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={() => setAuth(false)}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Typography
                  variant="h6"
                  sx={{ ml: 2 }}
                  noWrap
                  onClick={() => setAuth(true)}
                >
                  Login
                </Typography>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
      <main>{children}</main>
    </Box>
  );
}

const ThemeTogglerButton = () => {
  return (
    <ThemeContext.Consumer>
      {({ themeName, toggleTheme }) => (
        <FormControlLabel
          control={<Switch onChange={toggleTheme} value={themeName} />}
          label={themeName}
          sx={{ ml: 2 }}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default MainPageLayout;
