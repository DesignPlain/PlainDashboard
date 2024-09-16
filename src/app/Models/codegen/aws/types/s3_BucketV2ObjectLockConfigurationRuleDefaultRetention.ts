import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketV2ObjectLockConfigurationRuleDefaultRetention {
  // Number of days that you want to specify for the default retention period.
  days?: number;

  // Default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.
  mode?: string;

  // Number of years that you want to specify for the default retention period.
  years?: number;
}

export function s3_BucketV2ObjectLockConfigurationRuleDefaultRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'years',
      'Number of years that you want to specify for the default retention period.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'days',
      'Number of days that you want to specify for the default retention period.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mode',
      'Default Object Lock retention mode you want to apply to new objects placed in this bucket. Valid values are `GOVERNANCE` and `COMPLIANCE`.',
      () => [],
      true,
      false,
    ),
  ];
}
