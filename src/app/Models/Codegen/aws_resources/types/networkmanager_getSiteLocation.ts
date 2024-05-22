import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkmanager_getSiteLocation {
  // Longitude of the location.
  longitude?: string;

  // Address of the location.
  address?: string;

  // Latitude of the location.
  latitude?: string;
}

export function networkmanager_getSiteLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "longitude",
      "Longitude of the location.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "Address of the location.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latitude",
      "Latitude of the location.",
      [],
      true,
      false,
    ),
  ];
}
