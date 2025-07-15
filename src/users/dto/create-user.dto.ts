import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  @IsString()
  fio: string
  @IsString()
  role: string
  @IsNotEmpty()
  createdDate: Date
  @IsNotEmpty()
  updatedDate: Date
}
