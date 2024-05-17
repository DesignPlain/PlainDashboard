import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolQueuedProvisioning {
  // Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.
  Enabled?: boolean;
}

export function Container_ClusterNodePoolQueuedProvisioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable Binary Authorization for this cluster. Deprecated in favor of `evaluation_mode`.",
      [],
      true,
      true,
    ),
  ];
}
