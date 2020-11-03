import { IsString, IsUrl } from "class-validator";

export class CreateUrlDto {

  @IsString()
  slug: string;

  @IsUrl({
    protocols: ['http', 'https'],
    require_valid_protocol: true,
    require_protocol: true
  })
  target: string;
}
