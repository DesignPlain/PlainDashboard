import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securityhub_InsightFiltersResourceAwsEc2InstanceKeyName {
  //
  value?: string;

  //
  comparison?: string;
}

export function securityhub_InsightFiltersResourceAwsEc2InstanceKeyName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'value', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'comparison',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
