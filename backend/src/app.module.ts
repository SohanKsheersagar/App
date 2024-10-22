// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Wedding, WeddingSchema } from './schemas/wedding.schema';
import { WeddingService } from './services/wedding.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        const uri = 'mongodb://localhost:27017/wedding';
        try {
          await MongooseModule.forRoot(uri);
          console.log('Successfully connected to MongoDB!');
        } catch (err) {
          console.error('Error connecting to MongoDB:', err);
        }
        return { uri };
      },
    }),
    MongooseModule.forFeature([{ name: Wedding.name, schema: WeddingSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService,WeddingService],
})
export class AppModule {}