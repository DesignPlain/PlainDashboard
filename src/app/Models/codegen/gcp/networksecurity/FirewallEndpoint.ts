import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface FirewallEndpointArgs {
  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location (zone) of the firewall endpoint.
  location?: string;

  // The name of the firewall endpoint resource.
  name?: string;

  /*
The name of the parent this firewall endpoint belongs to.
Format: organizations/{organization_id}.


- - -
*/
  parent?: string;
}
export class FirewallEndpoint extends DS_Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The location (zone) of the firewall endpoint.
  public location?: string;

  // Whether reconciling is in progress, recommended per https://google.aip.dev/128.
  public reconciling?: boolean;

  // Time the firewall endpoint was created in UTC.
  public createTime?: string;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name of the firewall endpoint resource.
  public name?: string;

  /*
The name of the parent this firewall endpoint belongs to.
Format: organizations/{organization_id}.


- - -
*/
  public parent?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Server-defined URL of this resource.
  public selfLink?: string;

  // The current state of the endpoint.
  public state?: string;

  // Time the firewall endpoint was updated in UTC.
  public updateTime?: string;

  /*
List of networks that are associated with this endpoint in the local zone.
This is a projection of the FirewallEndpointAssociations pointing at this
endpoint. A network will only appear in this list after traffic routing is
fully configured. Format: projects/{project}/global/networks/{name}.
*/
  public associatedNetworks?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the firewall endpoint resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The name of the parent this firewall endpoint belongs to.\nFormat: organizations/{organization_id}.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'A map of key/value label pairs to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location (zone) of the firewall endpoint.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
