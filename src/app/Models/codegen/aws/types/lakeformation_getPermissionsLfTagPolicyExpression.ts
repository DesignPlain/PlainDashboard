import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lakeformation_getPermissionsLfTagPolicyExpression {
  // Key-name of an LF-Tag.
  key?: string;

  // List of possible values of an LF-Tag.
  values?: Array<string>;
}

export function lakeformation_getPermissionsLfTagPolicyExpression_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Key-name of an LF-Tag.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'List of possible values of an LF-Tag.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
