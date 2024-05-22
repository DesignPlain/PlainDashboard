import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_DeviceDevice {
  // A description for the device.
  description?: string;

  // The name of the device.
  deviceName?: string;

  // Amazon Web Services Internet of Things (IoT) object name.
  iotThingName?: string;
}

export function sagemaker_DeviceDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description for the device.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deviceName",
      "The name of the device.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "iotThingName",
      "Amazon Web Services Internet of Things (IoT) object name.",
      [],
      false,
      false,
    ),
  ];
}
