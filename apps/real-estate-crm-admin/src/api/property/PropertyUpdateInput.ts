import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AssignmentUpdateManyWithoutPropertiesInput } from "./AssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  area?: number | null;
  assignments?: AssignmentUpdateManyWithoutPropertiesInput;
  bathrooms?: number | null;
  bedrooms?: number | null;
  price?: number | null;
};
