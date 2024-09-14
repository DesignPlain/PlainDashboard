import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dax_ClusterServerSideEncryption {
  // Whether to enable encryption at rest. Defaults to `false`.
  enabled?: boolean;
}

export function dax_ClusterServerSideEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether to enable encryption at rest. Defaults to `false`.",
      () => [],
      false,
      true,
    ),
  ];
}
