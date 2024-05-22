import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkmanager_getDeviceLocation {
  // Physical address.
  address?: string;

  // Latitude.
  latitude?: string;

  // Longitude.
  longitude?: string;
}

export function networkmanager_getDeviceLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "Physical address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latitude",
      "Latitude.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "longitude",
      "Longitude.",
      [],
      true,
      false,
    ),
  ];
}
