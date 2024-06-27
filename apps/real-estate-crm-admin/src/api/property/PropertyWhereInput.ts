import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  area?: IntNullableFilter;
  assignments?: AssignmentListRelationFilter;
  bathrooms?: IntNullableFilter;
  bedrooms?: IntNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
