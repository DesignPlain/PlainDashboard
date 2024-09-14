import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_getNodeGroupRemoteAccess {
  // EC2 Key Pair name that provides access for SSH communication with the worker nodes in the EKS Node Group.
  ec2SshKey?: string;

  // Set of EC2 Security Group IDs to allow SSH access (port 22) from on the worker nodes.
  sourceSecurityGroupIds?: Array<string>;
}

export function eks_getNodeGroupRemoteAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ec2SshKey",
      "EC2 Key Pair name that provides access for SSH communication with the worker nodes in the EKS Node Group.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceSecurityGroupIds",
      "Set of EC2 Security Group IDs to allow SSH access (port 22) from on the worker nodes.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
