import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from "../store/actions/cartActions"
import { toast } from 'react-toastify'

const useCart = () => {

    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.name} Sepete Eklendi!`)
    }

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
        toast.success(`${product.name} Sepetten Çıkarıldı!`)
    }

    return { handleAddToCart, handleRemoveFromCart };
    
};

export default useCart;