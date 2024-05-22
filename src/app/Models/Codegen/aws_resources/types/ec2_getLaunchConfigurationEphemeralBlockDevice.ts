import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchConfigurationEphemeralBlockDevice {
  // Name of the device.
  deviceName?: string;

  // Virtual Name of the device.
  virtualName?: string;
}

export function ec2_getLaunchConfigurationEphemeralBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Name of the device.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      "Virtual Name of the device.",
      [],
      true,
      false,
    ),
  ];
}
