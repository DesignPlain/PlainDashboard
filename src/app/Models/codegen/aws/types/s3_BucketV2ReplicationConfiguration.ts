import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketV2ReplicationConfigurationRule,
  s3_BucketV2ReplicationConfigurationRule_GetTypes,
} from './s3_BucketV2ReplicationConfigurationRule';

export interface s3_BucketV2ReplicationConfiguration {
  // ARN of the IAM role for Amazon S3 to assume when replicating the objects.
  role?: string;

  // Specifies the rules managing the replication (documented below).
  rules?: Array<s3_BucketV2ReplicationConfigurationRule>;
}

export function s3_BucketV2ReplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'role',
      'ARN of the IAM role for Amazon S3 to assume when replicating the objects.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'rules',
      'Specifies the rules managing the replication (documented below).',
      () => s3_BucketV2ReplicationConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
