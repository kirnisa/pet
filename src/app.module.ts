import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DrugsModule } from './drugs/drugs.module';
import { SubscrebesModule } from './subscrebes/subscrebes.module';
import { SubscribesModule } from './subscribes/subscribes.module';
import { CustomersModule } from './customers/customers.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    UsersModule,
    DrugsModule,
    SubscrebesModule,
    SubscribesModule,
    CustomersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
