import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ses_ReceiptRuleS3Action {
  // The name of the S3 bucket
  bucketName?: string;

  // The ARN of the KMS key
  kmsKeyArn?: string;

  // The key prefix of the S3 bucket
  objectKeyPrefix?: string;

  // The position of the action in the receipt rule
  position?: number;

  // The ARN of an SNS topic to notify
  topicArn?: string;
}

export function ses_ReceiptRuleS3Action_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'The name of the S3 bucket',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyArn',
      'The ARN of the KMS key',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'objectKeyPrefix',
      'The key prefix of the S3 bucket',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'position',
      'The position of the action in the receipt rule',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'topicArn',
      'The ARN of an SNS topic to notify',
      () => [],
      false,
      false,
    ),
  ];
}
