import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_FeatureGroupOnlineStoreConfigTtlDuration {
  // TtlDuration time unit. Valid values are `Seconds`, `Minutes`, `Hours`, `Days`, or `Weeks`.
  unit?: string;

  // TtlDuration time value.
  value?: number;
}

export function sagemaker_FeatureGroupOnlineStoreConfigTtlDuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'unit',
      'TtlDuration time unit. Valid values are `Seconds`, `Minutes`, `Hours`, `Days`, or `Weeks`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'value',
      'TtlDuration time value.',
      () => [],
      false,
      false,
    ),
  ];
}
