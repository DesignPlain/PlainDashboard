import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_getClusterNotificationConfigPubsub,
  container_getClusterNotificationConfigPubsub_GetTypes,
} from "./container_getClusterNotificationConfigPubsub";

export interface container_getClusterNotificationConfig {
  // Notification config for Cloud Pub/Sub
  pubsubs?: Array<container_getClusterNotificationConfigPubsub>;
}

export function container_getClusterNotificationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pubsubs",
      "Notification config for Cloud Pub/Sub",
      container_getClusterNotificationConfigPubsub_GetTypes(),
      true,
      false,
    ),
  ];
}
