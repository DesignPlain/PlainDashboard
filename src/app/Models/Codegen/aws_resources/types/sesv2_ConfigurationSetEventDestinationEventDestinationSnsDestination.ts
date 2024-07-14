import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination {
  // The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to.
  topicArn?: string;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationSnsDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to.",
      [],
      true,
      false,
    ),
  ];
}
