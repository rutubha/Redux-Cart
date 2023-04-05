import React, { useEffect } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/actions";
import { getProducts, searchProducts } from '../redux/actions/productAction';



const Main = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    }
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <Box m={4} px={2}>
                <TextField label='search' variant='standard' onChange={(e) => dispatch(searchProducts(e.target.value))}/>
            </Box>
            <Stack px={2} direction='row' flexWrap='wrap' justifyContent='center'>
                {
                    products?.map(product => (
                        <Card sx={{ width: '250px', margin: "10px", bgcolor: '#d4faea' }} key={product.id}>
                            <CardMedia component="img" sx={{width: 250, height: 250}} image={product.thumbnail} alt={product.title} />
                            <CardContent>
                                <Typography variant='h6' sx={{overflowWrap: 'revert'}}>{product.title}</Typography>
                                <Typography variant='body1'>{product.category}</Typography>
                                <Typography variant='body1'>{product.brand}</Typography>
                                <Typography variant='h6'>INR {product.price}</Typography>
                            </CardContent>
                            <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                                <Button size='small' variant='outlined' color='info' onClick={() => addToCartHandler(product)}>ADD TO CART</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Stack>
        </>
    )
}

export default Main