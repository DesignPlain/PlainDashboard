import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_TaskSetLoadBalancer {
  // The name of the container to associate with the load balancer (as it appears in a container definition).
  containerName?: string;

  /*
The port on the container to associate with the load balancer. Defaults to `0` if not specified.

> --Note:-- Specifying multiple `load_balancer` configurations is still not supported by AWS for ECS task set.
*/
  containerPort?: number;

  // The name of the ELB (Classic) to associate with the service.
  loadBalancerName?: string;

  // The ARN of the Load Balancer target group to associate with the service.
  targetGroupArn?: string;
}

export function ecs_TaskSetLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "targetGroupArn",
      "The ARN of the Load Balancer target group to associate with the service.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerName",
      "The name of the container to associate with the load balancer (as it appears in a container definition).",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "containerPort",
      "The port on the container to associate with the load balancer. Defaults to `0` if not specified.\n\n> **Note:** Specifying multiple `load_balancer` configurations is still not supported by AWS for ECS task set.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "loadBalancerName",
      "The name of the ELB (Classic) to associate with the service.",
      [],
      false,
      true,
    ),
  ];
}
