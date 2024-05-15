import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_NotificationConfigStreamingConfig,
  Securitycenter_NotificationConfigStreamingConfig_GetTypes,
} from "../types/Securitycenter_NotificationConfigStreamingConfig";

export interface NotificationConfigArgs {
  // The description of the notification config (max of 1024 characters).
  Description?: string;

  /*
The organization whose Cloud Security Command Center the Notification
Config lives in.
*/
  Organization?: string;

  /*
The Pub/Sub topic to send notifications to. Its format is
"projects/[project_id]/topics/[topic]".
*/
  PubsubTopic?: string;

  /*
The config for triggering streaming-based notifications.
Structure is documented below.
*/
  StreamingConfig?: Securitycenter_NotificationConfigStreamingConfig;

  // This must be unique within the organization.
  ConfigId?: string;
}
export class NotificationConfig extends Resource {
  // The description of the notification config (max of 1024 characters).
  public Description?: string;

  /*
The resource name of this notification config, in the format
`organizations/{{organization}}/notificationConfigs/{{config_id}}`.
*/
  public Name?: string;

  /*
The organization whose Cloud Security Command Center the Notification
Config lives in.
*/
  public Organization?: string;

  /*
The Pub/Sub topic to send notifications to. Its format is
"projects/[project_id]/topics/[topic]".
*/
  public PubsubTopic?: string;

  /*
The service account that needs "pubsub.topics.publish" permission to
publish to the Pub/Sub topic.
*/
  public ServiceAccount?: string;

  /*
The config for triggering streaming-based notifications.
Structure is documented below.
*/
  public StreamingConfig?: Securitycenter_NotificationConfigStreamingConfig;

  // This must be unique within the organization.
  public ConfigId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Notification\nConfig lives in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PubsubTopic",
        'The Pub/Sub topic to send notifications to. Its format is\n"projects/[project_id]/topics/[topic]".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "StreamingConfig",
        "The config for triggering streaming-based notifications.\nStructure is documented below.",
        Securitycenter_NotificationConfigStreamingConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ConfigId",
        "This must be unique within the organization.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the notification config (max of 1024 characters).",
        [],
        false,
        false,
      ),
    ];
  }
}
