import { IsNotEmpty, IsString } from "class-validator"

export class CreateRoleDto {
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  description: string
  createdDate: Date
  updatedDate: Date
}
