import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  eks_getNodeGroupResourceAutoscalingGroup,
  eks_getNodeGroupResourceAutoscalingGroup_GetTypes,
} from './eks_getNodeGroupResourceAutoscalingGroup';

export interface eks_getNodeGroupResource {
  // Identifier of the remote access EC2 Security Group.
  remoteAccessSecurityGroupId?: string;

  // List of objects containing information about AutoScaling Groups.
  autoscalingGroups?: Array<eks_getNodeGroupResourceAutoscalingGroup>;
}

export function eks_getNodeGroupResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'autoscalingGroups',
      'List of objects containing information about AutoScaling Groups.',
      () => eks_getNodeGroupResourceAutoscalingGroup_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'remoteAccessSecurityGroupId',
      'Identifier of the remote access EC2 Security Group.',
      () => [],
      true,
      false,
    ),
  ];
}
