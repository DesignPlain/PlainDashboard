import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lb_ListenerDefaultActionForwardTargetGroup {
  /*
ARN of the target group.

The following arguments are optional:
*/
  arn?: string;

  // Weight. The range is 0 to 999.
  weight?: number;
}

export function lb_ListenerDefaultActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the target group.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Weight. The range is 0 to 999.",
      () => [],
      false,
      false,
    ),
  ];
}
