import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssmincidents_ResponsePlanIncidentTemplateNotificationTarget {
  /*
The ARN of the Amazon SNS topic.

The following arguments are optional:
*/
  snsTopicArn?: string;
}

export function ssmincidents_ResponsePlanIncidentTemplateNotificationTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "snsTopicArn",
      "The ARN of the Amazon SNS topic.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
  ];
}
