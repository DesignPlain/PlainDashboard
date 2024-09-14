import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf {
  // The size (in MiB) of the tmpfs volume.
  size?: number;

  // The absolute file path in the container where the tmpfs volume is mounted.
  containerPath?: string;

  // The list of tmpfs volume mount options.
  mountOptions?: Array<string>;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLinuxParameterTmpf_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size (in MiB) of the tmpfs volume.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerPath",
      "The absolute file path in the container where the tmpfs volume is mounted.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "mountOptions",
      "The list of tmpfs volume mount options.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
