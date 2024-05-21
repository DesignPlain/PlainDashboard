import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_GlobalForwardingRuleMetadataFilterFilterLabel {
  /*
Name of the metadata label. The length must be between
1 and 1024 characters, inclusive.
*/
  name?: string;

  /*
The value that the label must match. The value has a maximum
length of 1024 characters.
*/
  value?: string;
}

export function compute_GlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the metadata label. The length must be between\n1 and 1024 characters, inclusive.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value that the label must match. The value has a maximum\nlength of 1024 characters.",
      [],
      true,
      true,
    ),
  ];
}
