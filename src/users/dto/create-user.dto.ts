import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  @IsString()
  fio: string
  @IsString()
  role: string
  @IsNotEmpty()
  @IsDate()
  createdDate: Date
  @IsNotEmpty()
  @IsDate()
  updatedDate: Date
}
