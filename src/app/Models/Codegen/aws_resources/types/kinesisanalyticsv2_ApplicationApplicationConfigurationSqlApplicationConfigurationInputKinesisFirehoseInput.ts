import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
  // The ARN of the delivery stream.
  resourceArn?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "The ARN of the delivery stream.",
      [],
      true,
      false,
    ),
  ];
}
