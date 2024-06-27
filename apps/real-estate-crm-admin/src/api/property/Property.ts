import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  area: number | null;
  assignments?: Array<Assignment>;
  bathrooms: number | null;
  bedrooms: number | null;
  createdAt: Date;
  id: string;
  price: number | null;
  updatedAt: Date;
};
