import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface accessanalyzer_AnalyzerConfigurationUnusedAccess {
  // The specified access age in days for which to generate findings for unused access.
  unusedAccessAge?: number;
}

export function accessanalyzer_AnalyzerConfigurationUnusedAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'unusedAccessAge',
      'The specified access age in days for which to generate findings for unused access.',
      () => [],
      false,
      true,
    ),
  ];
}
