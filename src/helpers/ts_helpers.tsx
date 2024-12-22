export interface Product{
    _id: number,
    image_src: string,
    quantity : number,
    price : number,
    original_price: number,
    discount : null | number,
    discount_prize : null
    updatedAt : string,
    title : string,
    category : string,
    product_status : boolean,
    _v : number
}

export interface ProductState{
    products : Product[];
    pending : boolean,
    error : string | undefined,
    activeProduct : Product | null
} 