import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd,
  Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd_GetTypes,
} from "./Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd";

export interface Compute_SecurityPolicyRuleHeaderAction {
  // The list of request headers to add or overwrite if they're already present. Structure is documented below.
  RequestHeadersToAdds?: Array<Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd>;
}

export function Compute_SecurityPolicyRuleHeaderAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "RequestHeadersToAdds",
      "The list of request headers to add or overwrite if they're already present. Structure is documented below.",
      Compute_SecurityPolicyRuleHeaderActionRequestHeadersToAdd_GetTypes(),
      true,
      false,
    ),
  ];
}
