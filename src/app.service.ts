import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    const configValue = this.configService.get(`environment`);
    console.log(`getting value from config: ${configValue}`);
    return 'Hello World!';
  }
}
