import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface StreamConsumerArgs {
  // Amazon Resource Name (ARN) of the data stream the consumer is registered with.
  streamArn?: string;

  // Name of the stream consumer.
  name?: string;
}
export class StreamConsumer extends Resource {
  // Amazon Resource Name (ARN) of the stream consumer.
  public arn?: string;

  // Approximate timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of when the stream consumer was created.
  public creationTimestamp?: string;

  // Name of the stream consumer.
  public name?: string;

  // Amazon Resource Name (ARN) of the data stream the consumer is registered with.
  public streamArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "streamArn",
        "Amazon Resource Name (ARN) of the data stream the consumer is registered with.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the stream consumer.",
        [],
        false,
        true,
      ),
    ];
  }
}
