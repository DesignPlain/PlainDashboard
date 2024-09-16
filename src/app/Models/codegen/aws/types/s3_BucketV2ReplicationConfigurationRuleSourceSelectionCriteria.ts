import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject,
  s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject_GetTypes,
} from './s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject';

export interface s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria {
  /*
Match SSE-KMS encrypted objects (documented below). If specified, `replica_kms_key_id`
in `destination` must be specified as well.
*/
  sseKmsEncryptedObjects?: Array<s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject>;
}

export function s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sseKmsEncryptedObjects',
      'Match SSE-KMS encrypted objects (documented below). If specified, `replica_kms_key_id`\nin `destination` must be specified as well.',
      () =>
        s3_BucketV2ReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObject_GetTypes(),
      false,
      false,
    ),
  ];
}
