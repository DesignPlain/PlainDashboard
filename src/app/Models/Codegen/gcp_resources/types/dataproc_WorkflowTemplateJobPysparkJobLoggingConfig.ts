import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_WorkflowTemplateJobPysparkJobLoggingConfig {
  // The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
  driverLogLevels?: Map<string, string>;
}

export function dataproc_WorkflowTemplateJobPysparkJobLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "driverLogLevels",
      "The per-package log levels for the driver. This may include \"root\" package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
