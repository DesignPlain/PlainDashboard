import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceReservationAffinitySpecificReservation {
  // Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.
  Key?: string;

  // Corresponds to the label values of a reservation resource.
  Values?: Array<string>;
}

export function Compute_InstanceReservationAffinitySpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "Corresponds to the label values of a reservation resource.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
