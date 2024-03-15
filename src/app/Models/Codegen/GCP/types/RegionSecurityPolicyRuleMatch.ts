import { RegionSecurityPolicyRuleMatchConfig } from "./RegionSecurityPolicyRuleMatchConfig";

export interface RegionSecurityPolicyRuleMatch {
  /*
The configuration options available when specifying versionedExpr.
This field must be specified if versionedExpr is specified and cannot be specified if versionedExpr is not specified.
Structure is documented below.
*/
  Config?: RegionSecurityPolicyRuleMatchConfig;

  /*
Preconfigured versioned expression. If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config.
Possible values are: `SRC_IPS_V1`.
*/
  VersionedExpr?: string;
}
