import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common"
import { DrugsService } from "./drugs.service"
import { CreateDrugDto } from "./dto/create-drug.dto"
import { UpdateDrugDto } from "./dto/update-drug.dto"
import { ApiBody, ApiTags } from "@nestjs/swagger"

@ApiTags('Drugs')
@Controller("drugs")
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        description: { type: "string" },
      },
    },
  })
  @Post()
  create(@Body() createDrugDto: CreateDrugDto) {
    return this.drugsService.create(createDrugDto)
  }

  @Get("all")
  findAll() {
    return this.drugsService.findAll()
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    return this.drugsService.findById(+id)
  }
  
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
    },
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDrugDto: UpdateDrugDto) {
    return this.drugsService.update(+id, updateDrugDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.drugsService.delete(+id)
  }
}
