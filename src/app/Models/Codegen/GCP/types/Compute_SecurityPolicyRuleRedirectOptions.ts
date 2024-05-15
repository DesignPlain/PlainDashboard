import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyRuleRedirectOptions {
  // External redirection target when `EXTERNAL_302` is set in `type`.
  Target?: string;

  // Type of redirect action.
  Type?: string;
}

export function Compute_SecurityPolicyRuleRedirectOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Target",
      "External redirection target when `EXTERNAL_302` is set in `type`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of redirect action.",
      [],
      true,
      false,
    ),
  ];
}
