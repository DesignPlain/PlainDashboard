import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  eks_NodeGroupResourceAutoscalingGroup,
  eks_NodeGroupResourceAutoscalingGroup_GetTypes,
} from "./eks_NodeGroupResourceAutoscalingGroup";

export interface eks_NodeGroupResource {
  // List of objects containing information about AutoScaling Groups.
  autoscalingGroups?: Array<eks_NodeGroupResourceAutoscalingGroup>;

  // Identifier of the remote access EC2 Security Group.
  remoteAccessSecurityGroupId?: string;
}

export function eks_NodeGroupResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "autoscalingGroups",
      "List of objects containing information about AutoScaling Groups.",
      eks_NodeGroupResourceAutoscalingGroup_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "remoteAccessSecurityGroupId",
      "Identifier of the remote access EC2 Security Group.",
      [],
      false,
      false,
    ),
  ];
}
