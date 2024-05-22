import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_TaskSetNetworkConfiguration {
  /*
Whether to assign a public IP address to the ENI (`FARGATE` launch type only). Valid values are `true` or `false`. Default `false`.

For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html).
*/
  assignPublicIp?: boolean;

  // The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. Maximum of 5.
  securityGroups?: Array<string>;

  // The subnets associated with the task or service. Maximum of 16.
  subnets?: Array<string>;
}

export function ecs_TaskSetNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. Maximum of 5.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "The subnets associated with the task or service. Maximum of 16.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "assignPublicIp",
      "Whether to assign a public IP address to the ENI (`FARGATE` launch type only). Valid values are `true` or `false`. Default `false`.\n\nFor more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html).",
      [],
      false,
      true,
    ),
  ];
}
