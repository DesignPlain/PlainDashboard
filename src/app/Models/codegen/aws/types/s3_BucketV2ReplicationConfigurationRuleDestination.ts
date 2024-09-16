import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation,
  s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation_GetTypes,
} from './s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation';
import {
  s3_BucketV2ReplicationConfigurationRuleDestinationMetric,
  s3_BucketV2ReplicationConfigurationRuleDestinationMetric_GetTypes,
} from './s3_BucketV2ReplicationConfigurationRuleDestinationMetric';
import {
  s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime,
  s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime_GetTypes,
} from './s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime';

export interface s3_BucketV2ReplicationConfigurationRuleDestination {
  // Enables replication metrics (required for S3 RTC) (documented below).
  metrics?: Array<s3_BucketV2ReplicationConfigurationRuleDestinationMetric>;

  /*
Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with
`sse_kms_encrypted_objects` source selection criteria.
*/
  replicaKmsKeyId?: string;

  // Enables S3 Replication Time Control (S3 RTC) (documented below).
  replicationTimes?: Array<s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime>;

  // The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.
  storageClass?: string;

  // Specifies the overrides to use for object owners on replication (documented below). Must be used in conjunction with `account_id` owner override configuration.
  accessControlTranslations?: Array<s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation>;

  // Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.
  accountId?: string;

  // ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
  bucket?: string;
}

export function s3_BucketV2ReplicationConfigurationRuleDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'storageClass',
      'The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'accessControlTranslations',
      'Specifies the overrides to use for object owners on replication (documented below). Must be used in conjunction with `account_id` owner override configuration.',
      () =>
        s3_BucketV2ReplicationConfigurationRuleDestinationAccessControlTranslation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accountId',
      'Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'metrics',
      'Enables replication metrics (required for S3 RTC) (documented below).',
      () => s3_BucketV2ReplicationConfigurationRuleDestinationMetric_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'replicaKmsKeyId',
      'Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with\n`sse_kms_encrypted_objects` source selection criteria.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'replicationTimes',
      'Enables S3 Replication Time Control (S3 RTC) (documented below).',
      () =>
        s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime_GetTypes(),
      false,
      false,
    ),
  ];
}
