import { Document } from 'mongoose';
export declare class Wedding extends Document {
    groomName: string;
    brideName: string;
    date: Date;
}
export declare const WeddingSchema: import("mongoose").Schema<Wedding, import("mongoose").Model<Wedding, any, any, any, Document<unknown, any, Wedding> & Wedding & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Wedding, Document<unknown, {}, import("mongoose").FlatRecord<Wedding>> & import("mongoose").FlatRecord<Wedding> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
