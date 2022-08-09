import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitConversions: true. Look at Pokedex project in `main.ts` -> `ValidationPipe()`
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
