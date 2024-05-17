import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd {
  // The name of the header to set.
  HeaderName?: string;

  // The value to set the named header to.
  HeaderValue?: string;
}

export function Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The name of the header to set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderValue",
      "The value to set the named header to.",
      [],
      false,
      false,
    ),
  ];
}
