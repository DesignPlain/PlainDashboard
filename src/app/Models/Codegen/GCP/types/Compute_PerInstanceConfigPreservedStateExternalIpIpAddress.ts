import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_PerInstanceConfigPreservedStateExternalIpIpAddress {
  // The URL of the reservation for this IP address.
  Address?: string;
}

export function Compute_PerInstanceConfigPreservedStateExternalIpIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Address",
      "The URL of the reservation for this IP address.",
      [],
      false,
      false,
    ),
  ];
}
