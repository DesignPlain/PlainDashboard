import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  /*
Specifies a percentage of instances between 0 to 100%!!(MISSING),(MISSING) inclusive.
For example, specify 80 for 80%!!(MISSING)
(MISSING)
*/
  percent?: number;

  /*
Specifies a fixed number of VM instances. This must be a positive
integer.
*/
  fixed?: number;
}

export function compute_AutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "Specifies a percentage of instances between 0 to 100%!,(MISSING) inclusive.\nFor example, specify 80 for 80%!\n(MISSING)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fixed",
      "Specifies a fixed number of VM instances. This must be a positive\ninteger.",
      [],
      false,
      false,
    ),
  ];
}
