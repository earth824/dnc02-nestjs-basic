import { Logger } from '@nestjs/common';
import z from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().int().max(65535).positive(),
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.coerce.number().int().positive(),
});

export function validate(config: Record<string, any>) {
  const parsed = envSchema.safeParse(config);
  if (!parsed.success) {
    const logger = new Logger('EnvValidation');
    logger.error(
      'Environment validation failed',
      z.prettifyError(parsed.error),
    );
    throw new Error('Environment validation failed');
  }
  return parsed.data;
}

export type EnvVariable = z.infer<typeof envSchema>;
