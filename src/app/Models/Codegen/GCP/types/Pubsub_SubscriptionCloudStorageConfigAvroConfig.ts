import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Pubsub_SubscriptionCloudStorageConfigAvroConfig {
  // When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.
  WriteMetadata?: boolean;
}

export function Pubsub_SubscriptionCloudStorageConfigAvroConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "WriteMetadata",
      "When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.",
      [],
      false,
      false,
    ),
  ];
}
