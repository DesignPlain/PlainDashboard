import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost {
  // The path on the host container instance that's presented to the container.
  sourcePath?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerVolumeHost_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourcePath",
      "The path on the host container instance that's presented to the container.",
      () => [],
      true,
      false,
    ),
  ];
}
