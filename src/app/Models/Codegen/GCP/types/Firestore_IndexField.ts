import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firestore_IndexField {
  // Name of the field.
  FieldPath?: string;

  /*
Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
Only one of `order` and `arrayConfig` can be specified.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  Order?: string;

  /*
Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can
be specified.
Possible values are: `CONTAINS`.

- - -
*/
  ArrayConfig?: string;
}

export function Firestore_IndexField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FieldPath",
      "Name of the field.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Order",
      "Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.\nOnly one of `order` and `arrayConfig` can be specified.\nPossible values are: `ASCENDING`, `DESCENDING`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArrayConfig",
      "Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can\nbe specified.\nPossible values are: `CONTAINS`.\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
