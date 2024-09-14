import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_getEnvironmentConfigSoftwareConfigCloudDataLineageIntegration {
  // Whether or not Cloud Data Lineage integration is enabled.
  enabled?: boolean;
}

export function composer_getEnvironmentConfigSoftwareConfigCloudDataLineageIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not Cloud Data Lineage integration is enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
