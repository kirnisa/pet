import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DrugsModule } from './drugs/drugs.module';
import { CustomersModule } from './customers/customers.module';
import { RolesModule } from './roles/roles.module';
import { SubscribesModule } from './subscribes/subscribes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    DrugsModule,
    CustomersModule,
    RolesModule,
    SubscribesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
