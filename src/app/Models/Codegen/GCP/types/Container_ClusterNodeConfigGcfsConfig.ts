import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodeConfigGcfsConfig {
  // Whether or not the Google Container Filesystem (GCFS) is enabled
  Enabled?: boolean;
}

export function Container_ClusterNodeConfigGcfsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not the Google Container Filesystem (GCFS) is enabled",
      [],
      true,
      true,
    ),
  ];
}
