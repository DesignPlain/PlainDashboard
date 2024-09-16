import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_AnalyticsApplicationOutputKinesisFirehose {
  // The ARN of the Kinesis Firehose delivery stream.
  resourceArn?: string;

  // The ARN of the IAM Role used to access the stream.
  roleArn?: string;
}

export function kinesis_AnalyticsApplicationOutputKinesisFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'resourceArn',
      'The ARN of the Kinesis Firehose delivery stream.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      'The ARN of the IAM Role used to access the stream.',
      () => [],
      true,
      false,
    ),
  ];
}
