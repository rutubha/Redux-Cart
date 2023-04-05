import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const { items } = useSelector(state => state.items)
    return (
        <AppBar position='static'>
            <Toolbar>
                <Box flexGrow={1} display='flex'>
                    <Typography variant='h3'>Cart</Typography>
                </Box>
                <Box>
                    <Link to="/cart">
                        <Typography  variant='body1'>Items({items?.length})</Typography>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header