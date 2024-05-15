import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNotificationConfigPubsubFilter,
  Container_getClusterNotificationConfigPubsubFilter_GetTypes,
} from "./Container_getClusterNotificationConfigPubsubFilter";

export interface Container_getClusterNotificationConfigPubsub {
  // Whether or not the notification config is enabled
  Enabled?: boolean;

  // Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
  Filters?: Array<Container_getClusterNotificationConfigPubsubFilter>;

  // The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  Topic?: string;
}

export function Container_getClusterNotificationConfigPubsub_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether or not the notification config is enabled",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Filters",
      "Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent",
      Container_getClusterNotificationConfigPubsubFilter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.",
      [],
      true,
      false,
    ),
  ];
}
