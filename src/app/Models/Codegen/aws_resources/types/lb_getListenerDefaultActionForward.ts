import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lb_getListenerDefaultActionForwardStickiness,
  lb_getListenerDefaultActionForwardStickiness_GetTypes,
} from "./lb_getListenerDefaultActionForwardStickiness";
import {
  lb_getListenerDefaultActionForwardTargetGroup,
  lb_getListenerDefaultActionForwardTargetGroup_GetTypes,
} from "./lb_getListenerDefaultActionForwardTargetGroup";

export interface lb_getListenerDefaultActionForward {
  //
  stickinesses?: Array<lb_getListenerDefaultActionForwardStickiness>;

  //
  targetGroups?: Array<lb_getListenerDefaultActionForwardTargetGroup>;
}

export function lb_getListenerDefaultActionForward_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "stickinesses",
      "",
      lb_getListenerDefaultActionForwardStickiness_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetGroups",
      "",
      lb_getListenerDefaultActionForwardTargetGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
