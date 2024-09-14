import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_AmiCopyEphemeralBlockDevice {
  // Path at which the device is exposed to created instances.
  deviceName?: string;

  /*
Name for the ephemeral device, of the form "ephemeralN" where
-N- is a volume number starting from zero.
*/
  virtualName?: string;
}

export function ec2_AmiCopyEphemeralBlockDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "Path at which the device is exposed to created instances.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "virtualName",
      'Name for the ephemeral device, of the form "ephemeralN" where\n*N* is a volume number starting from zero.',
      () => [],
      false,
      false,
    ),
  ];
}
