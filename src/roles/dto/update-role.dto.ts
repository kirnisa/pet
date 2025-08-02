import { IsNotEmpty, IsString } from "class-validator"

export class UpdateRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  description: string;
}
