import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getInstanceTemplateReservationAffinitySpecificReservation {
  // The key for the node affinity label.
  key?: string;

  // Corresponds to the label values of a reservation resource.
  values?: Array<string>;
}

export function compute_getInstanceTemplateReservationAffinitySpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Corresponds to the label values of a reservation resource.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key for the node affinity label.",
      [],
      true,
      false,
    ),
  ];
}
