import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AssignmentCreateNestedManyWithoutPropertiesInput } from "./AssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  area?: number | null;
  assignments?: AssignmentCreateNestedManyWithoutPropertiesInput;
  bathrooms?: number | null;
  bedrooms?: number | null;
  price?: number | null;
};
