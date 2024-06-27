import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";

export type Agent = {
  appointments?: Array<Appointment>;
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
