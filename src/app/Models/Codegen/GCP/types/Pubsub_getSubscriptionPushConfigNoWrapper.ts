import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pubsub_getSubscriptionPushConfigNoWrapper {
  /*
When true, writes the Pub/Sub message metadata to
'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.
*/
  writeMetadata?: boolean;
}

export function pubsub_getSubscriptionPushConfigNoWrapper_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "writeMetadata",
      "When true, writes the Pub/Sub message metadata to\n'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. Writes the\nPub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.",
      [],
      true,
      false,
    ),
  ];
}
