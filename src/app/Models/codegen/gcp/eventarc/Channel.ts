import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ChannelArgs {
  // The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.
  thirdPartyProvider?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  cryptoKeyName?: string;

  // The location for the resource
  location?: string;

  /*
Required. The resource name of the channel. Must be unique within the location on the project.



- - -
*/
  name?: string;

  // The project for the resource
  project?: string;
}
export class Channel extends DS_Resource {
  // Output only. The activation token for the channel. The token must be used by the provider to register the channel for publishing.
  public activationToken?: string;

  // Output only. The creation time.
  public createTime?: string;

  // Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/-/locations/-/keyRings/-/cryptoKeys/-`.
  public cryptoKeyName?: string;

  /*
Required. The resource name of the channel. Must be unique within the location on the project.



- - -
*/
  public name?: string;

  // Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`.
  public pubsubTopic?: string;

  // Output only. The state of a Channel. Possible values: STATE_UNSPECIFIED, PENDING, ACTIVE, INACTIVE
  public state?: string;

  // Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public uid?: string;

  // The location for the resource
  public location?: string;

  // The project for the resource
  public project?: string;

  // The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.
  public thirdPartyProvider?: string;

  // Output only. The last-modified time.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Required. The resource name of the channel. Must be unique within the location on the project.\n\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project for the resource',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'thirdPartyProvider',
        'The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be granted permissions to publish events to the channel. Format: `projects/{project}/locations/{location}/providers/{provider_id}`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cryptoKeyName',
        'Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/*/locations/*/keyRings/*/cryptoKeys/*`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        true,
        true,
      ),
    ];
  }
}
