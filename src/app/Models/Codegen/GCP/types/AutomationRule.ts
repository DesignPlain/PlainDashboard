import { AutomationRuleAdvanceRolloutRule } from "./AutomationRuleAdvanceRolloutRule";
import { AutomationRulePromoteReleaseRule } from "./AutomationRulePromoteReleaseRule";

export interface AutomationRule {
  /*
Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout.
Structure is documented below.
*/
  AdvanceRolloutRule?: AutomationRuleAdvanceRolloutRule;

  /*
Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target.
Structure is documented below.
*/
  PromoteReleaseRule?: AutomationRulePromoteReleaseRule;
}
