import { TagTemplateFieldTypeEnumType } from "./TagTemplateFieldTypeEnumType";

export interface TagTemplateFieldType {
  /*
Represents an enum type.
Exactly one of `primitive_type` or `enum_type` must be set
Structure is documented below.
*/
  EnumType?: TagTemplateFieldTypeEnumType;

  /*
Represents primitive types - string, bool etc.
Exactly one of `primitive_type` or `enum_type` must be set
Possible values are: `DOUBLE`, `STRING`, `BOOL`, `TIMESTAMP`.
*/
  PrimitiveType?: string;
}
