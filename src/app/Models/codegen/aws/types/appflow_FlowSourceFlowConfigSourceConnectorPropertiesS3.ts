import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig,
  appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig_GetTypes,
} from './appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig';

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3 {
  //
  bucketName?: string;

  //
  bucketPrefix?: string;

  // When you use Amazon S3 as the source, the configuration format that you provide the flow input data. See S3 Input Format Config for details.
  s3InputFormatConfig?: appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketPrefix',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      's3InputFormatConfig',
      'When you use Amazon S3 as the source, the configuration format that you provide the flow input data. See S3 Input Format Config for details.',
      () =>
        appflow_FlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
