import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  route53recoverycontrol_SafetyRuleRuleConfig,
  route53recoverycontrol_SafetyRuleRuleConfig_GetTypes,
} from "../types/route53recoverycontrol_SafetyRuleRuleConfig";

export interface SafetyRuleArgs {
  // Gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
  gatingControls?: Array<string>;

  // Name describing the safety rule.
  name?: string;

  // Configuration block for safety rule criteria. See below.
  ruleConfig?: route53recoverycontrol_SafetyRuleRuleConfig;

  // Routing controls that can only be set or unset if the specified `rule_config` evaluates to true for the specified `gating_controls`.
  targetControls?: Array<string>;

  /*
Evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

The following arguments are optional:
*/
  waitPeriodMs?: number;

  // Routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.
  assertedControls?: Array<string>;

  // ARN of the control panel in which this safety rule will reside.
  controlPanelArn?: string;
}
export class SafetyRule extends Resource {
  // Routing controls that can only be set or unset if the specified `rule_config` evaluates to true for the specified `gating_controls`.
  public targetControls?: Array<string>;

  // ARN of the safety rule.
  public arn?: string;

  // ARN of the control panel in which this safety rule will reside.
  public controlPanelArn?: string;

  // Configuration block for safety rule criteria. See below.
  public ruleConfig?: route53recoverycontrol_SafetyRuleRuleConfig;

  // Status of the safety rule. `PENDING` when it is being created/updated, `PENDING_DELETION` when it is being deleted, and `DEPLOYED` otherwise.
  public status?: string;

  // Routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.
  public assertedControls?: Array<string>;

  // Gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
  public gatingControls?: Array<string>;

  // Name describing the safety rule.
  public name?: string;

  /*
Evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

The following arguments are optional:
*/
  public waitPeriodMs?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "waitPeriodMs",
        "Evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "assertedControls",
        "Routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "controlPanelArn",
        "ARN of the control panel in which this safety rule will reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "gatingControls",
        "Gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name describing the safety rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ruleConfig",
        "Configuration block for safety rule criteria. See below.",
        route53recoverycontrol_SafetyRuleRuleConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetControls",
        "Routing controls that can only be set or unset if the specified `rule_config` evaluates to true for the specified `gating_controls`.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
