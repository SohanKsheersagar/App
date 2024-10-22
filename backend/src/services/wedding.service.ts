// wedding.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wedding } from '../schemas/wedding.schema';

@Injectable()
export class WeddingService {
  constructor(@InjectModel(Wedding.name) private weddingModel: Model<Wedding>) {}

  async createWedding(groomName: string, brideName: string, date: Date): Promise<Wedding> {
    const newWedding = new this.weddingModel({ groomName, brideName, date });
    return newWedding.save();
  }

  async findAllWeddings(): Promise<Wedding[]> {
    return this.weddingModel.find().exec();
  }
}
