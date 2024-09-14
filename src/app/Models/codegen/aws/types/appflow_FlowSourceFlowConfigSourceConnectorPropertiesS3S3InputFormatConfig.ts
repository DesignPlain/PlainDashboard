import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig {
  // File type that Amazon AppFlow gets from your Amazon S3 bucket. Valid values are `CSV` and `JSON`.
  s3InputFileType?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3InputFileType",
      "File type that Amazon AppFlow gets from your Amazon S3 bucket. Valid values are `CSV` and `JSON`.",
      () => [],
      false,
      false,
    ),
  ];
}
