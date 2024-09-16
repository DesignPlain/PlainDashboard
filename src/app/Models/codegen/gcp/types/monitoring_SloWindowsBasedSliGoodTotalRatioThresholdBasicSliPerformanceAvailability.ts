import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability {
  // Whether an availability SLI is enabled or not. Must be set to `true. Defaults to `true`.
  enabled?: boolean;
}

export function monitoring_SloWindowsBasedSliGoodTotalRatioThresholdBasicSliPerformanceAvailability_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether an availability SLI is enabled or not. Must be set to `true. Defaults to `true`.',
      () => [],
      false,
      false,
    ),
  ];
}
