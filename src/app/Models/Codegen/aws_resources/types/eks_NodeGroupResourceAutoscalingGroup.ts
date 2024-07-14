import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface eks_NodeGroupResourceAutoscalingGroup {
  // Name of the EC2 Launch Template. Conflicts with `id`.
  name?: string;
}

export function eks_NodeGroupResourceAutoscalingGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the EC2 Launch Template. Conflicts with `id`.",
      [],
      false,
      false,
    ),
  ];
}
