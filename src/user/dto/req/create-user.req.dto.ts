import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqDto {
  @ApiProperty({
    example: 'Ira',
    description: 'Ira description',
    required: true,
  })
  public readonly name: string;

  public readonly email: string;

  public readonly password: string;

  public readonly avatar?: string;

  public readonly age?: number;
}
