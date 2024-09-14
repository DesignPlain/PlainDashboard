import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_NodeGroupResourceAutoscalingGroup {
  // Name of the AutoScaling Group.
  name?: string;
}

export function eks_NodeGroupResourceAutoscalingGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the AutoScaling Group.",
      () => [],
      false,
      false,
    ),
  ];
}
