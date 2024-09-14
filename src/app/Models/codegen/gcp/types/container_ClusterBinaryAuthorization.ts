import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterBinaryAuthorization {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  enabled?: boolean;

  /*
Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`
and `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  evaluationMode?: string;
}

export function container_ClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "evaluationMode",
      "Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`\nand `PROJECT_SINGLETON_POLICY_ENFORCE`.",
      () => [],
      false,
      false,
    ),
  ];
}
