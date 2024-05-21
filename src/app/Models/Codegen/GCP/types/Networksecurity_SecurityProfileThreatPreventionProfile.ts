import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride,
  networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes,
} from "./networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride";
import {
  networksecurity_SecurityProfileThreatPreventionProfileThreatOverride,
  networksecurity_SecurityProfileThreatPreventionProfileThreatOverride_GetTypes,
} from "./networksecurity_SecurityProfileThreatPreventionProfileThreatOverride";

export interface networksecurity_SecurityProfileThreatPreventionProfile {
  /*
The configuration for overriding threats actions by severity match.
Structure is documented below.
*/
  severityOverrides?: Array<networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride>;

  /*
The configuration for overriding threats actions by threat id match.
If a threat is matched both by configuration provided in severity overrides
and threat overrides, the threat overrides action is applied.
Structure is documented below.
*/
  threatOverrides?: Array<networksecurity_SecurityProfileThreatPreventionProfileThreatOverride>;
}

export function networksecurity_SecurityProfileThreatPreventionProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "severityOverrides",
      "The configuration for overriding threats actions by severity match.\nStructure is documented below.",
      networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "threatOverrides",
      "The configuration for overriding threats actions by threat id match.\nIf a threat is matched both by configuration provided in severity overrides\nand threat overrides, the threat overrides action is applied.\nStructure is documented below.",
      networksecurity_SecurityProfileThreatPreventionProfileThreatOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
