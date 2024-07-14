import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ses_EventDestinationSnsDestination {
  // The ARN of the SNS topic
  topicArn?: string;
}

export function ses_EventDestinationSnsDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "The ARN of the SNS topic",
      [],
      true,
      false,
    ),
  ];
}
