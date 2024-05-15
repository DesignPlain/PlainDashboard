import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NotificationArgs {
  // A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription
  CustomAttributes?: Map<string, string>;

  // List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: `"OBJECT_FINALIZE"`, `"OBJECT_METADATA_UPDATE"`, `"OBJECT_DELETE"`, `"OBJECT_ARCHIVE"`
  EventTypes?: Array<string>;

  // Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.
  ObjectNamePrefix?: string;

  // The desired content of the Payload. One of `"JSON_API_V1"` or `"NONE"`.
  PayloadFormat?: string;

  /*
The Cloud PubSub topic to which this subscription publishes. Expects either the
topic name, assumed to belong to the default GCP provider project, or the project-level name,
i.e. `projects/my-gcp-project/topics/my-topic` or `my-topic`. If the project is not set in the provider,
you will need to use the project-level name.

- - -
*/
  Topic?: string;

  // The name of the bucket.
  Bucket?: string;
}
export class Notification extends Resource {
  // A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription
  public CustomAttributes?: Map<string, string>;

  // List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: `"OBJECT_FINALIZE"`, `"OBJECT_METADATA_UPDATE"`, `"OBJECT_DELETE"`, `"OBJECT_ARCHIVE"`
  public EventTypes?: Array<string>;

  // The ID of the created notification.
  public NotificationId?: string;

  // Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.
  public ObjectNamePrefix?: string;

  // The desired content of the Payload. One of `"JSON_API_V1"` or `"NONE"`.
  public PayloadFormat?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The Cloud PubSub topic to which this subscription publishes. Expects either the
topic name, assumed to belong to the default GCP provider project, or the project-level name,
i.e. `projects/my-gcp-project/topics/my-topic` or `my-topic`. If the project is not set in the provider,
you will need to use the project-level name.

- - -
*/
  public Topic?: string;

  // The name of the bucket.
  public Bucket?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Topic",
        "The Cloud PubSub topic to which this subscription publishes. Expects either the\ntopic name, assumed to belong to the default GCP provider project, or the project-level name,\ni.e. `projects/my-gcp-project/topics/my-topic` or `my-topic`. If the project is not set in the provider,\nyou will need to use the project-level name.\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The name of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "CustomAttributes",
        "A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "EventTypes",
        'List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: `"OBJECT_FINALIZE"`, `"OBJECT_METADATA_UPDATE"`, `"OBJECT_DELETE"`, `"OBJECT_ARCHIVE"`',
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ObjectNamePrefix",
        "Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PayloadFormat",
        'The desired content of the Payload. One of `"JSON_API_V1"` or `"NONE"`.',
        [],
        true,
        true,
      ),
    ];
  }
}
