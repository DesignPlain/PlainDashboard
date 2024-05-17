import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigSoftwareConfigCloudDataLineageIntegration {
  // Whether or not Cloud Data Lineage integration is enabled.
  Enabled?: boolean;
}

export function Composer_getEnvironmentConfigSoftwareConfigCloudDataLineageIntegration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not Cloud Data Lineage integration is enabled.",
      [],
      true,
      false,
    ),
  ];
}
