import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas {
  /*
Specifies a percentage of instances between 0 to 100%!!(MISSING),(MISSING) inclusive.
For example, specify 80 for 80%!!(MISSING)
(MISSING)
*/
  Percent?: number;

  /*
Specifies a fixed number of VM instances. This must be a positive
integer.
*/
  Fixed?: number;
}

export function Compute_RegionAutoscalerAutoscalingPolicyScaleDownControlMaxScaledDownReplicas_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Percent",
      "Specifies a percentage of instances between 0 to 100%!,(MISSING) inclusive.\nFor example, specify 80 for 80%!\n(MISSING)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Fixed",
      "Specifies a fixed number of VM instances. This must be a positive\ninteger.",
      [],
      false,
      false,
    ),
  ];
}
