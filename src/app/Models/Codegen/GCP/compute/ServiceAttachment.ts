import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ServiceAttachmentConsumerAcceptList,
  Compute_ServiceAttachmentConsumerAcceptList_GetTypes,
} from "../types/Compute_ServiceAttachmentConsumerAcceptList";
import {
  Compute_ServiceAttachmentConnectedEndpoint,
  Compute_ServiceAttachmentConnectedEndpoint_GetTypes,
} from "../types/Compute_ServiceAttachmentConnectedEndpoint";

export interface ServiceAttachmentArgs {
  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.
If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.
*/
  ReconcileConnections?: boolean;

  // URL of the region where the resource resides.
  Region?: string;

  /*
The URL of a forwarding rule that represents the service identified by
this service attachment.
*/
  TargetService?: string;

  /*
The connection preference to use for this service attachment. Valid
values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
*/
  ConnectionPreference?: string;

  /*
An array of projects that are allowed to connect to this service
attachment.
Structure is documented below.
*/
  ConsumerAcceptLists?: Array<Compute_ServiceAttachmentConsumerAcceptList>;

  /*
If true, enable the proxy protocol which is for supplying client TCP/IP
address data in TCP connections that traverse proxies on their way to
destination servers.


- - -
*/
  EnableProxyProtocol?: boolean;

  // An array of subnets that is provided for NAT in this service attachment.
  NatSubnets?: Array<string>;

  /*
An array of projects that are not allowed to connect to this service
attachment.
*/
  ConsumerRejectLists?: Array<string>;

  // An optional description of this resource.
  Description?: string;

  /*
If specified, the domain name will be used during the integration between
the PSC connected endpoints and the Cloud DNS. For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.
*/
  DomainNames?: Array<string>;
}
export class ServiceAttachment extends Resource {
  /*
If specified, the domain name will be used during the integration between
the PSC connected endpoints and the Cloud DNS. For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.
*/
  public DomainNames?: Array<string>;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public Name?: string;

  /*
The connection preference to use for this service attachment. Valid
values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
*/
  public ConnectionPreference?: string;

  // An optional description of this resource.
  public Description?: string;

  // An array of subnets that is provided for NAT in this service attachment.
  public NatSubnets?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // URL of the region where the resource resides.
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The URL of a forwarding rule that represents the service identified by
this service attachment.
*/
  public TargetService?: string;

  /*
An array of projects that are not allowed to connect to this service
attachment.
*/
  public ConsumerRejectLists?: Array<string>;

  /*
If true, enable the proxy protocol which is for supplying client TCP/IP
address data in TCP connections that traverse proxies on their way to
destination servers.


- - -
*/
  public EnableProxyProtocol?: boolean;

  /*
An array of projects that are allowed to connect to this service
attachment.
Structure is documented below.
*/
  public ConsumerAcceptLists?: Array<Compute_ServiceAttachmentConsumerAcceptList>;

  /*
This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.
If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.
*/
  public ReconcileConnections?: boolean;

  /*
An array of the consumer forwarding rules connected to this service
attachment.
Structure is documented below.
*/
  public ConnectedEndpoints?: Array<Compute_ServiceAttachmentConnectedEndpoint>;

  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public Fingerprint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "TargetService",
        "The URL of a forwarding rule that represents the service identified by\nthis service attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionPreference",
        'The connection preference to use for this service attachment. Valid\nvalues include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NatSubnets",
        "An array of subnets that is provided for NAT in this service attachment.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ConsumerRejectLists",
        "An array of projects that are not allowed to connect to this service\nattachment.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DomainNames",
        'If specified, the domain name will be used during the integration between\nthe PSC connected endpoints and the Cloud DNS. For example, this is a\nvalid domain name: "p.mycompany.com.". Current max number of domain names\nsupported is 1.',
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ReconcileConnections",
        "This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.\nIf false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .\nIf true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "URL of the region where the resource resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ConsumerAcceptLists",
        "An array of projects that are allowed to connect to this service\nattachment.\nStructure is documented below.",
        Compute_ServiceAttachmentConsumerAcceptList_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableProxyProtocol",
        "If true, enable the proxy protocol which is for supplying client TCP/IP\naddress data in TCP connections that traverse proxies on their way to\ndestination servers.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
    ];
  }
}
