import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications,
  s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications_GetTypes,
} from "./s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications";
import {
  s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects,
  s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects_GetTypes,
} from "./s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects";

export interface s3_BucketReplicationConfigRuleSourceSelectionCriteria {
  // Configuration block that you can specify for selections for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when `filter` is specified), you can specify this element and set the status to `Enabled` to replicate modifications on replicas.
  replicaModifications?: s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications;

  // Configuration block for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If specified, `replica_kms_key_id` in `destination` `encryption_configuration` must be specified as well.
  sseKmsEncryptedObjects?: s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function s3_BucketReplicationConfigRuleSourceSelectionCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "replicaModifications",
      "Configuration block that you can specify for selections for modifications on replicas. Amazon S3 doesn't replicate replica modifications by default. In the latest version of replication configuration (when `filter` is specified), you can specify this element and set the status to `Enabled` to replicate modifications on replicas.",
      () =>
        s3_BucketReplicationConfigRuleSourceSelectionCriteriaReplicaModifications_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sseKmsEncryptedObjects",
      "Configuration block for filter information for the selection of Amazon S3 objects encrypted with AWS KMS. If specified, `replica_kms_key_id` in `destination` `encryption_configuration` must be specified as well.",
      () =>
        s3_BucketReplicationConfigRuleSourceSelectionCriteriaSseKmsEncryptedObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
