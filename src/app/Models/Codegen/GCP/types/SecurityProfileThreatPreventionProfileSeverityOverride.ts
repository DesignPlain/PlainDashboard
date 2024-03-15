export interface SecurityProfileThreatPreventionProfileSeverityOverride {
  /*
Severity level to match.
Possible values are: `CRITICAL`, `HIGH`, `INFORMATIONAL`, `LOW`, `MEDIUM`.
*/
  Severity?: string;

  /*
Threat action override.
Possible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.
*/
  Action?: string;
}
