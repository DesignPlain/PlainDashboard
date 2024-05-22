import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventTargetEcsTargetNetworkConfiguration {
  /*
Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Defaults to `false`.

For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html)
*/
  assignPublicIp?: boolean;

  // The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.
  securityGroups?: Array<string>;

  // The subnets associated with the task or service.
  subnets?: Array<string>;
}

export function cloudwatch_EventTargetEcsTargetNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "assignPublicIp",
      "Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Defaults to `false`.\n\nFor more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "The subnets associated with the task or service.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
