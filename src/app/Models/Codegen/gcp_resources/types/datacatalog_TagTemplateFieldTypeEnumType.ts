import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue,
  datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes,
} from "./datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue";

export interface datacatalog_TagTemplateFieldTypeEnumType {
  /*
The set of allowed values for this enum. The display names of the
values must be case-insensitively unique within this set. Currently,
enum values can only be added to the list of allowed values. Deletion
and renaming of enum values are not supported.
Can have up to 500 allowed values.
Structure is documented below.
*/
  allowedValues?: Array<datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue>;
}

export function datacatalog_TagTemplateFieldTypeEnumType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedValues",
      "The set of allowed values for this enum. The display names of the\nvalues must be case-insensitively unique within this set. Currently,\nenum values can only be added to the list of allowed values. Deletion\nand renaming of enum values are not supported.\nCan have up to 500 allowed values.\nStructure is documented below.",
      datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes(),
      true,
      false,
    ),
  ];
}
