import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vpclattice_TargetGroupConfigHealthCheckMatcher {
  // The HTTP codes to use when checking for a successful response from a target.
  value?: string;
}

export function vpclattice_TargetGroupConfigHealthCheckMatcher_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'The HTTP codes to use when checking for a successful response from a target.',
      () => [],
      false,
      false,
    ),
  ];
}
