import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  alive(): any {
    return { msg: 'Hello World!' , data: Date.now() };
  }
}
