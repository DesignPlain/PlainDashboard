import { TagTemplateFieldTypeEnumTypeAllowedValue } from "./TagTemplateFieldTypeEnumTypeAllowedValue";

export interface TagTemplateFieldTypeEnumType {
  /*
The set of allowed values for this enum. The display names of the
values must be case-insensitively unique within this set. Currently,
enum values can only be added to the list of allowed values. Deletion
and renaming of enum values are not supported.
Can have up to 500 allowed values.
Structure is documented below.
*/
  AllowedValues?: Array<TagTemplateFieldTypeEnumTypeAllowedValue>;
}
