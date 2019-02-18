import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';


import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';

@Module({
  imports: [
    MorganModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, {provide: APP_INTERCEPTOR, useClass: MorganInterceptor('combined')}], 
})
export class AppModule {}
