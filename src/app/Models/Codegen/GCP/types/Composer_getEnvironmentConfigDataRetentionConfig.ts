import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig,
  Composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes,
} from "./Composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig";

export interface Composer_getEnvironmentConfigDataRetentionConfig {
  // Optional. The configuration setting for Task Logs.
  TaskLogsRetentionConfigs?: Array<Composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig>;
}

export function Composer_getEnvironmentConfigDataRetentionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TaskLogsRetentionConfigs",
      "Optional. The configuration setting for Task Logs.",
      Composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
