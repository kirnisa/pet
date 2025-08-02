import { IsNotEmpty, IsString } from "class-validator"

export class UpdateSubscribeDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  description: string;
}
