import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscribesService } from './subscribes.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Subscribes')
@Controller('subscribes')
export class SubscribesController {
  constructor(private readonly subscribesService: SubscribesService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {type: 'number'},
        name: {type: 'string'},
        description: {type: 'string'}
      }
    }
  })
  @Post()
  create(@Body() createSubscribeDto: CreateSubscribeDto) {
    return this.subscribesService.create(createSubscribeDto);
  }

  @Get('all')
  findAll() {
    return this.subscribesService.findAll();
  }

  @Get(":id")
  findById(@Param(":id") id: string) {
    return this.subscribesService.findById(+id);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {type: 'string'},
        description: {type: 'string'}
      }
    }
  })
  @Patch(":id")
  update(
    @Param(":id") id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.subscribesService.update(+id, updateSubscribeDto);
  }

  @Delete(":id")
  remove(@Param(":id") id: string) {
    return this.subscribesService.delete(+id);
  }
}
