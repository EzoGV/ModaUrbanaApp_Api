import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema({ timestamps: true })
export class Producto {
  @Prop({ required: true })
  nombre: string;

  @Prop({
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    required: false,
  })
  talla?: string;

  @Prop()
  material?: string;

  @Prop()
  estilo?: string;        // Streetwear, Casual, Skater, etc.

  @Prop()
  descripcion?: string;

  @Prop({ type: Types.ObjectId, ref: 'Categoria' })
  categoria?: Types.ObjectId;

  @Prop({ default: false })
  tendencia?: boolean;    // Para "Productos en tendencia"

  @Prop()
  color?: string;

  @Prop({ min: 0 })
  precio: number;

  @Prop()
  imagen?: string;

  @Prop()
  imagenThumbnail?: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);

ProductoSchema.index({ categoria: 1 });
ProductoSchema.index({ talla: 1 });
ProductoSchema.index({ nombre: 'text' });
