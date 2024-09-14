import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice {
  // The absolute file path in the container where the tmpfs volume is mounted.
  containerPath?: string;

  // The path for the device on the host container instance.
  hostPath?: string;

  // The explicit permissions to provide to the container for the device.
  permissions?: Array<string>;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "containerPath",
      "The absolute file path in the container where the tmpfs volume is mounted.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostPath",
      "The path for the device on the host container instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "permissions",
      "The explicit permissions to provide to the container for the device.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
