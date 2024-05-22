import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_SecurityPolicyRuleMatchConfig,
  compute_SecurityPolicyRuleMatchConfig_GetTypes,
} from "./compute_SecurityPolicyRuleMatchConfig";
import {
  compute_SecurityPolicyRuleMatchExpr,
  compute_SecurityPolicyRuleMatchExpr_GetTypes,
} from "./compute_SecurityPolicyRuleMatchExpr";

export interface compute_SecurityPolicyRuleMatch {
  /*
The configuration options available when specifying `versioned_expr`.
This field must be specified if `versioned_expr` is specified and cannot be specified if `versioned_expr` is not specified.
Structure is documented below.
*/
  config?: compute_SecurityPolicyRuleMatchConfig;

  /*
User defined CEVAL expression. A CEVAL expression is used to specify match criteria
such as `origin.ip`, `source.region_code` and `contents` in the request header.
Structure is documented below.
*/
  expr?: compute_SecurityPolicyRuleMatchExpr;

  /*
Predefined rule expression. If this field is specified, `config` must also be specified.
Available options:
*/
  versionedExpr?: string;
}

export function compute_SecurityPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "config",
      "The configuration options available when specifying `versioned_expr`.\nThis field must be specified if `versioned_expr` is specified and cannot be specified if `versioned_expr` is not specified.\nStructure is documented below.",
      compute_SecurityPolicyRuleMatchConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "expr",
      "User defined CEVAL expression. A CEVAL expression is used to specify match criteria\nsuch as `origin.ip`, `source.region_code` and `contents` in the request header.\nStructure is documented below.",
      compute_SecurityPolicyRuleMatchExpr_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "versionedExpr",
      "Predefined rule expression. If this field is specified, `config` must also be specified.\nAvailable options:",
      [],
      false,
      false,
    ),
  ];
}
