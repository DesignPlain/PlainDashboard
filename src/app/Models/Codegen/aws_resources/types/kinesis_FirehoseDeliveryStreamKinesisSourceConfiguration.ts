import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration {
  // The kinesis stream used as the source of the firehose delivery stream.
  kinesisStreamArn?: string;

  // The ARN of the role that provides access to the source Kinesis stream.
  roleArn?: string;
}

export function kinesis_FirehoseDeliveryStreamKinesisSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kinesisStreamArn",
      "The kinesis stream used as the source of the firehose delivery stream.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the role that provides access to the source Kinesis stream.",
      [],
      true,
      true,
    ),
  ];
}
