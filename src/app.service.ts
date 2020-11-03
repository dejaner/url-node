import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './url/create.url.dto';
import { Url } from './url/url.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUrl(slug: string): Promise<Url> {
    return this.urlRepository.findOne(slug);
  }

  async createUrl(urlData: CreateUrlDto) {
    const url: Url = this.urlRepository.create(urlData);
    
    await this.urlRepository.insert(url);
  }
}
