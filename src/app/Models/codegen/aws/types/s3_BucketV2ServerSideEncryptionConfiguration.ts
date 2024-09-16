import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketV2ServerSideEncryptionConfigurationRule,
  s3_BucketV2ServerSideEncryptionConfigurationRule_GetTypes,
} from './s3_BucketV2ServerSideEncryptionConfigurationRule';

export interface s3_BucketV2ServerSideEncryptionConfiguration {
  // Single object for server-side encryption by default configuration. (documented below)
  rules?: Array<s3_BucketV2ServerSideEncryptionConfigurationRule>;
}

export function s3_BucketV2ServerSideEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'rules',
      'Single object for server-side encryption by default configuration. (documented below)',
      () => s3_BucketV2ServerSideEncryptionConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
