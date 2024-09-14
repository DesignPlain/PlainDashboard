import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_InfrastructureConfigurationLoggingS3Logs,
  imagebuilder_InfrastructureConfigurationLoggingS3Logs_GetTypes,
} from "./imagebuilder_InfrastructureConfigurationLoggingS3Logs";

export interface imagebuilder_InfrastructureConfigurationLogging {
  // Configuration block with S3 logging settings. Detailed below.
  s3Logs?: imagebuilder_InfrastructureConfigurationLoggingS3Logs;
}

export function imagebuilder_InfrastructureConfigurationLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Logs",
      "Configuration block with S3 logging settings. Detailed below.",
      () => imagebuilder_InfrastructureConfigurationLoggingS3Logs_GetTypes(),
      true,
      false,
    ),
  ];
}
