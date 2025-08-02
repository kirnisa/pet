import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';


@ApiTags('Purchases')
@Controller("purchase")
export class PurchaseController {
  constructor(private readonly purchaseService: PurchasesService) {}

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        id: { type: "number" },
        subscribeId: { type: "number" },
        customerId: { type: "number" },
      },
    },
  })
  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseService.create(createPurchaseDto)
  }

  @Get("all")
  findAll() {
    return this.purchaseService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.purchaseService.findById(+id)
  }

  @ApiBody({
    schema: {
      type: "object",
      properties: {
        subscribeId: { type: "number" },
        customerId: { type: "number" },
      },
    },
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseService.update(+id, updatePurchaseDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.purchaseService.delete(+id)
  }
}