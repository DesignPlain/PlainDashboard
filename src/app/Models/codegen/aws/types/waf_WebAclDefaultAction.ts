import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface waf_WebAclDefaultAction {
  /*
Specifies how you want AWS WAF to respond to requests that don't match the criteria in any of the `rules`.
e.g., `ALLOW` or `BLOCK`
*/
  type?: string;
}

export function waf_WebAclDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Specifies how you want AWS WAF to respond to requests that don't match the criteria in any of the `rules`.\ne.g., `ALLOW` or `BLOCK`",
      () => [],
      true,
      false,
    ),
  ];
}
