import React from "react"
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";
import {productRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


const ProductList = () => {
    const [data,setData] = useState(productRows);
    const handDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) =>{
            return (
                <div className='productListItem'>
                    <img className="productListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },       
        { field: 'status', headerName: 'Status', width: 120,},
        { field: 'price', headerName: 'Price', width: 160, },
        { field: 'action', headerName: 'Action', width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/product/"+params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={()=>handDelete(params.row.id)}/>
                    </>     
                );
            },
        },        
      ];
    return (
    <div className="productList">
        <DataGrid 
        rows={data}  
        columns={columns} 
        pageSize={8}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick 
        checkboxSelection/>
    </div>
  )
}

export default ProductList