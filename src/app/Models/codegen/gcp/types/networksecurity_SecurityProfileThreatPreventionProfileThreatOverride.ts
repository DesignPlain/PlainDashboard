import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networksecurity_SecurityProfileThreatPreventionProfileThreatOverride {
  /*
Threat action.
Possible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.
*/
  action?: string;

  // Vendor-specific ID of a threat to override.
  threatId?: string;

  /*
(Output)
Type of threat.
*/
  type?: string;
}

export function networksecurity_SecurityProfileThreatPreventionProfileThreatOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Threat action.\nPossible values are: `ALERT`, `ALLOW`, `DEFAULT_ACTION`, `DENY`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "threatId",
      "Vendor-specific ID of a threat to override.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "(Output)\nType of threat.",
      () => [],
      false,
      false,
    ),
  ];
}
