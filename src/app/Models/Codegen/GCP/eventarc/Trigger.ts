import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Eventarc_TriggerTransport,
  Eventarc_TriggerTransport_GetTypes,
} from "../types/Eventarc_TriggerTransport";
import {
  Eventarc_TriggerDestination,
  Eventarc_TriggerDestination_GetTypes,
} from "../types/Eventarc_TriggerDestination";
import {
  Eventarc_TriggerMatchingCriteria,
  Eventarc_TriggerMatchingCriteria_GetTypes,
} from "../types/Eventarc_TriggerMatchingCriteria";

export interface TriggerArgs {
  // Required. Destination specifies where the events should be sent to.
  Destination?: Eventarc_TriggerDestination;

  // Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.
  EventDataContentType?: string;

  /*
Optional. User labels attached to the triggers that can be used to group resources.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location for the resource
  Location?: string;

  // Required. The resource name of the trigger. Must be unique within the location on the project.
  Name?: string;

  // Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  ServiceAccount?: string;

  // Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
  Channel?: string;

  // Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.
  MatchingCriterias?: Array<Eventarc_TriggerMatchingCriteria>;

  // The project for the resource
  Project?: string;

  // Optional. In order to deliver messages, Eventarc may use other GCP products as transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.
  Transport?: Eventarc_TriggerTransport;
}
export class Trigger extends Resource {
  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public Uid?: string;

  // Required. Destination specifies where the events should be sent to.
  public Destination?: Eventarc_TriggerDestination;

  // Optional. In order to deliver messages, Eventarc may use other GCP products as transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.
  public Transport?: Eventarc_TriggerTransport;

  // Output only. The creation time.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.
  public EventDataContentType?: string;

  /*
Optional. User labels attached to the triggers that can be used to group resources.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The project for the resource
  public Project?: string;

  // Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  public ServiceAccount?: string;

  // Output only. The reason(s) why a trigger is in FAILED state.
  public Conditions?: Map<string, string>;

  // Output only. This checksum is computed by the server based on the value of other fields, and may be sent only on create requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // The location for the resource
  public Location?: string;

  // Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.
  public MatchingCriterias?: Array<Eventarc_TriggerMatchingCriteria>;

  // Required. The resource name of the trigger. Must be unique within the location on the project.
  public Name?: string;

  // Output only. The last-modified time.
  public UpdateTime?: string;

  // Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.
  public Channel?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ServiceAccount",
        "Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "MatchingCriterias",
        "Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.",
        Eventarc_TriggerMatchingCriteria_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Destination",
        "Required. Destination specifies where the events should be sent to.",
        Eventarc_TriggerDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "EventDataContentType",
        "Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Required. The resource name of the trigger. Must be unique within the location on the project.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Transport",
        "Optional. In order to deliver messages, Eventarc may use other GCP products as transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.",
        Eventarc_TriggerTransport_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional. User labels attached to the triggers that can be used to group resources.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Channel",
        "Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.",
        [],
        false,
        true,
      ),
    ];
  }
}
