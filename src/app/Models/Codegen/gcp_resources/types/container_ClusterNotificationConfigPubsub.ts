import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterNotificationConfigPubsubFilter,
  container_ClusterNotificationConfigPubsubFilter_GetTypes,
} from "./container_ClusterNotificationConfigPubsubFilter";

export interface container_ClusterNotificationConfigPubsub {
  // Choose what type of notifications you want to receive. If no filters are applied, you'll receive all notification types. Structure is documented below.
  filter?: container_ClusterNotificationConfigPubsubFilter;

  // The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: `projects/{project}/topics/{topic}`.
  topic?: string;

  // Whether or not the notification config is enabled
  enabled?: boolean;
}

export function container_ClusterNotificationConfigPubsub_GetTypes(): DynamicUIProps[] {
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
      InputType.Object,
      "filter",
      "Choose what type of notifications you want to receive. If no filters are applied, you'll receive all notification types. Structure is documented below.",
      container_ClusterNotificationConfigPubsubFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topic",
      "The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: `projects/{project}/topics/{topic}`.",
      [],
      false,
      false,
    ),
  ];
}
