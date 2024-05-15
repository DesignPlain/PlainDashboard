import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride {
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

export function Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Severity",
      "Severity level to match.\nPossible values are: `CRITICAL`, `HIGH`, `INFORMATIONAL`, `LOW`, `MEDIUM`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Action",
      "Threat action override.\nPossible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.",
      [],
      true,
      false,
    ),
  ];
}
