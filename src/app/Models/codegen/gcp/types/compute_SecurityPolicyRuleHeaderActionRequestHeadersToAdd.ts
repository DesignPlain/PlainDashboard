import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd {
  // The name of the header to set.
  headerName?: string;

  // The value to set the named header to.
  headerValue?: string;
}

export function compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The name of the header to set.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerValue",
      "The value to set the named header to.",
      () => [],
      false,
      false,
    ),
  ];
}
