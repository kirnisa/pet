import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateSubscribeDto {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  description: string
  @IsNotEmpty()
  @IsDate()
  createdDate: Date
  @IsNotEmpty()
  @IsDate()
  updatedDate: Date
}
