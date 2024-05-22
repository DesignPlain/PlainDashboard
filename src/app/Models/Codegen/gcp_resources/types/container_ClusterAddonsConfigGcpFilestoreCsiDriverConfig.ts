import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  enabled?: boolean;
}

export function container_ClusterAddonsConfigGcpFilestoreCsiDriverConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      [],
      true,
      false,
    ),
  ];
}
