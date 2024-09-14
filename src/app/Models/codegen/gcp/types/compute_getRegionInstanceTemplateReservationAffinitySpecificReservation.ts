import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getRegionInstanceTemplateReservationAffinitySpecificReservation {
  // The key for the node affinity label.
  key?: string;

  // Corresponds to the label values of a reservation resource.
  values?: Array<string>;
}

export function compute_getRegionInstanceTemplateReservationAffinitySpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key for the node affinity label.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Corresponds to the label values of a reservation resource.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
