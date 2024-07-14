import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TargetGroupAttachmentArgs {
  /*
The ID of the target. This is the Instance ID for an instance, or the container ID for an ECS container. If the target type is `ip`, specify an IP address. If the target type is `lambda`, specify the Lambda function ARN. If the target type is `alb`, specify the ALB ARN.

The following arguments are optional:
*/
  targetId?: string;

  // The Availability Zone where the IP address of the target is to be registered. If the private IP address is outside of the VPC scope, this value must be set to `all`.
  availabilityZone?: string;

  // The port on which targets receive traffic.
  port?: number;

  // The ARN of the target group with which to register targets.
  targetGroupArn?: string;
}
export class TargetGroupAttachment extends Resource {
  // The Availability Zone where the IP address of the target is to be registered. If the private IP address is outside of the VPC scope, this value must be set to `all`.
  public availabilityZone?: string;

  // The port on which targets receive traffic.
  public port?: number;

  // The ARN of the target group with which to register targets.
  public targetGroupArn?: string;

  /*
The ID of the target. This is the Instance ID for an instance, or the container ID for an ECS container. If the target type is `ip`, specify an IP address. If the target type is `lambda`, specify the Lambda function ARN. If the target type is `alb`, specify the ALB ARN.

The following arguments are optional:
*/
  public targetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "targetGroupArn",
        "The ARN of the target group with which to register targets.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetId",
        "The ID of the target. This is the Instance ID for an instance, or the container ID for an ECS container. If the target type is `ip`, specify an IP address. If the target type is `lambda`, specify the Lambda function ARN. If the target type is `alb`, specify the ALB ARN.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The Availability Zone where the IP address of the target is to be registered. If the private IP address is outside of the VPC scope, this value must be set to `all`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port on which targets receive traffic.",
        [],
        false,
        true,
      ),
    ];
  }
}
