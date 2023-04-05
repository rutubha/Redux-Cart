import { Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/actions/actions';

const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.items);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const emptyCartHandler = () => {
        dispatch(emptyCart());
    }

    return (
        <Paper>
            <Stack><Link to="/">Go to Home</Link></Stack>
            <Button sx={{ margin: '5px' }} variant="contained" color="error" onClick={emptyCartHandler}>Empty cart</Button>
            <Stack>
                {
                    items?.map(item => (
                        <Stack m={2} direction='row' key={item.id} justifyContent='space-around'>
                            <Typography variant='h6'>{item.title}</Typography>
                            <Button onClick={() => removeFromCartHandler(item.id)} variant='contained' color='error'>REMOVE FROM CART</Button>
                        </Stack>
                    ))
                }
            </Stack>
        </Paper>
    )
}

export default Cart