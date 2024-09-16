import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3_BucketV2LifecycleRuleExpiration {
  // Specifies the date after which you want the corresponding action to take effect.
  date?: string;

  // Specifies the number of days after object creation when the specific rule action takes effect.
  days?: number;

  // On a versioned bucket (versioning-enabled or versioning-suspended bucket), you can add this element in the lifecycle configuration to direct Amazon S3 to delete expired object delete markers. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.
  expiredObjectDeleteMarker?: boolean;
}

export function s3_BucketV2LifecycleRuleExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'date',
      'Specifies the date after which you want the corresponding action to take effect.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'days',
      'Specifies the number of days after object creation when the specific rule action takes effect.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'expiredObjectDeleteMarker',
      'On a versioned bucket (versioning-enabled or versioning-suspended bucket), you can add this element in the lifecycle configuration to direct Amazon S3 to delete expired object delete markers. This cannot be specified with Days or Date in a Lifecycle Expiration Policy.',
      () => [],
      false,
      false,
    ),
  ];
}
