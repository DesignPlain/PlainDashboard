import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FirewallEndpointArgs {
  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location (zone) of the firewall endpoint.
  Location?: string;

  // The name of the firewall endpoint resource.
  Name?: string;

  /*
The name of the parent this firewall endpoint belongs to.
Format: organizations/{organization_id}.


- - -
*/
  Parent?: string;
}
export class FirewallEndpoint extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of the firewall endpoint resource.
  public Name?: string;

  /*
The name of the parent this firewall endpoint belongs to.
Format: organizations/{organization_id}.


- - -
*/
  public Parent?: string;

  // Whether reconciling is in progress, recommended per https://google.aip.dev/128.
  public Reconciling?: boolean;

  // Server-defined URL of this resource.
  public SelfLink?: string;

  // Time the firewall endpoint was created in UTC.
  public CreateTime?: string;

  // The location (zone) of the firewall endpoint.
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The current state of the endpoint.
  public State?: string;

  // Time the firewall endpoint was updated in UTC.
  public UpdateTime?: string;

  /*
List of networks that are associated with this endpoint in the local zone.
This is a projection of the FirewallEndpointAssociations pointing at this
endpoint. A network will only appear in this list after traffic routing is
fully configured. Format: projects/{project}/global/networks/{name}.
*/
  public AssociatedNetworks?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location (zone) of the firewall endpoint.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the firewall endpoint resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The name of the parent this firewall endpoint belongs to.\nFormat: organizations/{organization_id}.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A map of key/value label pairs to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
