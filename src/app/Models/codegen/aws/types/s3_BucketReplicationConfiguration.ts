import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketReplicationConfigurationRule,
  s3_BucketReplicationConfigurationRule_GetTypes,
} from './s3_BucketReplicationConfigurationRule';

export interface s3_BucketReplicationConfiguration {
  // ARN of the IAM role for Amazon S3 to assume when replicating the objects.
  role?: string;

  // Specifies the rules managing the replication (documented below).
  rules?: Array<s3_BucketReplicationConfigurationRule>;
}

export function s3_BucketReplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'rules',
      'Specifies the rules managing the replication (documented below).',
      () => s3_BucketReplicationConfigurationRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'role',
      'ARN of the IAM role for Amazon S3 to assume when replicating the objects.',
      () => [],
      true,
      false,
    ),
  ];
}
