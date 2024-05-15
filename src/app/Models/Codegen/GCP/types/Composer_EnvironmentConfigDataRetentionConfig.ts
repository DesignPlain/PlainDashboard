import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig,
  Composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes,
} from "./Composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig";

export interface Composer_EnvironmentConfigDataRetentionConfig {
  // Optional. The configuration setting for Task Logs.
  TaskLogsRetentionConfigs?: Array<Composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig>;
}

export function Composer_EnvironmentConfigDataRetentionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TaskLogsRetentionConfigs",
      "Optional. The configuration setting for Task Logs.",
      Composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
