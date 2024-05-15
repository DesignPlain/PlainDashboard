import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsNodePoolUpdateSettingsSurgeSettings {
  // Optional. The maximum number of nodes that can be created beyond the current size of the node pool during the update process.
  MaxSurge?: number;

  // Optional. The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.
  MaxUnavailable?: number;
}

export function Container_AwsNodePoolUpdateSettingsSurgeSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxSurge",
      "Optional. The maximum number of nodes that can be created beyond the current size of the node pool during the update process.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUnavailable",
      "Optional. The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.",
      [],
      false,
      false,
    ),
  ];
}
