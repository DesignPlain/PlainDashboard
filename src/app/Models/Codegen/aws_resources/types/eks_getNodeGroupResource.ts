import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  eks_getNodeGroupResourceAutoscalingGroup,
  eks_getNodeGroupResourceAutoscalingGroup_GetTypes,
} from "./eks_getNodeGroupResourceAutoscalingGroup";

export interface eks_getNodeGroupResource {
  // List of objects containing information about AutoScaling Groups.
  autoscalingGroups?: Array<eks_getNodeGroupResourceAutoscalingGroup>;

  // Identifier of the remote access EC2 Security Group.
  remoteAccessSecurityGroupId?: string;
}

export function eks_getNodeGroupResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "autoscalingGroups",
      "List of objects containing information about AutoScaling Groups.",
      eks_getNodeGroupResourceAutoscalingGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "remoteAccessSecurityGroupId",
      "Identifier of the remote access EC2 Security Group.",
      [],
      true,
      false,
    ),
  ];
}
