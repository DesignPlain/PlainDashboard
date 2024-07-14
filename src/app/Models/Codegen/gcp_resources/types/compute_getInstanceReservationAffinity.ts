import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_getInstanceReservationAffinitySpecificReservation,
  compute_getInstanceReservationAffinitySpecificReservation_GetTypes,
} from "./compute_getInstanceReservationAffinitySpecificReservation";

export interface compute_getInstanceReservationAffinity {
  // The accelerator type resource exposed to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;

  // Specifies the label selector for the reservation to use.
  specificReservations?: Array<compute_getInstanceReservationAffinitySpecificReservation>;
}

export function compute_getInstanceReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource exposed to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "specificReservations",
      "Specifies the label selector for the reservation to use.",
      compute_getInstanceReservationAffinitySpecificReservation_GetTypes(),
      true,
      false,
    ),
  ];
}
