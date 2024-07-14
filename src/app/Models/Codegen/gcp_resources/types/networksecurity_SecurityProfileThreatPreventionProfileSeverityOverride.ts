import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride {
  /*
Threat action override.
Possible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.
*/
  action?: string;

  /*
Severity level to match.
Possible values are: `CRITICAL`, `HIGH`, `INFORMATIONAL`, `LOW`, `MEDIUM`.
*/
  severity?: string;
}

export function networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Threat action override.\nPossible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "severity",
      "Severity level to match.\nPossible values are: `CRITICAL`, `HIGH`, `INFORMATIONAL`, `LOW`, `MEDIUM`.",
      [],
      true,
      false,
    ),
  ];
}
