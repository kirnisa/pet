import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common"
import { RolesService } from "./roles.service"
import { CreateRoleDto } from "./dto/create-role.dto"
import { UpdateRoleDto } from "./dto/update-role.dto"
import { ApiBody, ApiTags } from "@nestjs/swagger"

@ApiTags('Roles')
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

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
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto)
  }

  @Get("all")
  findAll() {
    return this.rolesService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.rolesService.findById(+id)
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
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rolesService.delete(+id)
  }
}
