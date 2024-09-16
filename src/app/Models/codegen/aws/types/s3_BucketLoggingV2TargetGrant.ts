import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketLoggingV2TargetGrantGrantee,
  s3_BucketLoggingV2TargetGrantGrantee_GetTypes,
} from './s3_BucketLoggingV2TargetGrantGrantee';

export interface s3_BucketLoggingV2TargetGrant {
  // Configuration block for the person being granted permissions. See below.
  grantee?: s3_BucketLoggingV2TargetGrantGrantee;

  // Logging permissions assigned to the grantee for the bucket. Valid values: `FULL_CONTROL`, `READ`, `WRITE`.
  permission?: string;
}

export function s3_BucketLoggingV2TargetGrant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'permission',
      'Logging permissions assigned to the grantee for the bucket. Valid values: `FULL_CONTROL`, `READ`, `WRITE`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'grantee',
      'Configuration block for the person being granted permissions. See below.',
      () => s3_BucketLoggingV2TargetGrantGrantee_GetTypes(),
      true,
      false,
    ),
  ];
}
