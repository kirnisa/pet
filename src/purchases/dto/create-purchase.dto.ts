import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePurchaseDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    subscribeId:number;
    
    @IsNotEmpty()
    @IsNumber()
    customerId: number;
}
