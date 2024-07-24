import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { AuthEntity } from '../../database/entities/auth.entity';

@Injectable()
export class AuthRepository extends Repository<AuthEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(AuthEntity, dataSource.manager);
  }
}
