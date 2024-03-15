import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NotificationConfigStreamingConfig } from "../types/NotificationConfigStreamingConfig";

export interface NotificationConfigArgs {
  // This must be unique within the organization.
  ConfigId?: string;

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
  StreamingConfig?: NotificationConfigStreamingConfig;
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
  public StreamingConfig?: NotificationConfigStreamingConfig;

  // This must be unique within the organization.
  public ConfigId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ConfigId",
        "This must be unique within the organization.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the notification config (max of 1024 characters).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Notification\nConfig lives in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PubsubTopic",
        'The Pub/Sub topic to send notifications to. Its format is\n"projects/[project_id]/topics/[topic]".',
      ),
      new DynamicUIProps(
        InputType.String,
        "StreamingConfig",
        "The config for triggering streaming-based notifications.\nStructure is documented below.",
      ),
    ];
  }
}
