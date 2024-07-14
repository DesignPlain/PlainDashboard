import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig,
  composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes,
} from "./composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig";

export interface composer_getEnvironmentConfigDataRetentionConfig {
  // Optional. The configuration setting for Task Logs.
  taskLogsRetentionConfigs?: Array<composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig>;
}

export function composer_getEnvironmentConfigDataRetentionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "taskLogsRetentionConfigs",
      "Optional. The configuration setting for Task Logs.",
      composer_getEnvironmentConfigDataRetentionConfigTaskLogsRetentionConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
