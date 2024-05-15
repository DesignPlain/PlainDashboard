import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue,
  Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes,
} from "./Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue";

export interface Datacatalog_TagTemplateFieldTypeEnumType {
  /*
The set of allowed values for this enum. The display names of the
values must be case-insensitively unique within this set. Currently,
enum values can only be added to the list of allowed values. Deletion
and renaming of enum values are not supported.
Can have up to 500 allowed values.
Structure is documented below.
*/
  AllowedValues?: Array<Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue>;
}

export function Datacatalog_TagTemplateFieldTypeEnumType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedValues",
      "The set of allowed values for this enum. The display names of the\nvalues must be case-insensitively unique within this set. Currently,\nenum values can only be added to the list of allowed values. Deletion\nand renaming of enum values are not supported.\nCan have up to 500 allowed values.\nStructure is documented below.",
      Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes(),
      true,
      false,
    ),
  ];
}
