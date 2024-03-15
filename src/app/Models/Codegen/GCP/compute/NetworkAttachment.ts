import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NetworkAttachmentConnectionEndpoint } from "../types/NetworkAttachmentConnectionEndpoint";

export interface NetworkAttachmentArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.


- - -
*/
  Region?: string;

  // An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.
  Subnetworks?: Array<string>;

  /*
The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules.
Possible values are: `ACCEPT_AUTOMATIC`, `ACCEPT_MANUAL`, `INVALID`.
*/
  ConnectionPreference?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  Name?: string;

  // Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.
  ProducerAcceptLists?: Array<string>;

  // Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.
  ProducerRejectLists?: Array<string>;
}
export class NetworkAttachment extends Resource {
  // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  public Name?: string;

  /*
The URL of the network which the Network Attachment belongs to. Practically it is inferred by fetching the network of the first subnetwork associated.
Because it is required that all the subnetworks must be from the same network, it is assured that the Network Attachment belongs to the same network as all the subnetworks.
*/
  public Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An array of connections for all the producers connected to this network attachment.
Structure is documented below.
*/
  public ConnectionEndpoints?: Array<NetworkAttachmentConnectionEndpoint>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  // An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.
  public Subnetworks?: Array<string>;

  // Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.
  public ProducerRejectLists?: Array<string>;

  /*
URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.


- - -
*/
  public Region?: string;

  /*
The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules.
Possible values are: `ACCEPT_AUTOMATIC`, `ACCEPT_MANUAL`, `INVALID`.
*/
  public ConnectionPreference?: string;

  // Type of the resource.
  public Kind?: string;

  // Server-defined URL for the resource.
  public SelfLink?: string;

  // Server-defined URL for this resource's resource id.
  public SelfLinkWithId?: string;

  /*
Fingerprint of this resource. A hash of the contents stored in this object. This
field is used in optimistic locking. An up-to-date fingerprint must be provided in order to patch.
*/
  public Fingerprint?: string;

  // Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.
  public ProducerAcceptLists?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ProducerAcceptLists",
        "Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ProducerRejectLists",
        "Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Subnetworks",
        "An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionPreference",
        "The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules.\nPossible values are: `ACCEPT_AUTOMATIC`, `ACCEPT_MANUAL`, `INVALID`.",
      ),
    ];
  }
}