import { Module } from '@nestjs/common';
import { SubscribesService } from './subscribes.service';
import { SubscribesController } from './subscribes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribeEntity } from './entities/subscribe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubscribeEntity])],
  controllers: [SubscribesController],
  providers: [SubscribesService],
})

export class SubscribesModule {}
