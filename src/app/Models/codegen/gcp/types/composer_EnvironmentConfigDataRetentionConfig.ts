import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig,
  composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes,
} from "./composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig";

export interface composer_EnvironmentConfigDataRetentionConfig {
  // Optional. The configuration setting for Task Logs.
  taskLogsRetentionConfigs?: Array<composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig>;
}

export function composer_EnvironmentConfigDataRetentionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "taskLogsRetentionConfigs",
      "Optional. The configuration setting for Task Logs.",
      () =>
        composer_EnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
