import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //1

    //2
    return 'Hi World 2222';
  }
}
