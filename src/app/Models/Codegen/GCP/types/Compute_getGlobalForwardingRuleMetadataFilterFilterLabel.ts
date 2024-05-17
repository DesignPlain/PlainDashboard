import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getGlobalForwardingRuleMetadataFilterFilterLabel {
  /*
The name of the global forwarding rule.

- - -
*/
  Name?: string;

  /*
The value that the label must match. The value has a maximum
length of 1024 characters.
*/
  Value?: string;
}

export function Compute_getGlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the global forwarding rule.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value that the label must match. The value has a maximum\nlength of 1024 characters.",
      [],
      true,
      false,
    ),
  ];
}
