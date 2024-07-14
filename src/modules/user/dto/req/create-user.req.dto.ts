// import { ApiProperty } from '@nestjs/swagger';

import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

class CarRequestDto {
  @IsString()
  @MaxLength(255)
  producer: string;

  @IsString()
  model: string;
}

export class CreateUserReqDto {
  // @ApiProperty({
  //   example: 'Ira',
  //   description: 'Ira description',
  //   required: true,
  // })
  @IsString({ message: 'Must be string' })
  @MinLength(3, { message: 'Min 3 characters' })
  @MaxLength(30, { message: 'Max 30 characters' })
  @Transform(TransformHelper.trim)
  public readonly name: string;

  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: 'Invalid email',
  })
  public readonly email: string;

  @IsString()
  @Transform(TransformHelper.trim)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    // message: 'Invalid password',
  })
  public readonly password: string;

  @IsOptional()
  @IsString()
  @Transform(TransformHelper.trim)
  @ValidateIf((object) => object.age > 25) //якщо вік більший 25 ми валідуємо аватар
  @MaxLength(45)
  public readonly avatar?: string;

  @IsInt()
  @IsOptional()
  @IsNumber()
  @Min(18)
  @Max(100)
  @Type(() => Number) //пройде навіть якщо вік запишемо стрічкою... спрацьовує найперше
  public readonly age?: number;

  @IsOptional()
  @IsObject()
  // @Transform(TransformHelper.trim)
  @Type(() => CarRequestDto)
  @ValidateNested() //означає що ми валідуємо обєкт
  car: CarRequestDto;
}
