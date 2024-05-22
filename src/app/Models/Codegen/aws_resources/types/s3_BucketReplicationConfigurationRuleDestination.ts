import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketReplicationConfigurationRuleDestinationMetrics,
  s3_BucketReplicationConfigurationRuleDestinationMetrics_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleDestinationMetrics";
import {
  s3_BucketReplicationConfigurationRuleDestinationReplicationTime,
  s3_BucketReplicationConfigurationRuleDestinationReplicationTime_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleDestinationReplicationTime";
import {
  s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation,
  s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation";

export interface s3_BucketReplicationConfigurationRuleDestination {
  // Enables replication metrics (required for S3 RTC) (documented below).
  metrics?: s3_BucketReplicationConfigurationRuleDestinationMetrics;

  /*
Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with
`sse_kms_encrypted_objects` source selection criteria.
*/
  replicaKmsKeyId?: string;

  // Enables S3 Replication Time Control (S3 RTC) (documented below).
  replicationTime?: s3_BucketReplicationConfigurationRuleDestinationReplicationTime;

  // The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.
  storageClass?: string;

  // Specifies the overrides to use for object owners on replication. Must be used in conjunction with `account_id` owner override configuration.
  accessControlTranslation?: s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation;

  // The Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.
  accountId?: string;

  // The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.
  bucket?: string;
}

export function s3_BucketReplicationConfigurationRuleDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metrics",
      "Enables replication metrics (required for S3 RTC) (documented below).",
      s3_BucketReplicationConfigurationRuleDestinationMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "replicaKmsKeyId",
      "Destination KMS encryption key ARN for SSE-KMS replication. Must be used in conjunction with\n`sse_kms_encrypted_objects` source selection criteria.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "replicationTime",
      "Enables S3 Replication Time Control (S3 RTC) (documented below).",
      s3_BucketReplicationConfigurationRuleDestinationReplicationTime_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageClass",
      "The [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Destination.html#AmazonS3-Type-Destination-StorageClass) used to store the object. By default, Amazon S3 uses the storage class of the source object to create the object replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "accessControlTranslation",
      "Specifies the overrides to use for object owners on replication. Must be used in conjunction with `account_id` owner override configuration.",
      s3_BucketReplicationConfigurationRuleDestinationAccessControlTranslation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The Account ID to use for overriding the object owner on replication. Must be used in conjunction with `access_control_translation` override configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The ARN of the S3 bucket where you want Amazon S3 to store replicas of the object identified by the rule.",
      [],
      true,
      false,
    ),
  ];
}
