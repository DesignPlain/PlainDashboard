import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pubsub_LiteTopicRetentionConfig {
  /*
The provisioned storage, in bytes, per partition. If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.
*/
  perPartitionBytes?: string;

  /*
How long a published message is retained. If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".
*/
  period?: string;
}

export function pubsub_LiteTopicRetentionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "perPartitionBytes",
      "The provisioned storage, in bytes, per partition. If the number of bytes stored\nin any of the topic's partitions grows beyond this value, older messages will be\ndropped to make room for newer ones, regardless of the value of period.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "period",
      "How long a published message is retained. If unset, messages will be retained as\nlong as the bytes retained for each partition is below perPartitionBytes. A\nduration in seconds with up to nine fractional digits, terminated by 's'.\nExample: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
