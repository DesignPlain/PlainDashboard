import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lb_ListenerRuleActionForwardStickiness,
  lb_ListenerRuleActionForwardStickiness_GetTypes,
} from "./lb_ListenerRuleActionForwardStickiness";
import {
  lb_ListenerRuleActionForwardTargetGroup,
  lb_ListenerRuleActionForwardTargetGroup_GetTypes,
} from "./lb_ListenerRuleActionForwardTargetGroup";

export interface lb_ListenerRuleActionForward {
  // The target group stickiness for the rule.
  stickiness?: lb_ListenerRuleActionForwardStickiness;

  // One or more target groups block.
  targetGroups?: Array<lb_ListenerRuleActionForwardTargetGroup>;
}

export function lb_ListenerRuleActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "stickiness",
      "The target group stickiness for the rule.",
      lb_ListenerRuleActionForwardStickiness_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "One or more target groups block.",
      lb_ListenerRuleActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
