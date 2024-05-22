import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_ServiceAttachmentConsumerAcceptList,
  compute_ServiceAttachmentConsumerAcceptList_GetTypes,
} from "../types/compute_ServiceAttachmentConsumerAcceptList";
import {
  compute_ServiceAttachmentConnectedEndpoint,
  compute_ServiceAttachmentConnectedEndpoint_GetTypes,
} from "../types/compute_ServiceAttachmentConnectedEndpoint";

export interface ServiceAttachmentArgs {
  /*
The connection preference to use for this service attachment. Valid
values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
*/
  connectionPreference?: string;

  /*
An array of projects that are allowed to connect to this service
attachment.
Structure is documented below.
*/
  consumerAcceptLists?: Array<compute_ServiceAttachmentConsumerAcceptList>;

  // An optional description of this resource.
  description?: string;

  /*
If true, enable the proxy protocol which is for supplying client TCP/IP
address data in TCP connections that traverse proxies on their way to
destination servers.


- - -
*/
  enableProxyProtocol?: boolean;

  // An array of subnets that is provided for NAT in this service attachment.
  natSubnets?: Array<string>;

  // URL of the region where the resource resides.
  region?: string;

  /*
An array of projects that are not allowed to connect to this service
attachment.
*/
  consumerRejectLists?: Array<string>;

  /*
If specified, the domain name will be used during the integration between
the PSC connected endpoints and the Cloud DNS. For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.
*/
  domainNames?: Array<string>;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.
If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.
*/
  reconcileConnections?: boolean;

  /*
The URL of a forwarding rule that represents the service identified by
this service attachment.
*/
  targetService?: string;
}
export class ServiceAttachment extends Resource {
  // An array of subnets that is provided for NAT in this service attachment.
  public natSubnets?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // URL of the region where the resource resides.
  public region?: string;

  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public fingerprint?: string;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  /*
An array of projects that are not allowed to connect to this service
attachment.
*/
  public consumerRejectLists?: Array<string>;

  // The URI of the created resource.
  public selfLink?: string;

  /*
This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.
If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.
*/
  public reconcileConnections?: boolean;

  /*
An array of the consumer forwarding rules connected to this service
attachment.
Structure is documented below.
*/
  public connectedEndpoints?: Array<compute_ServiceAttachmentConnectedEndpoint>;

  // An optional description of this resource.
  public description?: string;

  /*
If specified, the domain name will be used during the integration between
the PSC connected endpoints and the Cloud DNS. For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.
*/
  public domainNames?: Array<string>;

  /*
If true, enable the proxy protocol which is for supplying client TCP/IP
address data in TCP connections that traverse proxies on their way to
destination servers.


- - -
*/
  public enableProxyProtocol?: boolean;

  /*
The URL of a forwarding rule that represents the service identified by
this service attachment.
*/
  public targetService?: string;

  /*
The connection preference to use for this service attachment. Valid
values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
*/
  public connectionPreference?: string;

  /*
An array of projects that are allowed to connect to this service
attachment.
Structure is documented below.
*/
  public consumerAcceptLists?: Array<compute_ServiceAttachmentConsumerAcceptList>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "consumerAcceptLists",
        "An array of projects that are allowed to connect to this service\nattachment.\nStructure is documented below.",
        compute_ServiceAttachmentConsumerAcceptList_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionPreference",
        'The connection preference to use for this service attachment. Valid\nvalues include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableProxyProtocol",
        "If true, enable the proxy protocol which is for supplying client TCP/IP\naddress data in TCP connections that traverse proxies on their way to\ndestination servers.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "natSubnets",
        "An array of subnets that is provided for NAT in this service attachment.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "URL of the region where the resource resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "consumerRejectLists",
        "An array of projects that are not allowed to connect to this service\nattachment.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "domainNames",
        'If specified, the domain name will be used during the integration between\nthe PSC connected endpoints and the Cloud DNS. For example, this is a\nvalid domain name: "p.mycompany.com.". Current max number of domain names\nsupported is 1.',
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "reconcileConnections",
        "This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.\nIf false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .\nIf true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetService",
        "The URL of a forwarding rule that represents the service identified by\nthis service attachment.",
        [],
        true,
        true,
      ),
    ];
  }
}
