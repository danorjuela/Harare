import { ApiProperty } from '@nestjs/swagger';

export class TicketIdDto {
  @ApiProperty()
  itineraryID: number;
}
