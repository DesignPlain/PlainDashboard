import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lb_ListenerDefaultActionForwardStickiness,
  lb_ListenerDefaultActionForwardStickiness_GetTypes,
} from "./lb_ListenerDefaultActionForwardStickiness";
import {
  lb_ListenerDefaultActionForwardTargetGroup,
  lb_ListenerDefaultActionForwardTargetGroup_GetTypes,
} from "./lb_ListenerDefaultActionForwardTargetGroup";

export interface lb_ListenerDefaultActionForward {
  // Configuration block for target group stickiness for the rule. Detailed below.
  stickiness?: lb_ListenerDefaultActionForwardStickiness;

  /*
Set of 1-5 target group blocks. Detailed below.

The following arguments are optional:
*/
  targetGroups?: Array<lb_ListenerDefaultActionForwardTargetGroup>;
}

export function lb_ListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "stickiness",
      "Configuration block for target group stickiness for the rule. Detailed below.",
      () => lb_ListenerDefaultActionForwardStickiness_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "Set of 1-5 target group blocks. Detailed below.\n\nThe following arguments are optional:",
      () => lb_ListenerDefaultActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
