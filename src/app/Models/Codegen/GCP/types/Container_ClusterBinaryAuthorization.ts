import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterBinaryAuthorization {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  Enabled?: boolean;

  /*
Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`
and `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  EvaluationMode?: string;
}

export function Container_ClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EvaluationMode",
      "Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`\nand `PROJECT_SINGLETON_POLICY_ENFORCE`.",
      [],
      false,
      false,
    ),
  ];
}
