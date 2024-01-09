import axios from "axios";

export default class ProductService{
    getAll(){
        return axios.get("https://localhost:7024/api/Book/getAll")
    }
    getBook(id){
        return axios.get("https://localhost:7024/api/Book/"+ id)
    }
}