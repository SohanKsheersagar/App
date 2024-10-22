import { WeddingService } from './services/wedding.service';
export declare class AppController {
    private readonly weddingService;
    constructor(weddingService: WeddingService);
    createWedding(groomName: string, brideName: string, date: Date): Promise<import("./schemas/wedding.schema").Wedding>;
    getAllWeddings(): Promise<import("./schemas/wedding.schema").Wedding[]>;
}
