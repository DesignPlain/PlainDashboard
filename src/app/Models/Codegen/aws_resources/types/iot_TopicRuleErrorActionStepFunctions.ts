import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iot_TopicRuleErrorActionStepFunctions {
  // The prefix used to generate, along with a UUID, the unique state machine execution name.
  executionNamePrefix?: string;

  // The ARN of the IAM role that grants access to start execution of the state machine.
  roleArn?: string;

  // The name of the Step Functions state machine whose execution will be started.
  stateMachineName?: string;
}

export function iot_TopicRuleErrorActionStepFunctions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "executionNamePrefix",
      "The prefix used to generate, along with a UUID, the unique state machine execution name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM role that grants access to start execution of the state machine.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stateMachineName",
      "The name of the Step Functions state machine whose execution will be started.",
      [],
      true,
      false,
    ),
  ];
}
