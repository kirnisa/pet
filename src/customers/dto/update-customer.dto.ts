import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCustomerDto {
  @IsNotEmpty()
  @IsString()
  fio:string;
}
