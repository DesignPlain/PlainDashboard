import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation {
  // The key for the node affinity label.
  Key?: string;

  // Corresponds to the label values of a reservation resource.
  Values?: Array<string>;
}

export function Compute_getRegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The key for the node affinity label.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "Corresponds to the label values of a reservation resource.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
