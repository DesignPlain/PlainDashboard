import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField {
  // Name of the user-defined field, as given in the definition.
  name?: string;

  // Matching values of the field. Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").
  values?: Array<string>;
}

export function compute_RegionSecurityPolicyRuleNetworkMatchUserDefinedField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the user-defined field, as given in the definition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'Matching values of the field. Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
