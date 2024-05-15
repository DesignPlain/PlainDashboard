import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionSecurityPolicyRuleMatchConfig,
  Compute_RegionSecurityPolicyRuleMatchConfig_GetTypes,
} from "./Compute_RegionSecurityPolicyRuleMatchConfig";

export interface Compute_RegionSecurityPolicyRuleMatch {
  /*
The configuration options available when specifying versionedExpr.
This field must be specified if versionedExpr is specified and cannot be specified if versionedExpr is not specified.
Structure is documented below.
*/
  Config?: Compute_RegionSecurityPolicyRuleMatchConfig;

  /*
Preconfigured versioned expression. If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config.
Possible values are: `SRC_IPS_V1`.
*/
  VersionedExpr?: string;
}

export function Compute_RegionSecurityPolicyRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "The configuration options available when specifying versionedExpr.\nThis field must be specified if versionedExpr is specified and cannot be specified if versionedExpr is not specified.\nStructure is documented below.",
      Compute_RegionSecurityPolicyRuleMatchConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VersionedExpr",
      "Preconfigured versioned expression. If this field is specified, config must also be specified.\nAvailable preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config.\nPossible values are: `SRC_IPS_V1`.",
      [],
      false,
      false,
    ),
  ];
}
