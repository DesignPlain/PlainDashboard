import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_AutomationRuleAdvanceRolloutRule,
  Clouddeploy_AutomationRuleAdvanceRolloutRule_GetTypes,
} from "./Clouddeploy_AutomationRuleAdvanceRolloutRule";
import {
  Clouddeploy_AutomationRulePromoteReleaseRule,
  Clouddeploy_AutomationRulePromoteReleaseRule_GetTypes,
} from "./Clouddeploy_AutomationRulePromoteReleaseRule";

export interface Clouddeploy_AutomationRule {
  /*
Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout.
Structure is documented below.
*/
  AdvanceRolloutRule?: Clouddeploy_AutomationRuleAdvanceRolloutRule;

  /*
Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target.
Structure is documented below.
*/
  PromoteReleaseRule?: Clouddeploy_AutomationRulePromoteReleaseRule;
}

export function Clouddeploy_AutomationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AdvanceRolloutRule",
      "Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout.\nStructure is documented below.",
      Clouddeploy_AutomationRuleAdvanceRolloutRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PromoteReleaseRule",
      "Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target.\nStructure is documented below.",
      Clouddeploy_AutomationRulePromoteReleaseRule_GetTypes(),
      false,
      false,
    ),
  ];
}
