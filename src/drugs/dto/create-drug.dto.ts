import { IsNotEmpty, IsString } from "class-validator"
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
  createdDate: Date
  @IsNotEmpty()
  updatedDate: Date
}
