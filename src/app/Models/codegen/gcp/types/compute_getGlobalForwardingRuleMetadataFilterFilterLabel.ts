import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getGlobalForwardingRuleMetadataFilterFilterLabel {
  /*
The name of the global forwarding rule.

- - -
*/
  name?: string;

  /*
The value that the label must match. The value has a maximum
length of 1024 characters.
*/
  value?: string;
}

export function compute_getGlobalForwardingRuleMetadataFilterFilterLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the global forwarding rule.\n\n- - -",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value that the label must match. The value has a maximum\nlength of 1024 characters.",
      () => [],
      true,
      false,
    ),
  ];
}
