import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterNotificationConfigPubsubFilter,
  Container_ClusterNotificationConfigPubsubFilter_GetTypes,
} from "./Container_ClusterNotificationConfigPubsubFilter";

export interface Container_ClusterNotificationConfigPubsub {
  // Whether or not the notification config is enabled
  Enabled?: boolean;

  // Choose what type of notifications you want to receive. If no filters are applied, you'll receive all notification types. Structure is documented below.
  Filter?: Container_ClusterNotificationConfigPubsubFilter;

  // The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: `projects/{project}/topics/{topic}`.
  Topic?: string;
}

export function Container_ClusterNotificationConfigPubsub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: `projects/{project}/topics/{topic}`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not the notification config is enabled",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Filter",
      "Choose what type of notifications you want to receive. If no filters are applied, you'll receive all notification types. Structure is documented below.",
      Container_ClusterNotificationConfigPubsubFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
