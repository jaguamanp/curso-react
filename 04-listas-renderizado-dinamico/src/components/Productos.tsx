import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { Producto } from "../dto/ProductoDto";
import { Avatar, CardActions, CardMedia, IconButton, Typography } from '@mui/material';

const Productos = ( {props} : {props: Producto} ) => {
    return (
        <>
        <Box>
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                    title={props.name}>
                    
                </CardHeader>
                <CardMedia
                  component="img"
                  height="20%"
                  width="20"
                  image="/images/laptop.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography 
                    variant="body2" 
                    sx={{ color: 'text.secondary' }}
                    ></Typography>
                    {props.description}
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                  </IconButton>
                </CardActions>
            </Card>
        </Box>
        <br />
      </>
    )
    
}

export default Productos;