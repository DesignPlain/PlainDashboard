import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cfg_OrganizationConformancePackInputParameter {
  // The input key.
  parameterName?: string;

  // The input value.
  parameterValue?: string;
}

export function cfg_OrganizationConformancePackInputParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'parameterName',
      'The input key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'parameterValue',
      'The input value.',
      () => [],
      true,
      false,
    ),
  ];
}
