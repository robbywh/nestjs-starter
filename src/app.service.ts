import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: LoggerService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}
  getHello(): string {
    this.logger.log('Hello World!', 'AppService');
    const configValue = this.configService.get(`environment`);
    console.log(`getting value from config: ${configValue}`);
    return 'Hello World!';
  }
}
