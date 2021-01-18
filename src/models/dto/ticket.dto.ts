import { ApiProperty } from '@nestjs/swagger';

export class TicketDto {
  @ApiProperty()
  DepartureDate: Date;
  @ApiProperty()
  ArrivalDate: Date;
  @ApiProperty()
  DepartureCity: string;
  @ApiProperty()
  ArrivalCity: string;
  @ApiProperty()
  PassagerName: string;
  @ApiProperty()
  HaveHoldLuggage: boolean;
  @ApiProperty()
  Price: number;
}
