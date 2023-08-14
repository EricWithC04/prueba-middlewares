import { checkSchema } from 'express-validator';

export const createAlbaricoqueSchema = checkSchema({
  description: {
    isLength: {
      options: { min: 36, max: 300 },
      errorMessage: 'La descripcion de tu Albaricoque debe tener por lo menos 36 caracteres y como máximo 300.'
    }
  }
});