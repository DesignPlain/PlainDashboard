import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_getTaskExecutionNetworkConfiguration {
  /*
Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Default `false`.

For more information, see the [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) documentation.
*/
  assignPublicIp?: boolean;

  // Security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.
  securityGroups?: Array<string>;

  // Subnets associated with the task or service.
  subnets?: Array<string>;
}

export function ecs_getTaskExecutionNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "assignPublicIp",
      "Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Default `false`.\n\nFor more information, see the [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) documentation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "Security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "Subnets associated with the task or service.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
