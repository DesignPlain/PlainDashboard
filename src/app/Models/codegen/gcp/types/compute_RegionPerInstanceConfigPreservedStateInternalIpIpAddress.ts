import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_RegionPerInstanceConfigPreservedStateInternalIpIpAddress {
  // The URL of the reservation for this IP address.
  address?: string;
}

export function compute_RegionPerInstanceConfigPreservedStateInternalIpIpAddress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The URL of the reservation for this IP address.",
      () => [],
      false,
      false,
    ),
  ];
}
