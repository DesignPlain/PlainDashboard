import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination {
  // The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email events to.
  deliveryStreamArn?: string;

  // The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.
  iamRoleArn?: string;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryStreamArn",
      "The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email events to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iamRoleArn",
      "The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.",
      [],
      true,
      false,
    ),
  ];
}
