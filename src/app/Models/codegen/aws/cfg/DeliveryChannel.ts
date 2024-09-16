import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cfg_DeliveryChannelSnapshotDeliveryProperties,
  cfg_DeliveryChannelSnapshotDeliveryProperties_GetTypes,
} from '../types/cfg_DeliveryChannelSnapshotDeliveryProperties';

export interface DeliveryChannelArgs {
  // The name of the delivery channel. Defaults to `default`. Changing it recreates the resource.
  name?: string;

  // The name of the S3 bucket used to store the configuration history.
  s3BucketName?: string;

  // The prefix for the specified S3 bucket.
  s3KeyPrefix?: string;

  // The ARN of the AWS KMS key used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket.
  s3KmsKeyArn?: string;

  // Options for how AWS Config delivers configuration snapshots. See below
  snapshotDeliveryProperties?: cfg_DeliveryChannelSnapshotDeliveryProperties;

  // The ARN of the SNS topic that AWS Config delivers notifications to.
  snsTopicArn?: string;
}
export class DeliveryChannel extends DS_Resource {
  // The ARN of the AWS KMS key used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket.
  public s3KmsKeyArn?: string;

  // Options for how AWS Config delivers configuration snapshots. See below
  public snapshotDeliveryProperties?: cfg_DeliveryChannelSnapshotDeliveryProperties;

  // The ARN of the SNS topic that AWS Config delivers notifications to.
  public snsTopicArn?: string;

  // The name of the delivery channel. Defaults to `default`. Changing it recreates the resource.
  public name?: string;

  // The name of the S3 bucket used to store the configuration history.
  public s3BucketName?: string;

  // The prefix for the specified S3 bucket.
  public s3KeyPrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'snsTopicArn',
        'The ARN of the SNS topic that AWS Config delivers notifications to.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the delivery channel. Defaults to `default`. Changing it recreates the resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        's3BucketName',
        'The name of the S3 bucket used to store the configuration history.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3KeyPrefix',
        'The prefix for the specified S3 bucket.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3KmsKeyArn',
        'The ARN of the AWS KMS key used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'snapshotDeliveryProperties',
        'Options for how AWS Config delivers configuration snapshots. See below',
        () => cfg_DeliveryChannelSnapshotDeliveryProperties_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
