import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkmanager_DeviceLocation {
  // The physical address.
  address?: string;

  // The latitude.
  latitude?: string;

  // The longitude.
  longitude?: string;
}

export function networkmanager_DeviceLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The physical address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latitude",
      "The latitude.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "longitude",
      "The longitude.",
      [],
      false,
      false,
    ),
  ];
}
