import { SecurityProfileThreatPreventionProfileThreatOverride } from "./SecurityProfileThreatPreventionProfileThreatOverride";
import { SecurityProfileThreatPreventionProfileSeverityOverride } from "./SecurityProfileThreatPreventionProfileSeverityOverride";

export interface SecurityProfileThreatPreventionProfile {
  /*
The configuration for overriding threats actions by threat id match.
If a threat is matched both by configuration provided in severity overrides
and threat overrides, the threat overrides action is applied.
Structure is documented below.
*/
  ThreatOverrides?: Array<SecurityProfileThreatPreventionProfileThreatOverride>;

  /*
The configuration for overriding threats actions by severity match.
Structure is documented below.
*/
  SeverityOverrides?: Array<SecurityProfileThreatPreventionProfileSeverityOverride>;
}
