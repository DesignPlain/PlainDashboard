import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects,
  s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects_GetTypes,
} from "./s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects";

export interface s3_BucketReplicationConfigurationRuleSourceSelectionCriteria {
  /*
Match SSE-KMS encrypted objects (documented below). If specified, `replica_kms_key_id`
in `destination` must be specified as well.
*/
  sseKmsEncryptedObjects?: s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function s3_BucketReplicationConfigurationRuleSourceSelectionCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sseKmsEncryptedObjects",
      "Match SSE-KMS encrypted objects (documented below). If specified, `replica_kms_key_id`\nin `destination` must be specified as well.",
      s3_BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
