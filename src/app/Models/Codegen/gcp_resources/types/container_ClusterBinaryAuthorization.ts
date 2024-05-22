import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterBinaryAuthorization {
  /*
Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`
and `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  evaluationMode?: string;

  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  enabled?: boolean;
}

export function container_ClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "evaluationMode",
      "Mode of operation for Binary Authorization policy evaluation. Valid values are `DISABLED`\nand `PROJECT_SINGLETON_POLICY_ENFORCE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      [],
      false,
      false,
    ),
  ];
}
