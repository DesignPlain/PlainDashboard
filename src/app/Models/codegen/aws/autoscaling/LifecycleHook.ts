import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LifecycleHookArgs {
  // Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The value for this parameter can be either CONTINUE or ABANDON. The default value for this parameter is ABANDON.
  defaultResult?: string;

  // Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action defined in the DefaultResult parameter
  heartbeatTimeout?: number;

  // Instance state to which you want to attach the lifecycle hook. For a list of lifecycle hook types, see [describe-lifecycle-hook-types](https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-lifecycle-hook-types.html#examples)
  lifecycleTransition?: string;

  // Name of the lifecycle hook.
  name?: string;

  // Contains additional information that you want to include any time Auto Scaling sends a message to the notification target.
  notificationMetadata?: string;

  // ARN of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This ARN target can be either an SQS queue or an SNS topic.
  notificationTargetArn?: string;

  // ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.
  roleArn?: string;

  // Name of the Auto Scaling group to which you want to assign the lifecycle hook
  autoscalingGroupName?: string;
}
export class LifecycleHook extends DS_Resource {
  // ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.
  public roleArn?: string;

  // Name of the Auto Scaling group to which you want to assign the lifecycle hook
  public autoscalingGroupName?: string;

  // Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The value for this parameter can be either CONTINUE or ABANDON. The default value for this parameter is ABANDON.
  public defaultResult?: string;

  // Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action defined in the DefaultResult parameter
  public heartbeatTimeout?: number;

  // Instance state to which you want to attach the lifecycle hook. For a list of lifecycle hook types, see [describe-lifecycle-hook-types](https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-lifecycle-hook-types.html#examples)
  public lifecycleTransition?: string;

  // Name of the lifecycle hook.
  public name?: string;

  // Contains additional information that you want to include any time Auto Scaling sends a message to the notification target.
  public notificationMetadata?: string;

  // ARN of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This ARN target can be either an SQS queue or an SNS topic.
  public notificationTargetArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "defaultResult",
        "Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The value for this parameter can be either CONTINUE or ABANDON. The default value for this parameter is ABANDON.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "heartbeatTimeout",
        "Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action defined in the DefaultResult parameter",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lifecycleTransition",
        "Instance state to which you want to attach the lifecycle hook. For a list of lifecycle hook types, see [describe-lifecycle-hook-types](https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-lifecycle-hook-types.html#examples)",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the lifecycle hook.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationMetadata",
        "Contains additional information that you want to include any time Auto Scaling sends a message to the notification target.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationTargetArn",
        "ARN of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This ARN target can be either an SQS queue or an SNS topic.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoscalingGroupName",
        "Name of the Auto Scaling group to which you want to assign the lifecycle hook",
        () => [],
        true,
        false,
      ),
    ];
  }
}
