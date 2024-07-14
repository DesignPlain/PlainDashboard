import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface EventStreamArgs {
  // The application ID.
  applicationId?: string;

  // The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.
  destinationStreamArn?: string;

  // The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.
  roleArn?: string;
}
export class EventStream extends Resource {
  // The application ID.
  public applicationId?: string;

  // The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.
  public destinationStreamArn?: string;

  // The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.
  public roleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "The application ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationStreamArn",
        "The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.",
        [],
        true,
        false,
      ),
    ];
  }
}
