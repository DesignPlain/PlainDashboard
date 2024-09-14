import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_NetworkAttachmentConnectionEndpoint,
  compute_NetworkAttachmentConnectionEndpoint_GetTypes,
} from "../types/compute_NetworkAttachmentConnectionEndpoint";

export interface NetworkAttachmentArgs {
  // An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.
  subnetworks?: Array<string>;

  /*
The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules.
Possible values are: `ACCEPT_AUTOMATIC`, `ACCEPT_MANUAL`, `INVALID`.
*/
  connectionPreference?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  description?: string;

  // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  name?: string;

  // Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.
  producerAcceptLists?: Array<string>;

  // Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.
  producerRejectLists?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.


- - -
*/
  region?: string;
}
export class NetworkAttachment extends DS_Resource {
  /*
Fingerprint of this resource. A hash of the contents stored in this object. This
field is used in optimistic locking. An up-to-date fingerprint must be provided in order to patch.
*/
  public fingerprint?: string;

  // Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.
  public producerAcceptLists?: Array<string>;

  // Server-defined URL for this resource's resource id.
  public selfLinkWithId?: string;

  /*
An array of connections for all the producers connected to this network attachment.
Structure is documented below.
*/
  public connectionEndpoints?: Array<compute_NetworkAttachmentConnectionEndpoint>;

  // An optional description of this resource. Provide this property when you create the resource.
  public description?: string;

  /*
The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules.
Possible values are: `ACCEPT_AUTOMATIC`, `ACCEPT_MANUAL`, `INVALID`.
*/
  public connectionPreference?: string;

  // Type of the resource.
  public kind?: string;

  /*
The URL of the network which the Network Attachment belongs to. Practically it is inferred by fetching the network of the first subnetwork associated.
Because it is required that all the subnetworks must be from the same network, it is assured that the Network Attachment belongs to the same network as all the subnetworks.
*/
  public network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Server-defined URL for the resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  public name?: string;

  // An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.
  public subnetworks?: Array<string>;

  // Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.
  public producerRejectLists?: Array<string>;

  /*
URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.


- - -
*/
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "producerAcceptLists",
        "Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "producerRejectLists",
        "Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetworks",
        "An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionPreference",
        "The connection preference of service attachment. The value can be set to ACCEPT_AUTOMATIC. An ACCEPT_AUTOMATIC service attachment is one that always accepts the connection from consumer forwarding rules.\nPossible values are: `ACCEPT_AUTOMATIC`, `ACCEPT_MANUAL`, `INVALID`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when you create the resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
