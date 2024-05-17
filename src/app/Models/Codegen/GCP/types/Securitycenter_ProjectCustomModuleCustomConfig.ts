import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_ProjectCustomModuleCustomConfigResourceSelector,
  Securitycenter_ProjectCustomModuleCustomConfigResourceSelector_GetTypes,
} from "./Securitycenter_ProjectCustomModuleCustomConfigResourceSelector";
import {
  Securitycenter_ProjectCustomModuleCustomConfigCustomOutput,
  Securitycenter_ProjectCustomModuleCustomConfigCustomOutput_GetTypes,
} from "./Securitycenter_ProjectCustomModuleCustomConfigCustomOutput";
import {
  Securitycenter_ProjectCustomModuleCustomConfigPredicate,
  Securitycenter_ProjectCustomModuleCustomConfigPredicate_GetTypes,
} from "./Securitycenter_ProjectCustomModuleCustomConfigPredicate";

export interface Securitycenter_ProjectCustomModuleCustomConfig {
  /*
The CEL expression to evaluate to produce findings. When the expression evaluates
to true against a resource, a finding is generated.
Structure is documented below.
*/
  Predicate?: Securitycenter_ProjectCustomModuleCustomConfigPredicate;

  /*
An explanation of the recommended steps that security teams can take to resolve
the detected issue. This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.
*/
  Recommendation?: string;

  /*
The resource types that the custom module operates on. Each custom module
can specify up to 5 resource types.
Structure is documented below.
*/
  ResourceSelector?: Securitycenter_ProjectCustomModuleCustomConfigResourceSelector;

  /*
The severity to assign to findings generated by the module.
Possible values are: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.
*/
  Severity?: string;

  /*
Custom output properties.
Structure is documented below.
*/
  CustomOutput?: Securitycenter_ProjectCustomModuleCustomConfigCustomOutput;

  /*
Text that describes the vulnerability or misconfiguration that the custom
module detects. This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.
*/
  Description?: string;
}

export function Securitycenter_ProjectCustomModuleCustomConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Recommendation",
      "An explanation of the recommended steps that security teams can take to resolve\nthe detected issue. This explanation is returned with each finding generated by\nthis module in the nextSteps property of the finding JSON.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ResourceSelector",
      "The resource types that the custom module operates on. Each custom module\ncan specify up to 5 resource types.\nStructure is documented below.",
      Securitycenter_ProjectCustomModuleCustomConfigResourceSelector_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Severity",
      "The severity to assign to findings generated by the module.\nPossible values are: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CustomOutput",
      "Custom output properties.\nStructure is documented below.",
      Securitycenter_ProjectCustomModuleCustomConfigCustomOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Text that describes the vulnerability or misconfiguration that the custom\nmodule detects. This explanation is returned with each finding instance to\nhelp investigators understand the detected issue. The text must be enclosed in quotation marks.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Predicate",
      "The CEL expression to evaluate to produce findings. When the expression evaluates\nto true against a resource, a finding is generated.\nStructure is documented below.",
      Securitycenter_ProjectCustomModuleCustomConfigPredicate_GetTypes(),
      true,
      false,
    ),
  ];
}
