import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  eventarc_TriggerTransport,
  eventarc_TriggerTransport_GetTypes,
} from "../types/eventarc_TriggerTransport";
import {
  eventarc_TriggerDestination,
  eventarc_TriggerDestination_GetTypes,
} from "../types/eventarc_TriggerDestination";
import {
  eventarc_TriggerMatchingCriteria,
  eventarc_TriggerMatchingCriteria_GetTypes,
} from "../types/eventarc_TriggerMatchingCriteria";

export interface TriggerArgs {
  // Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
  channel?: string;

  // Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  serviceAccount?: string;

  // Optional. In order to deliver messages, Eventarc may use other GCP products as transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.
  transport?: eventarc_TriggerTransport;

  // Required. Destination specifies where the events should be sent to.
  destination?: eventarc_TriggerDestination;

  // Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.
  eventDataContentType?: string;

  /*
Optional. User labels attached to the triggers that can be used to group resources.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  // Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.
  matchingCriterias?: Array<eventarc_TriggerMatchingCriteria>;

  // Required. The resource name of the trigger. Must be unique within the location on the project.
  name?: string;

  // The project for the resource
  project?: string;
}
export class Trigger extends DS_Resource {
  // Output only. The creation time.
  public createTime?: string;

  // Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  public serviceAccount?: string;

  // Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public uid?: string;

  // Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
  public channel?: string;

  // Output only. This checksum is computed by the server based on the value of other fields, and may be sent only on create requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  /*
Optional. User labels attached to the triggers that can be used to group resources.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location for the resource
  public location?: string;

  // Output only. The last-modified time.
  public updateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Required. Destination specifies where the events should be sent to.
  public destination?: eventarc_TriggerDestination;

  // Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.
  public eventDataContentType?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Optional. In order to deliver messages, Eventarc may use other GCP products as transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.
  public transport?: eventarc_TriggerTransport;

  // Output only. The reason(s) why a trigger is in FAILED state.
  public conditions?: Map<string, string>;

  // Required. The resource name of the trigger. Must be unique within the location on the project.
  public name?: string;

  // The project for the resource
  public project?: string;

  // Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.
  public matchingCriterias?: Array<eventarc_TriggerMatchingCriteria>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "matchingCriterias",
        "Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.",
        () => eventarc_TriggerMatchingCriteria_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Required. The resource name of the trigger. Must be unique within the location on the project.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccount",
        "Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destination",
        "Required. Destination specifies where the events should be sent to.",
        () => eventarc_TriggerDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventDataContentType",
        "Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. User labels attached to the triggers that can be used to group resources.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "channel",
        "Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "transport",
        "Optional. In order to deliver messages, Eventarc may use other GCP products as transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.",
        () => eventarc_TriggerTransport_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
    ];
  }
}
