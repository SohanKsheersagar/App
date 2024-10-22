// wedding.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Wedding extends Document {
  @Prop({ required: true })
  groomName: string;

  @Prop({ required: true })
  brideName: string;

  @Prop()
  date: Date;
}

export const WeddingSchema = SchemaFactory.createForClass(Wedding);
