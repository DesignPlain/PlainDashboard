import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_AutomationRulePromoteReleaseRule,
  clouddeploy_AutomationRulePromoteReleaseRule_GetTypes,
} from "./clouddeploy_AutomationRulePromoteReleaseRule";
import {
  clouddeploy_AutomationRuleAdvanceRolloutRule,
  clouddeploy_AutomationRuleAdvanceRolloutRule_GetTypes,
} from "./clouddeploy_AutomationRuleAdvanceRolloutRule";

export interface clouddeploy_AutomationRule {
  /*
Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target.
Structure is documented below.
*/
  promoteReleaseRule?: clouddeploy_AutomationRulePromoteReleaseRule;

  /*
Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout.
Structure is documented below.
*/
  advanceRolloutRule?: clouddeploy_AutomationRuleAdvanceRolloutRule;
}

export function clouddeploy_AutomationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "promoteReleaseRule",
      "Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target.\nStructure is documented below.",
      clouddeploy_AutomationRulePromoteReleaseRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advanceRolloutRule",
      "Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout.\nStructure is documented below.",
      clouddeploy_AutomationRuleAdvanceRolloutRule_GetTypes(),
      false,
      false,
    ),
  ];
}
