import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterNotificationConfigPubsubFilter,
  container_getClusterNotificationConfigPubsubFilter_GetTypes,
} from "./container_getClusterNotificationConfigPubsubFilter";

export interface container_getClusterNotificationConfigPubsub {
  // The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  topic?: string;

  // Whether or not the notification config is enabled
  enabled?: boolean;

  // Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
  filters?: Array<container_getClusterNotificationConfigPubsubFilter>;
}

export function container_getClusterNotificationConfigPubsub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether or not the notification config is enabled",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "filters",
      "Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent",
      container_getClusterNotificationConfigPubsubFilter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topic",
      "The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.",
      [],
      true,
      false,
    ),
  ];
}
