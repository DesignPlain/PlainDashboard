import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vpclattice_ListenerDefaultActionForwardTargetGroup {
  // ID or Amazon Resource Name (ARN) of the target group.
  targetGroupIdentifier?: string;

  /*
Determines how requests are distributed to the target group. Only required if you specify multiple target groups for a forward action. For example, if you specify two target groups, one with a
weight of 10 and the other with a weight of 20, the target group with a weight of 20 receives twice as many requests as the other target group. See [Listener rules](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules) in the AWS documentation for additional examples. Default: `100`.
*/
  weight?: number;
}

export function vpclattice_ListenerDefaultActionForwardTargetGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Determines how requests are distributed to the target group. Only required if you specify multiple target groups for a forward action. For example, if you specify two target groups, one with a\nweight of 10 and the other with a weight of 20, the target group with a weight of 20 receives twice as many requests as the other target group. See [Listener rules](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules) in the AWS documentation for additional examples. Default: `100`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGroupIdentifier",
      "ID or Amazon Resource Name (ARN) of the target group.",
      () => [],
      false,
      false,
    ),
  ];
}
