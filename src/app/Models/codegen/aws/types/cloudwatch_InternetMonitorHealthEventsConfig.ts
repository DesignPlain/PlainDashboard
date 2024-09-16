import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_InternetMonitorHealthEventsConfig {
  // The health event threshold percentage set for availability scores.
  availabilityScoreThreshold?: number;

  // The health event threshold percentage set for performance scores.
  performanceScoreThreshold?: number;
}

export function cloudwatch_InternetMonitorHealthEventsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'availabilityScoreThreshold',
      'The health event threshold percentage set for availability scores.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'performanceScoreThreshold',
      'The health event threshold percentage set for performance scores.',
      () => [],
      false,
      false,
    ),
  ];
}
