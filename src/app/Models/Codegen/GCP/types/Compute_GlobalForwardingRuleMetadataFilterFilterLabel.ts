import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_GlobalForwardingRuleMetadataFilterFilterLabel {
  /*
Name of the metadata label. The length must be between
1 and 1024 characters, inclusive.
*/
  Name?: string;

  /*
The value that the label must match. The value has a maximum
length of 1024 characters.
*/
  Value?: string;
}

export function Compute_GlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the metadata label. The length must be between\n1 and 1024 characters, inclusive.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value that the label must match. The value has a maximum\nlength of 1024 characters.",
      [],
      true,
      true,
    ),
  ];
}
