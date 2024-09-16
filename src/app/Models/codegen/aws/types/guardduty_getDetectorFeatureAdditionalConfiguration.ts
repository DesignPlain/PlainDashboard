import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface guardduty_getDetectorFeatureAdditionalConfiguration {
  // Current status of the detector.
  status?: string;

  // The name of the detector feature.
  name?: string;
}

export function guardduty_getDetectorFeatureAdditionalConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'status',
      'Current status of the detector.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the detector feature.',
      () => [],
      true,
      false,
    ),
  ];
}
