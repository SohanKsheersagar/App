// app.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { WeddingService } from './services/wedding.service';

@Controller('weddings')
export class AppController {
  constructor(private readonly weddingService: WeddingService) {}

  // Route to add a wedding
  @Post()
  async createWedding(
    @Body('groomName') groomName: string,
    @Body('brideName') brideName: string,
    @Body('date') date: Date
  ) {
    return this.weddingService.createWedding(groomName, brideName, date);
  }

  // Route to get all weddings
  @Get()
  async getAllWeddings() {
    return this.weddingService.findAllWeddings();
  }
}
