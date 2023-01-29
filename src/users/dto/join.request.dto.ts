import { ApiProperty } from '@nestjs/swagger';

export class JoginRequestDto {
  @ApiProperty({
    example: 'heewon@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '희원짱',
    description: '별명',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: '********',
    description: '패스워드',
    required: true,
  })
  public password: string;
}
