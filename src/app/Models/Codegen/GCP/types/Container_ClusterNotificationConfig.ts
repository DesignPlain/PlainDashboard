import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNotificationConfigPubsub,
  Container_ClusterNotificationConfigPubsub_GetTypes,
} from "./Container_ClusterNotificationConfigPubsub";

export interface Container_ClusterNotificationConfig {
  // The pubsub config for the cluster's upgrade notifications.
  Pubsub?: Container_ClusterNotificationConfigPubsub;
}

export function Container_ClusterNotificationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Pubsub",
      "The pubsub config for the cluster's upgrade notifications.",
      Container_ClusterNotificationConfigPubsub_GetTypes(),
      true,
      false,
    ),
  ];
}
