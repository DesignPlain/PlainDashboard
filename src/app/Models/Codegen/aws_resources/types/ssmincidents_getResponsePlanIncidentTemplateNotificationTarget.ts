import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssmincidents_getResponsePlanIncidentTemplateNotificationTarget {
  // The ARN of the Amazon SNS topic.
  snsTopicArn?: string;
}

export function ssmincidents_getResponsePlanIncidentTemplateNotificationTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "snsTopicArn",
      "The ARN of the Amazon SNS topic.",
      [],
      true,
      false,
    ),
  ];
}
