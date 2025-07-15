import { IsNotEmpty } from "class-validator"

export class UpdateDrugDto {
  @IsNotEmpty()
  @IsNotEmpty()
  name: string
  @IsNotEmpty()
  description: string
}
