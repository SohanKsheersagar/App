import { Model } from 'mongoose';
import { Wedding } from '../schemas/wedding.schema';
export declare class WeddingService {
    private weddingModel;
    constructor(weddingModel: Model<Wedding>);
    createWedding(groomName: string, brideName: string, date: Date): Promise<Wedding>;
    findAllWeddings(): Promise<Wedding[]>;
}
