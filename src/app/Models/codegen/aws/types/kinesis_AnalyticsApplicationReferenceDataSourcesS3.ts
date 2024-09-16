import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_AnalyticsApplicationReferenceDataSourcesS3 {
  // The S3 Bucket ARN.
  bucketArn?: string;

  // The File Key name containing reference data.
  fileKey?: string;

  // The IAM Role ARN to read the data.
  roleArn?: string;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketArn',
      'The S3 Bucket ARN.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileKey',
      'The File Key name containing reference data.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The IAM Role ARN to read the data.',
      () => [],
      true,
      false,
    ),
  ];
}
