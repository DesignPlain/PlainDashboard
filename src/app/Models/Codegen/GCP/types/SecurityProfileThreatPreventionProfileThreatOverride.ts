export interface SecurityProfileThreatPreventionProfileThreatOverride {
  /*
Threat action.
Possible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.
*/
  Action?: string;

  // Vendor-specific ID of a threat to override.
  ThreatId?: string;

  /*
(Output)
Type of threat.
*/
  Type?: string;
}
