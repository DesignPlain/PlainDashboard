import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface docdb_ClusterParameterGroupParameter {
  // Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`.
  applyMethod?: string;

  // The name of the DocumentDB parameter.
  name?: string;

  // The value of the DocumentDB parameter.
  value?: string;
}

export function docdb_ClusterParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the DocumentDB parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the DocumentDB parameter.",
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
