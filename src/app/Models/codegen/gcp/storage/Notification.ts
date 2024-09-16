import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NotificationArgs {
  // The name of the bucket.
  bucket?: string;

  // A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription
  customAttributes?: Map<string, string>;

  // List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: `"OBJECT_FINALIZE"`, `"OBJECT_METADATA_UPDATE"`, `"OBJECT_DELETE"`, `"OBJECT_ARCHIVE"`
  eventTypes?: Array<string>;

  // Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.
  objectNamePrefix?: string;

  // The desired content of the Payload. One of `"JSON_API_V1"` or `"NONE"`.
  payloadFormat?: string;

  /*
The Cloud PubSub topic to which this subscription publishes. Expects either the
topic name, assumed to belong to the default GCP provider project, or the project-level name,
i.e. `projects/my-gcp-project/topics/my-topic` or `my-topic`. If the project is not set in the provider,
you will need to use the project-level name.

- - -
*/
  topic?: string;
}
export class Notification extends DS_Resource {
  // A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription
  public customAttributes?: Map<string, string>;

  // List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: `"OBJECT_FINALIZE"`, `"OBJECT_METADATA_UPDATE"`, `"OBJECT_DELETE"`, `"OBJECT_ARCHIVE"`
  public eventTypes?: Array<string>;

  // The ID of the created notification.
  public notificationId?: string;

  // Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.
  public objectNamePrefix?: string;

  // The desired content of the Payload. One of `"JSON_API_V1"` or `"NONE"`.
  public payloadFormat?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
The Cloud PubSub topic to which this subscription publishes. Expects either the
topic name, assumed to belong to the default GCP provider project, or the project-level name,
i.e. `projects/my-gcp-project/topics/my-topic` or `my-topic`. If the project is not set in the provider,
you will need to use the project-level name.

- - -
*/
  public topic?: string;

  // The name of the bucket.
  public bucket?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'eventTypes',
        'List of event type filters for this notification config. If not specified, Cloud Storage will send notifications for all event types. The valid types are: `"OBJECT_FINALIZE"`, `"OBJECT_METADATA_UPDATE"`, `"OBJECT_DELETE"`, `"OBJECT_ARCHIVE"`',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'objectNamePrefix',
        'Specifies a prefix path filter for this notification config. Cloud Storage will only send notifications for objects in this bucket whose names begin with the specified prefix.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'payloadFormat',
        'The desired content of the Payload. One of `"JSON_API_V1"` or `"NONE"`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'topic',
        'The Cloud PubSub topic to which this subscription publishes. Expects either the\ntopic name, assumed to belong to the default GCP provider project, or the project-level name,\ni.e. `projects/my-gcp-project/topics/my-topic` or `my-topic`. If the project is not set in the provider,\nyou will need to use the project-level name.\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'The name of the bucket.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'customAttributes',
        'A set of key/value attribute pairs to attach to each Cloud PubSub message published for this notification subscription',
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
