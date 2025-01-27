import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./countSlice"
import usersReducer from "./user/userSlice"
import categoryReducer from "./category/categorySlice"
import productReducer from "./products/productSlice"
import WishReduser from "./Wish/WishSlice"
import basketReducer from "./basket/basketSlice"

const myStore = configureStore({
    reducer : {
        check: CountReducer,
        list: usersReducer,
        categoryList: categoryReducer,
        products: productReducer,
        wishlist: WishReduser,
        cartList: basketReducer
    }
})

export default myStore