import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securitycenter_NotificationConfigStreamingConfig,
  securitycenter_NotificationConfigStreamingConfig_GetTypes,
} from "../types/securitycenter_NotificationConfigStreamingConfig";

export interface NotificationConfigArgs {
  /*
The config for triggering streaming-based notifications.
Structure is documented below.
*/
  streamingConfig?: securitycenter_NotificationConfigStreamingConfig;

  // This must be unique within the organization.
  configId?: string;

  // The description of the notification config (max of 1024 characters).
  description?: string;

  /*
The organization whose Cloud Security Command Center the Notification
Config lives in.
*/
  organization?: string;

  /*
The Pub/Sub topic to send notifications to. Its format is
"projects/[project_id]/topics/[topic]".
*/
  pubsubTopic?: string;
}
export class NotificationConfig extends DS_Resource {
  /*
The Pub/Sub topic to send notifications to. Its format is
"projects/[project_id]/topics/[topic]".
*/
  public pubsubTopic?: string;

  /*
The service account that needs "pubsub.topics.publish" permission to
publish to the Pub/Sub topic.
*/
  public serviceAccount?: string;

  /*
The config for triggering streaming-based notifications.
Structure is documented below.
*/
  public streamingConfig?: securitycenter_NotificationConfigStreamingConfig;

  // This must be unique within the organization.
  public configId?: string;

  // The description of the notification config (max of 1024 characters).
  public description?: string;

  /*
The resource name of this notification config, in the format
`organizations/{{organization}}/notificationConfigs/{{config_id}}`.
*/
  public name?: string;

  /*
The organization whose Cloud Security Command Center the Notification
Config lives in.
*/
  public organization?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "pubsubTopic",
        'The Pub/Sub topic to send notifications to. Its format is\n"projects/[project_id]/topics/[topic]".',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "streamingConfig",
        "The config for triggering streaming-based notifications.\nStructure is documented below.",
        () => securitycenter_NotificationConfigStreamingConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configId",
        "This must be unique within the organization.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the notification config (max of 1024 characters).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The organization whose Cloud Security Command Center the Notification\nConfig lives in.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
