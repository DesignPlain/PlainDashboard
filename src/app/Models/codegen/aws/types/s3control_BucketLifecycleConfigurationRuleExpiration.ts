import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3control_BucketLifecycleConfigurationRuleExpiration {
  // Date the object is to be deleted. Should be in `YYYY-MM-DD` date format, e.g., `2020-09-30`.
  date?: string;

  // Number of days before the object is to be deleted.
  days?: number;

  // Enable to remove a delete marker with no noncurrent versions. Cannot be specified with `date` or `days`.
  expiredObjectDeleteMarker?: boolean;
}

export function s3control_BucketLifecycleConfigurationRuleExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'date',
      'Date the object is to be deleted. Should be in `YYYY-MM-DD` date format, e.g., `2020-09-30`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'days',
      'Number of days before the object is to be deleted.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'expiredObjectDeleteMarker',
      'Enable to remove a delete marker with no noncurrent versions. Cannot be specified with `date` or `days`.',
      () => [],
      false,
      false,
    ),
  ];
}
