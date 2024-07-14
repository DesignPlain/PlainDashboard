import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig_GetTypes,
} from "./appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig";

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3 {
  // Name of the Amazon S3 bucket.
  bucketName?: string;

  // Amazon S3 bucket prefix.
  bucketPrefix?: string;

  // When you use Amazon S3 as the source, the configuration format that you provide the flow input data. See S3 Input Format Config for details.
  s3InputFormatConfig?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of the Amazon S3 bucket.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "Amazon S3 bucket prefix.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3InputFormatConfig",
      "When you use Amazon S3 as the source, the configuration format that you provide the flow input data. See S3 Input Format Config for details.",
      appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
