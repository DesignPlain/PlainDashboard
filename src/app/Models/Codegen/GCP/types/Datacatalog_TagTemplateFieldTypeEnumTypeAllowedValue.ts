import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue {
  // The display name for this template.
  DisplayName?: string;
}

export function Datacatalog_TagTemplateFieldTypeEnumTypeAllowedValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name for this template.",
      [],
      true,
      false,
    ),
  ];
}
