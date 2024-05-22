import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AttachmentArgs {
  // Name of ASG to associate with the ELB.
  autoscalingGroupName?: string;

  // Name of the ELB.
  elb?: string;

  // ARN of a load balancer target group.
  lbTargetGroupArn?: string;
}
export class Attachment extends Resource {
  // Name of ASG to associate with the ELB.
  public autoscalingGroupName?: string;

  // Name of the ELB.
  public elb?: string;

  // ARN of a load balancer target group.
  public lbTargetGroupArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "autoscalingGroupName",
        "Name of ASG to associate with the ELB.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "elb",
        "Name of the ELB.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lbTargetGroupArn",
        "ARN of a load balancer target group.",
        [],
        false,
        true,
      ),
    ];
  }
}
