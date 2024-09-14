import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_DeviceAwsLocation {
  // The Amazon Resource Name (ARN) of the subnet that the device is located in.
  subnetArn?: string;

  // The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.
  zone?: string;
}

export function networkmanager_DeviceAwsLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subnetArn",
      "The Amazon Resource Name (ARN) of the subnet that the device is located in.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.",
      () => [],
      false,
      false,
    ),
  ];
}
