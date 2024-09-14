import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  alb_getListenerDefaultActionForwardTargetGroup,
  alb_getListenerDefaultActionForwardTargetGroup_GetTypes,
} from "./alb_getListenerDefaultActionForwardTargetGroup";
import {
  alb_getListenerDefaultActionForwardStickiness,
  alb_getListenerDefaultActionForwardStickiness_GetTypes,
} from "./alb_getListenerDefaultActionForwardStickiness";

export interface alb_getListenerDefaultActionForward {
  //
  targetGroups?: Array<alb_getListenerDefaultActionForwardTargetGroup>;

  //
  stickinesses?: Array<alb_getListenerDefaultActionForwardStickiness>;
}

export function alb_getListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "",
      () => alb_getListenerDefaultActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stickinesses",
      "",
      () => alb_getListenerDefaultActionForwardStickiness_GetTypes(),
      true,
      false,
    ),
  ];
}
