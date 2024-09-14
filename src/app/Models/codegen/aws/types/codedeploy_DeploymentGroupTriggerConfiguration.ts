import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codedeploy_DeploymentGroupTriggerConfiguration {
  // The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation](http://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-sns-event-notifications-create-trigger.html) for all possible values.
  triggerEvents?: Array<string>;

  // The name of the notification trigger.
  triggerName?: string;

  // The ARN of the SNS topic through which notifications are sent.
  triggerTargetArn?: string;
}

export function codedeploy_DeploymentGroupTriggerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "triggerTargetArn",
      "The ARN of the SNS topic through which notifications are sent.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "triggerEvents",
      "The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation](http://docs.aws.amazon.com/codedeploy/latest/userguide/monitoring-sns-event-notifications-create-trigger.html) for all possible values.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "triggerName",
      "The name of the notification trigger.",
      () => [],
      true,
      false,
    ),
  ];
}
