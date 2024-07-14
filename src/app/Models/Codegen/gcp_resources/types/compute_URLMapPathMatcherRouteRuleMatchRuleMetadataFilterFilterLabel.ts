import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel {
  /*
The value of the label must match the specified value. value can have a maximum
length of 1024 characters.
*/
  value?: string;

  /*
Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long.
*/
  name?: string;
}

export function compute_URLMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the label must match the specified value. value can have a maximum\nlength of 1024 characters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of metadata label. The name can have a maximum length of 1024 characters\nand must be at least 1 character long.",
      [],
      true,
      false,
    ),
  ];
}
