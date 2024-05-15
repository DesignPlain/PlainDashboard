import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datacatalog_TagTemplateFieldTypeEnumType,
  Datacatalog_TagTemplateFieldTypeEnumType_GetTypes,
} from "./Datacatalog_TagTemplateFieldTypeEnumType";

export interface Datacatalog_TagTemplateFieldType {
  /*
Represents an enum type.
Exactly one of `primitive_type` or `enum_type` must be set
Structure is documented below.
*/
  EnumType?: Datacatalog_TagTemplateFieldTypeEnumType;

  /*
Represents primitive types - string, bool etc.
Exactly one of `primitive_type` or `enum_type` must be set
Possible values are: `DOUBLE`, `STRING`, `BOOL`, `TIMESTAMP`.
*/
  PrimitiveType?: string;
}

export function Datacatalog_TagTemplateFieldType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "EnumType",
      "Represents an enum type.\nExactly one of `primitive_type` or `enum_type` must be set\nStructure is documented below.",
      Datacatalog_TagTemplateFieldTypeEnumType_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrimitiveType",
      "Represents primitive types - string, bool etc.\nExactly one of `primitive_type` or `enum_type` must be set\nPossible values are: `DOUBLE`, `STRING`, `BOOL`, `TIMESTAMP`.",
      [],
      false,
      false,
    ),
  ];
}
