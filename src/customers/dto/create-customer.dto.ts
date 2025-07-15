import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateCustomerDto {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  @IsString()
  fio:string
  @IsNotEmpty()
  @IsDate()
  createdDate:Date
  @IsNotEmpty()
  @IsDate()
  updatedDate: Date
}
