import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ChannelArgs {
  // The location for the resource
  Location?: string;

  /*
Required. The resource name of the channel. Must be unique within the location on the project.



- - -
*/
  Name?: string;

  // The project for the resource
  Project?: string;

  // The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.
  ThirdPartyProvider?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  CryptoKeyName?: string;
}
export class Channel extends Resource {
  // Output only. The creation time.
  public CreateTime?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  public CryptoKeyName?: string;

  // The location for the resource
  public Location?: string;

  /*
Required. The resource name of the channel. Must be unique within the location on the project.



- - -
*/
  public Name?: string;

  // The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.
  public ThirdPartyProvider?: string;

  // Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing.
  public ActivationToken?: string;

  // The project for the resource
  public Project?: string;

  // Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`.
  public PubsubTopic?: string;

  // Output only. The state of a Channel. Possible values: STATE_UNSPECIFIED, PENDING, ACTIVE, INACTIVE
  public State?: string;

  // Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public Uid?: string;

  // Output only. The last-modified time.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Required. The resource name of the channel. Must be unique within the location on the project.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "ThirdPartyProvider",
        "The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CryptoKeyName",
        "Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*/locations/*/keyRings/*/cryptoKeys/*`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
    ];
  }
}
