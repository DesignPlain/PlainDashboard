import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vpclattice_TargetGroupAttachmentTarget {
  // The ID of the target. If the target type of the target group is INSTANCE, this is an instance ID. If the target type is IP , this is an IP address. If the target type is LAMBDA, this is the ARN of the Lambda function. If the target type is ALB, this is the ARN of the Application Load Balancer.
  id?: string;

  // This port is used for routing traffic to the target, and defaults to the target group port. However, you can override the default and specify a custom port.
  port?: number;
}

export function vpclattice_TargetGroupAttachmentTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ID of the target. If the target type of the target group is INSTANCE, this is an instance ID. If the target type is IP , this is an IP address. If the target type is LAMBDA, this is the ARN of the Lambda function. If the target type is ALB, this is the ARN of the Application Load Balancer.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "This port is used for routing traffic to the target, and defaults to the target group port. However, you can override the default and specify a custom port.",
      () => [],
      false,
      true,
    ),
  ];
}
