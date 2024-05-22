import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eks_getNodeGroupResourceAutoscalingGroup {
  // Name of the AutoScaling Group.
  name?: string;
}

export function eks_getNodeGroupResourceAutoscalingGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the AutoScaling Group.",
      [],
      true,
      false,
    ),
  ];
}
