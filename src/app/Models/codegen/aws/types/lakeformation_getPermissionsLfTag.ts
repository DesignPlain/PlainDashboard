import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lakeformation_getPermissionsLfTag {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  // Key-name for the tag.
  key?: string;

  /*
List of possible values an attribute can take.

The following argument is optional:
*/
  values?: Array<string>;
}

export function lakeformation_getPermissionsLfTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Key-name for the tag.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      'List of possible values an attribute can take.\n\nThe following argument is optional:',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'catalogId',
      'Identifier for the Data Catalog. By default, it is the account ID of the caller.',
      () => [],
      true,
      false,
    ),
  ];
}
