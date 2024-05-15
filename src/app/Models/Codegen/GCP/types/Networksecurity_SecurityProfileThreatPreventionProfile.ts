import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride,
  Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes,
} from "./Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride";
import {
  Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride,
  Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride_GetTypes,
} from "./Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride";

export interface Networksecurity_SecurityProfileThreatPreventionProfile {
  /*
The configuration for overriding threats actions by severity match.
Structure is documented below.
*/
  SeverityOverrides?: Array<Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride>;

  /*
The configuration for overriding threats actions by threat id match.
If a threat is matched both by configuration provided in severity overrides
and threat overrides, the threat overrides action is applied.
Structure is documented below.
*/
  ThreatOverrides?: Array<Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride>;
}

export function Networksecurity_SecurityProfileThreatPreventionProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SeverityOverrides",
      "The configuration for overriding threats actions by severity match.\nStructure is documented below.",
      Networksecurity_SecurityProfileThreatPreventionProfileSeverityOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ThreatOverrides",
      "The configuration for overriding threats actions by threat id match.\nIf a threat is matched both by configuration provided in severity overrides\nand threat overrides, the threat overrides action is applied.\nStructure is documented below.",
      Networksecurity_SecurityProfileThreatPreventionProfileThreatOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
