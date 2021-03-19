import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { S3Service } from './s3/s3.service';
// import { S3Module } from './s3/s3.module';

@Module({
  providers: [S3Service]
  // imports: [
  //   S3Module
  // ]
})
export class AwsModule {}
