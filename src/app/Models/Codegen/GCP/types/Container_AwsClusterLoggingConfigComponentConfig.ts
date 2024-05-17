import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterLoggingConfigComponentConfig {
  // Components of the logging configuration to be enabled.
  EnableComponents?: Array<string>;
}

export function Container_AwsClusterLoggingConfigComponentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EnableComponents",
      "Components of the logging configuration to be enabled.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
