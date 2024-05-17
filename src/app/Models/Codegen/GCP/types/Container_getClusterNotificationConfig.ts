import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNotificationConfigPubsub,
  Container_getClusterNotificationConfigPubsub_GetTypes,
} from "./Container_getClusterNotificationConfigPubsub";

export interface Container_getClusterNotificationConfig {
  // Notification config for Cloud Pub/Sub
  Pubsubs?: Array<Container_getClusterNotificationConfigPubsub>;
}

export function Container_getClusterNotificationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Pubsubs",
      "Notification config for Cloud Pub/Sub",
      Container_getClusterNotificationConfigPubsub_GetTypes(),
      true,
      false,
    ),
  ];
}
