import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  fio: string
  @IsString()
  @IsOptional()
  role: string
}
