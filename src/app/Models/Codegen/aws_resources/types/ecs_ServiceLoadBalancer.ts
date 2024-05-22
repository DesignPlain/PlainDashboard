import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_ServiceLoadBalancer {
  // Name of the container to associate with the load balancer (as it appears in a container definition).
  containerName?: string;

  /*
Port on the container to associate with the load balancer.

> --Version note:-- Multiple `load_balancer` configuration block support was added in version 2.22.0 of the provider. This allows configuration of [ECS service support for multiple target groups](https://aws.amazon.com/about-aws/whats-new/2019/07/amazon-ecs-services-now-support-multiple-load-balancer-target-groups/).
*/
  containerPort?: number;

  // Name of the ELB (Classic) to associate with the service.
  elbName?: string;

  // ARN of the Load Balancer target group to associate with the service.
  targetGroupArn?: string;
}

export function ecs_ServiceLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "containerName",
      "Name of the container to associate with the load balancer (as it appears in a container definition).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      "Port on the container to associate with the load balancer.\n\n> **Version note:** Multiple `load_balancer` configuration block support was added in version 2.22.0 of the provider. This allows configuration of [ECS service support for multiple target groups](https://aws.amazon.com/about-aws/whats-new/2019/07/amazon-ecs-services-now-support-multiple-load-balancer-target-groups/).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "elbName",
      "Name of the ELB (Classic) to associate with the service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetGroupArn",
      "ARN of the Load Balancer target group to associate with the service.",
      [],
      false,
      false,
    ),
  ];
}
