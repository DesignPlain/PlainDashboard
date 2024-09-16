import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityhub_InsightFiltersResourceAwsS3BucketOwnerId {
  //
  comparison?: string;

  //
  value?: string;
}

export function securityhub_InsightFiltersResourceAwsS3BucketOwnerId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'comparison',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'value', '', () => [], true, false),
  ];
}
