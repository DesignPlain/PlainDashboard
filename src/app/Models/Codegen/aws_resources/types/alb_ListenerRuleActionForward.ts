import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alb_ListenerRuleActionForwardStickiness,
  alb_ListenerRuleActionForwardStickiness_GetTypes,
} from "./alb_ListenerRuleActionForwardStickiness";
import {
  alb_ListenerRuleActionForwardTargetGroup,
  alb_ListenerRuleActionForwardTargetGroup_GetTypes,
} from "./alb_ListenerRuleActionForwardTargetGroup";

export interface alb_ListenerRuleActionForward {
  // The target group stickiness for the rule.
  stickiness?: alb_ListenerRuleActionForwardStickiness;

  // One or more target groups block.
  targetGroups?: Array<alb_ListenerRuleActionForwardTargetGroup>;
}

export function alb_ListenerRuleActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "One or more target groups block.",
      alb_ListenerRuleActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "stickiness",
      "The target group stickiness for the rule.",
      alb_ListenerRuleActionForwardStickiness_GetTypes(),
      false,
      false,
    ),
  ];
}
