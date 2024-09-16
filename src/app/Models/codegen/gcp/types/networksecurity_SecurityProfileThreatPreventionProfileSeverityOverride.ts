import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride {
  /*
Severity level to match.
Possible values are: `CRITICAL`, `HIGH`, `INFORMATIONAL`, `LOW`, `MEDIUM`.
*/
  severity?: string;

  /*
Threat action override.
Possible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.
*/
  action?: string;
}

export function networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'severity',
      'Severity level to match.\nPossible values are: `CRITICAL`, `HIGH`, `INFORMATIONAL`, `LOW`, `MEDIUM`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'action',
      'Threat action override.\nPossible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.',
      () => [],
      true,
      false,
    ),
  ];
}
