import { IsNotEmpty, IsString } from "class-validator"

export class UpdateDrugDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;
}
