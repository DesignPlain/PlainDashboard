import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datacatalog_TagTemplateFieldTypeEnumType,
  datacatalog_TagTemplateFieldTypeEnumType_GetTypes,
} from "./datacatalog_TagTemplateFieldTypeEnumType";

export interface datacatalog_TagTemplateFieldType {
  /*
Represents an enum type.
Exactly one of `primitive_type` or `enum_type` must be set
Structure is documented below.
*/
  enumType?: datacatalog_TagTemplateFieldTypeEnumType;

  /*
Represents primitive types - string, bool etc.
Exactly one of `primitive_type` or `enum_type` must be set
Possible values are: `DOUBLE`, `STRING`, `BOOL`, `TIMESTAMP`.
*/
  primitiveType?: string;
}

export function datacatalog_TagTemplateFieldType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "enumType",
      "Represents an enum type.\nExactly one of `primitive_type` or `enum_type` must be set\nStructure is documented below.",
      () => datacatalog_TagTemplateFieldTypeEnumType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "primitiveType",
      "Represents primitive types - string, bool etc.\nExactly one of `primitive_type` or `enum_type` must be set\nPossible values are: `DOUBLE`, `STRING`, `BOOL`, `TIMESTAMP`.",
      () => [],
      false,
      false,
    ),
  ];
}
