import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResDto {
  public readonly id: string;

  @ApiProperty({
    example: 'Ira',
    description: 'Ira description',
  })
  public readonly name: string;

  public readonly email: string;

  public readonly avatar?: string;

  public readonly age?: number;
}
