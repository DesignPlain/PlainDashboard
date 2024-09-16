import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface firestore_IndexField {
  /*
Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can
be specified.
Possible values are: `CONTAINS`.

- - -
*/
  arrayConfig?: string;

  // Name of the field.
  fieldPath?: string;

  /*
Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
Only one of `order` and `arrayConfig` can be specified.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  order?: string;
}

export function firestore_IndexField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arrayConfig',
      'Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can\nbe specified.\nPossible values are: `CONTAINS`.\n\n- - -',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'fieldPath',
      'Name of the field.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'order',
      'Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.\nOnly one of `order` and `arrayConfig` can be specified.\nPossible values are: `ASCENDING`, `DESCENDING`.',
      () => [],
      false,
      true,
    ),
  ];
}
