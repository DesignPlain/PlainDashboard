import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identityplatform_ConfigMfaProviderConfigTotpProviderConfig {
  // The allowed number of adjacent intervals that will be used for verification to avoid clock skew.
  adjacentIntervals?: number;
}

export function identityplatform_ConfigMfaProviderConfigTotpProviderConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'adjacentIntervals',
      'The allowed number of adjacent intervals that will be used for verification to avoid clock skew.',
      () => [],
      false,
      false,
    ),
  ];
}
