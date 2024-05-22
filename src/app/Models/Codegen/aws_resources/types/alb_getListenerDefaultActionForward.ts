import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alb_getListenerDefaultActionForwardStickiness,
  alb_getListenerDefaultActionForwardStickiness_GetTypes,
} from "./alb_getListenerDefaultActionForwardStickiness";
import {
  alb_getListenerDefaultActionForwardTargetGroup,
  alb_getListenerDefaultActionForwardTargetGroup_GetTypes,
} from "./alb_getListenerDefaultActionForwardTargetGroup";

export interface alb_getListenerDefaultActionForward {
  //
  stickinesses?: Array<alb_getListenerDefaultActionForwardStickiness>;

  //
  targetGroups?: Array<alb_getListenerDefaultActionForwardTargetGroup>;
}

export function alb_getListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "stickinesses",
      "",
      alb_getListenerDefaultActionForwardStickiness_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "",
      alb_getListenerDefaultActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
