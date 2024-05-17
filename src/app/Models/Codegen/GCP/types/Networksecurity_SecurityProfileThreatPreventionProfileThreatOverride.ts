import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride {
  // Vendor-specific ID of a threat to override.
  ThreatId?: string;

  /*
(Output)
Type of threat.
*/
  Type?: string;

  /*
Threat action.
Possible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.
*/
  Action?: string;
}

export function Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ThreatId",
      "Vendor-specific ID of a threat to override.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "(Output)\nType of threat.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Action",
      "Threat action.\nPossible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.",
      [],
      true,
      false,
    ),
  ];
}
