import { Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
  ) {}
  getHello(): string {
    this.logger.log('Hello World!', 'AppService');
    const configValue = this.configService.get(`environment`);
    console.log(`getting value from config: ${configValue}`);
    return 'Hello World!';
  }
}
