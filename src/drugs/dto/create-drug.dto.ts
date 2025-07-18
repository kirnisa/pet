import { IsDate, IsNotEmpty, IsString } from "class-validator"
export class CreateDrugDto {
  @IsNotEmpty()
  id: number
  @IsString()
  @IsNotEmpty()
  name: string
  @IsString()
  @IsNotEmpty()
  description: string
  @IsNotEmpty()
  @IsDate()
  createdDate: Date
  @IsNotEmpty()
  @IsDate()
  updatedDate: Date
}
