import { IsDateString, IsString, IsInt, Min, Max } from "class-validator";

export class Order {
  id?: string;
  customerName!: string;

  @IsString()
  flavor!: string;

  @IsInt()
  @Min(1)
  @Max(100)
  quantity!: number;

  @IsDateString()
  pickupDate!: string; 
  
  ingredients?: string[];
}