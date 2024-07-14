import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securityhub_AutomationRuleAction,
  securityhub_AutomationRuleAction_GetTypes,
} from "../types/securityhub_AutomationRuleAction";
import {
  securityhub_AutomationRuleCriteria,
  securityhub_AutomationRuleCriteria_GetTypes,
} from "../types/securityhub_AutomationRuleCriteria";

export interface AutomationRuleArgs {
  // Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. Defaults to `false`.
  isTerminal?: boolean;

  // The name of the rule.
  ruleName?: string;

  // An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.
  ruleOrder?: number;

  // Whether the rule is active after it is created.
  ruleStatus?: string;

  //
  tags?: Map<string, string>;

  // A block that specifies one or more actions to update finding fields if a finding matches the conditions specified in `Criteria`. Documented below.
  actions?: Array<securityhub_AutomationRuleAction>;

  // A block that specifies a set of ASFF finding field attributes and corresponding expected values that Security Hub uses to filter findings. Documented below.
  criteria?: securityhub_AutomationRuleCriteria;

  // The description of the rule.
  description?: string;
}
export class AutomationRule extends Resource {
  // The ARN of the Security Hub automation rule.
  public arn?: string;

  // A block that specifies a set of ASFF finding field attributes and corresponding expected values that Security Hub uses to filter findings. Documented below.
  public criteria?: securityhub_AutomationRuleCriteria;

  // Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. Defaults to `false`.
  public isTerminal?: boolean;

  // Whether the rule is active after it is created.
  public ruleStatus?: string;

  //
  public tags?: Map<string, string>;

  // A block that specifies one or more actions to update finding fields if a finding matches the conditions specified in `Criteria`. Documented below.
  public actions?: Array<securityhub_AutomationRuleAction>;

  // The description of the rule.
  public description?: string;

  // The name of the rule.
  public ruleName?: string;

  // An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.
  public ruleOrder?: number;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ruleStatus",
        "Whether the rule is active after it is created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "actions",
        "A block that specifies one or more actions to update finding fields if a finding matches the conditions specified in `Criteria`. Documented below.",
        securityhub_AutomationRuleAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "criteria",
        "A block that specifies a set of ASFF finding field attributes and corresponding expected values that Security Hub uses to filter findings. Documented below.",
        securityhub_AutomationRuleCriteria_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the rule.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "isTerminal",
        "Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleName",
        "The name of the rule.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "ruleOrder",
        "An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.",
        [],
        true,
        false,
      ),
    ];
  }
}
