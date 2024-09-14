import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface inspector_AssessmentTemplateEventSubscription {
  // The event for which you want to receive SNS notifications. Valid values are `ASSESSMENT_RUN_STARTED`, `ASSESSMENT_RUN_COMPLETED`, `ASSESSMENT_RUN_STATE_CHANGED`, and `FINDING_REPORTED`.
  event?: string;

  // The ARN of the SNS topic to which notifications are sent.
  topicArn?: string;
}

export function inspector_AssessmentTemplateEventSubscription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "event",
      "The event for which you want to receive SNS notifications. Valid values are `ASSESSMENT_RUN_STARTED`, `ASSESSMENT_RUN_COMPLETED`, `ASSESSMENT_RUN_STATE_CHANGED`, and `FINDING_REPORTED`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "The ARN of the SNS topic to which notifications are sent.",
      () => [],
      true,
      false,
    ),
  ];
}
