import { IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreateRoleDto {
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
