import {IsNotEmpty, IsString } from "class-validator"

export class CreateCustomerDto {
  @IsNotEmpty()
  id: number
  
  @IsNotEmpty()
  @IsString()
  fio:string
}
