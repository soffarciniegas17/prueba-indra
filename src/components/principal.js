
import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import swal from 'sweetalert';

export const Header = () => {

    const state = { color: 'white' }


    const [formcolor, setFormColor] = useState(state)


    const mostrarAlerta = (color) => {
        swal('Señor usuario el color de la pantalla ha cambiado a ' + color);
        setFormColor({ color: color });

    }


    return (<header className="App-header">
        <font className={formcolor.color == 'rojo' ? "textRed" : "textBlue"}>
            Prueba básica.
        </font>

        <Stack direction="row" spacing={2}>
            <Button onClick={() => mostrarAlerta('azul')} variant="contained" color="primary" >Texto Azul</Button>
            <Button onClick={() => mostrarAlerta('rojo')} variant="contained" color="error">Texto Rojo</Button>

        </Stack>


    </header>)
}

