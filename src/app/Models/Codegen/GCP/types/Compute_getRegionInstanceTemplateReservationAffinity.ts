import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation,
  Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes,
} from "./Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation";

export interface Compute_getRegionInstanceTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservations?: Array<Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}

export function Compute_getRegionInstanceTemplateReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SpecificReservations",
      "Specifies the label selector for the reservation to use.",
      Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.",
      [],
      true,
      false,
    ),
  ];
}
