import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel {
  /*
Name of metadata label. The name can have a maximum length of 1024 characters
and must be at least 1 character long.
*/
  name?: string;

  /*
The value of the label must match the specified value. value can have a maximum
length of 1024 characters.
*/
  value?: string;
}

export function compute_RegionUrlMapPathMatcherRouteRuleMatchRuleMetadataFilterFilterLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of metadata label. The name can have a maximum length of 1024 characters\nand must be at least 1 character long.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the label must match the specified value. value can have a maximum\nlength of 1024 characters.",
      [],
      true,
      false,
    ),
  ];
}
