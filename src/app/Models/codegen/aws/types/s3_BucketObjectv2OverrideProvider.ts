import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketObjectv2OverrideProviderDefaultTags,
  s3_BucketObjectv2OverrideProviderDefaultTags_GetTypes,
} from './s3_BucketObjectv2OverrideProviderDefaultTags';

export interface s3_BucketObjectv2OverrideProvider {
  // Override the provider `default_tags` configuration block.
  defaultTags?: s3_BucketObjectv2OverrideProviderDefaultTags;
}

export function s3_BucketObjectv2OverrideProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'defaultTags',
      'Override the provider `default_tags` configuration block.',
      () => s3_BucketObjectv2OverrideProviderDefaultTags_GetTypes(),
      false,
      false,
    ),
  ];
}
