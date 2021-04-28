import { AddressInterface } from "./AddressInterface";
import { CustomerDto } from "./CustomerInterface";
import { LocationDto } from "./LocationInterface";
import { OrderDetailsDto } from "./OrderDetailsInterface";

export interface OrderDtoInterface {
  id: number | null;
  locationDto: LocationDto | null;
  customerDto: CustomerDto;
  createdAt: null | Date;
  address: AddressInterface;
  detailsDtos: OrderDetailsDto[] | null;
}
