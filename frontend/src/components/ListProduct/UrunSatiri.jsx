import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import { EditProductForm } from './EditProductForm';
import { deleteProduct } from '../../api/ProductApi';
import { useQuery, useQueryClient } from 'react-query'

export const UrunSatiri = ({ name, description, category, price, productId }) => {
    console.log("Urun Satirindayim::::::", productId)
    const [editOpen, setEditOpen] = useState(false);
    const queryClient = useQueryClient();

    const handleEditOpen = () => {
        setEditOpen(true)
    }
    const handleEditClose = () => {
        setEditOpen(false)
    }


    const popconConfirm = (e) => {
        message.success('Ürün başarıyla silindi')
    }

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId)
            queryClient.invalidateQueries(['products']);
            message.success("Ürün başarıyla silindi")
        } catch (error) {
            console.error("Ürün silinirken hata oluştu", error)
            message.error("Ürün silinirken bir hata oluştu")
        }

    }

    return (


        <TableRow
            key={name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell>{description}</TableCell>
            <TableCell >{category}</TableCell>
            <TableCell >{price}</TableCell>
            <TableCell>
                <IconButton onClick={handleEditOpen}>
                    <EditIcon />
                </IconButton>
                <EditProductForm
                    open={editOpen}
                    onClose={handleEditClose}
                    productId={productId}
                    name={name}
                    description={description}
                    category={category}
                    price={price}
                />
            </TableCell>


            {/* delete butonu */}
            <TableCell >
                <Popconfirm
                    title="Ürünü sil"
                    description="Ürünü silmek istediğinden emin misin?"
                    onConfirm={() => handleDelete(productId)}
                    okText="Evet"
                    cancelText="Hayır"
                    icon={
                        <QuestionCircleOutlined
                            style={{
                                color: 'red',
                            }}
                        />
                    }
                    okButtonProps={{
                        style: {
                            backgroundColor: '#22c55e',
                            color: 'white',
                        },
                    }}
                >
                    <IconButton><DeleteIcon /></IconButton>
                </Popconfirm>

            </TableCell>
        </TableRow>

    )
}
