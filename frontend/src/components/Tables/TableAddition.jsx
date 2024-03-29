import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const TableAddition = () => {
    return (
        <div className=''>

            <h3 className='text-2xl mb-10 '>Masa ekle</h3>
            <div className='grid grid-rows-2 '>
                <TextField
                    required
                    id="outlined-required"
                    label="Masa Adı"
                    placeholder="İlber Ortaylı"
                    sx={{ width: '30vw' }}
                />
                <Button sx={{
                    marginTop: 5,
                    background: "green",
                    '&:hover': {
                        background: "darkgreen", 
                    },
                    width:150
                }} variant="contained">Yeni Ürün</Button>
            </div>

        </div>
    )
}
