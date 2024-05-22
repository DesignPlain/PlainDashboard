import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_getListenerDefaultActionForwardTargetGroup {
  // ARN of the listener. Required if `load_balancer_arn` and `port` is not set.
  arn?: string;

  //
  weight?: number;
}

export function lb_getListenerDefaultActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "weight", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the listener. Required if `load_balancer_arn` and `port` is not set.",
      [],
      true,
      false,
    ),
  ];
}
