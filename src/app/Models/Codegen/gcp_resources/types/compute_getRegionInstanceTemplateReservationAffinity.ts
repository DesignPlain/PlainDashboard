import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getRegionInstanceTemplateReservationAffinitySpecificReservation,
  compute_getRegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./compute_getRegionInstanceTemplateReservationAffinitySpecificReservation";

export interface compute_getRegionInstanceTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  specificReservations?: Array<compute_getRegionInstanceTemplateReservationAffinitySpecificReservation>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  type?: string;
}

export function compute_getRegionInstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "specificReservations",
      "Specifies the label selector for the reservation to use.",
      compute_getRegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      false,
    ),
  ];
}
