import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyRuleMatchConfig,
  Compute_SecurityPolicyRuleMatchConfig_GetTypes,
} from "./Compute_SecurityPolicyRuleMatchConfig";
import {
  Compute_SecurityPolicyRuleMatchExpr,
  Compute_SecurityPolicyRuleMatchExpr_GetTypes,
} from "./Compute_SecurityPolicyRuleMatchExpr";

export interface Compute_SecurityPolicyRuleMatch {
  /*
Predefined rule expression. If this field is specified, `config` must also be specified.
Available options:
*/
  VersionedExpr?: string;

  /*
The configuration options available when specifying `versioned_expr`.
This field must be specified if `versioned_expr` is specified and cannot be specified if `versioned_expr` is not specified.
Structure is documented below.
*/
  Config?: Compute_SecurityPolicyRuleMatchConfig;

  /*
User defined CEVAL expression. A CEVAL expression is used to specify match criteria
such as `origin.ip`, `source.region_code` and `contents` in the request header.
Structure is documented below.
*/
  Expr?: Compute_SecurityPolicyRuleMatchExpr;
}

export function Compute_SecurityPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "VersionedExpr",
      "Predefined rule expression. If this field is specified, `config` must also be specified.\nAvailable options:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "The configuration options available when specifying `versioned_expr`.\nThis field must be specified if `versioned_expr` is specified and cannot be specified if `versioned_expr` is not specified.\nStructure is documented below.",
      Compute_SecurityPolicyRuleMatchConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Expr",
      "User defined CEVAL expression. A CEVAL expression is used to specify match criteria\nsuch as `origin.ip`, `source.region_code` and `contents` in the request header.\nStructure is documented below.",
      Compute_SecurityPolicyRuleMatchExpr_GetTypes(),
      false,
      false,
    ),
  ];
}
