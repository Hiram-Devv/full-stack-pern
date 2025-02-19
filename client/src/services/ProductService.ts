import { DraftProductSchema} from '../types'
import axios from 'axios'
import {safeParse} from 'valibot'


type ProductData = {
    [k: string]: FormDataEntryValue;
}

export async function addProduct(data : ProductData){
    try{ //si solo se pasa data, marca error, se necesita convertir a numero con el +data.price
        const result = safeParse(DraftProductSchema, {
            name: data.name, 
            price: +data.price
        })
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            const { data } = await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        } else {
            throw new Error('Datos no validos')
        }
    } catch(error){
        console.log(error)
    }
}