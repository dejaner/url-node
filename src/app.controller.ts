import { Body, Controller, Get, NotFoundException, Param, Post, Res, UnprocessableEntityException } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateUrlDto } from './url/create.url.dto';
import { Url } from './url/url.entity';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':slug')
  async getSlug(@Param('slug') slug: string, @Res() res: Response) {
    const url: Url = await this.appService.getUrl(slug);
    
    if (!url?.target) {
      throw new NotFoundException;
    }
    
    res.redirect(url.target);
  }

  @Post()
  async createSlug(@Body() data: CreateUrlDto) {
    if (await this.appService.getUrl(data.slug)) {
      throw new UnprocessableEntityException;
    }

    await this.appService.createUrl(data);
  }
}
