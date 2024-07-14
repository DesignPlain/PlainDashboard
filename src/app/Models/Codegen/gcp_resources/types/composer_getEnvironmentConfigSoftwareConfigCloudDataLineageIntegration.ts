import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      [],
      true,
      false,
    ),
  ];
}
