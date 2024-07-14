import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ses_EventDestinationKinesisDestination {
  // The ARN of the role that has permissions to access the Kinesis Stream
  roleArn?: string;

  // The ARN of the Kinesis Stream
  streamArn?: string;
}

export function ses_EventDestinationKinesisDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the role that has permissions to access the Kinesis Stream",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamArn",
      "The ARN of the Kinesis Stream",
      [],
      true,
      false,
    ),
  ];
}
