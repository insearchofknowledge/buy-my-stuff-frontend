import { ProducerDto } from "./producer-dto";
import { ProductDto } from "./product-dto";
import { User } from "./user";

export class OrderLine {
    id: number;
    quantity: number;
    productPrice: number;
    totalPrice: number;
    productDto: ProductDto;
    productType: number;
    appUserDto: User; 

}