import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface neptune_ClusterParameterGroupParameter {
  // The name of the neptune parameter.
  name?: string;

  // The value of the neptune parameter.
  value?: string;

  // Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`.
  applyMethod?: string;
}

export function neptune_ClusterParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the neptune parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the neptune parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applyMethod",
      "Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`.",
      () => [],
      false,
      false,
    ),
  ];
}
