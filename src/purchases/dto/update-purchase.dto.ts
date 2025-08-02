import { IsNotEmpty, IsNumber} from "class-validator"

export class UpdatePurchaseDto {
  @IsNumber()
  @IsNotEmpty()
  subscribeId: number;

  @IsNumber()
  @IsNotEmpty()
  customerId: number;
}

