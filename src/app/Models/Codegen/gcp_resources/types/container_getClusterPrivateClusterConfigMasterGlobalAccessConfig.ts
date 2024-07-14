import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterPrivateClusterConfigMasterGlobalAccessConfig {
  // Whether the cluster master is accessible globally or not.
  enabled?: boolean;
}

export function container_getClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether the cluster master is accessible globally or not.",
      [],
      true,
      false,
    ),
  ];
}
