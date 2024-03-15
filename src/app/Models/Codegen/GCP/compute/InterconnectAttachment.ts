import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InterconnectAttachmentPrivateInterconnectInfo } from "../types/InterconnectAttachmentPrivateInterconnectInfo";

export interface InterconnectAttachmentArgs {
  // An optional description of this resource.
  Description?: string;

  /*
Whether the VLAN attachment is enabled or disabled.  When using
PARTNER type this will Pre-Activate the interconnect attachment
*/
  AdminEnabled?: boolean;

  /*
Desired availability domain for the attachment. Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
*/
  EdgeAvailabilityDomain?: string;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
using PARTNER type this will be managed upstream.
*/
  VlanTag8021q?: number;

  /*
URL of the underlying Interconnect object that this attachment's
traffic will traverse through. Required if type is DEDICATED, must not
be set if type is PARTNER.
*/
  Interconnect?: string;

  // Region where the regional interconnect attachment resides.
  Region?: string;

  /*
URL of the cloud router to be used for dynamic routing. This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.
*/
  Router?: string;

  /*
The stack type for this interconnect attachment to identify whether the IPv6
feature is enabled or not. If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations.
Possible values are: `IPV4_IPV6`, `IPV4_ONLY`.
*/
  StackType?: string;

  /*
The type of InterconnectAttachment you wish to create. Defaults to
DEDICATED.
Possible values are: `DEDICATED`, `PARTNER`, `PARTNER_PROVIDER`.
*/
  Type?: string;

  /*
Provisioned bandwidth capacity for the interconnect attachment.
For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G
Possible values are: `BPS_50M`, `BPS_100M`, `BPS_200M`, `BPS_300M`, `BPS_400M`, `BPS_500M`, `BPS_1G`, `BPS_2G`, `BPS_5G`, `BPS_10G`, `BPS_20G`, `BPS_50G`.
*/
  Bandwidth?: string;

  /*
Up to 16 candidate prefixes that can be used to restrict the allocation
of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.
*/
  CandidateSubnets?: Array<string>;

  /*
Indicates the user-supplied encryption option of this interconnect
attachment. Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.
- NONE - This is the default value, which means that the VLAN attachment
carries unencrypted traffic. VMs are able to send traffic to, or receive
traffic from, such a VLAN attachment.
- IPSEC - The VLAN attachment carries only encrypted traffic that is
encrypted by an IPsec device, such as an HA VPN gateway or third-party
IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
attachment must be created with this option.
Default value is `NONE`.
Possible values are: `NONE`, `IPSEC`.
*/
  Encryption?: string;

  /*
URL of addresses that have been reserved for the interconnect attachment,
Used only for interconnect attachment that has the encryption option as
IPSEC.
The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.
*/
  IpsecInternalAddresses?: Array<string>;

  /*
Maximum Transmission Unit (MTU), in bytes, of packets passing through
this interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.
*/
  Mtu?: string;
}
export class InterconnectAttachment extends Resource {
  /*
Whether the VLAN attachment is enabled or disabled.  When using
PARTNER type this will Pre-Activate the interconnect attachment
*/
  public AdminEnabled?: boolean;

  /*
Up to 16 candidate prefixes that can be used to restrict the allocation
of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.
*/
  public CandidateSubnets?: Array<string>;

  /*
URL of addresses that have been reserved for the interconnect attachment,
Used only for interconnect attachment that has the encryption option as
IPSEC.
The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.
*/
  public IpsecInternalAddresses?: Array<string>;

  /*
Maximum Transmission Unit (MTU), in bytes, of packets passing through
this interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.
*/
  public Mtu?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Google reference ID, to be used when raising support tickets with
Google or otherwise to debug backend connectivity issues.
*/
  public GoogleReferenceId?: string;

  // [Output Only] The current state of this attachment's functionality.
  public State?: string;

  /*
IPv4 address + prefix length to be configured on Cloud Router
Interface for this interconnect attachment.
*/
  public CloudRouterIpAddress?: string;

  /*
IPv4 address + prefix length to be configured on the customer
router subinterface for this interconnect attachment.
*/
  public CustomerRouterIpAddress?: string;

  /*
Desired availability domain for the attachment. Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
*/
  public EdgeAvailabilityDomain?: string;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  public Name?: string;

  /*
Information specific to an InterconnectAttachment. This property
is populated if the interconnect that this is attached to is of type DEDICATED.
Structure is documented below.
*/
  public PrivateInterconnectInfos?: Array<InterconnectAttachmentPrivateInterconnectInfo>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The stack type for this interconnect attachment to identify whether the IPv6
feature is enabled or not. If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations.
Possible values are: `IPV4_IPV6`, `IPV4_ONLY`.
*/
  public StackType?: string;

  /*
The type of InterconnectAttachment you wish to create. Defaults to
DEDICATED.
Possible values are: `DEDICATED`, `PARTNER`, `PARTNER_PROVIDER`.
*/
  public Type?: string;

  /*
The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
using PARTNER type this will be managed upstream.
*/
  public VlanTag8021q?: number;

  /*
Provisioned bandwidth capacity for the interconnect attachment.
For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G
Possible values are: `BPS_50M`, `BPS_100M`, `BPS_200M`, `BPS_300M`, `BPS_400M`, `BPS_500M`, `BPS_1G`, `BPS_2G`, `BPS_5G`, `BPS_10G`, `BPS_20G`, `BPS_50G`.
*/
  public Bandwidth?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Indicates the user-supplied encryption option of this interconnect
attachment. Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.
- NONE - This is the default value, which means that the VLAN attachment
carries unencrypted traffic. VMs are able to send traffic to, or receive
traffic from, such a VLAN attachment.
- IPSEC - The VLAN attachment carries only encrypted traffic that is
encrypted by an IPsec device, such as an HA VPN gateway or third-party
IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
attachment must be created with this option.
Default value is `NONE`.
Possible values are: `NONE`, `IPSEC`.
*/
  public Encryption?: string;

  /*
URL of the underlying Interconnect object that this attachment's
traffic will traverse through. Required if type is DEDICATED, must not
be set if type is PARTNER.
*/
  public Interconnect?: string;

  /*
[Output only for type PARTNER. Not present for DEDICATED]. The opaque
identifier of an PARTNER attachment used to initiate provisioning with
a selected partner. Of the form "XXXXX/region/domain"
*/
  public PairingKey?: string;

  /*
[Output only for type PARTNER. Not present for DEDICATED]. Optional
BGP ASN for the router that should be supplied by a layer 3 Partner if
they configured BGP on behalf of the customer.
*/
  public PartnerAsn?: string;

  // Region where the regional interconnect attachment resides.
  public Region?: string;

  /*
URL of the cloud router to be used for dynamic routing. This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.
*/
  public Router?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "CandidateSubnets",
        "Up to 16 candidate prefixes that can be used to restrict the allocation\nof cloudRouterIpAddress and customerRouterIpAddress for this attachment.\nAll prefixes must be within link-local address space (169.254.0.0/16)\nand must be /29 or shorter (/28, /27, etc). Google will attempt to select\nan unused /29 from the supplied candidate prefix(es). The request will\nfail if all possible /29s are in use on Google's edge. If not supplied,\nGoogle will randomly select an unused /29 from all of link-local space.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "AdminEnabled",
        "Whether the VLAN attachment is enabled or disabled.  When using\nPARTNER type this will Pre-Activate the interconnect attachment",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is created. The\nname must be 1-63 characters long, and comply with RFC1035. Specifically, the\nname must be 1-63 characters long and match the regular expression\n`a-z?` which means the first character must be a\nlowercase letter, and all following characters must be a dash, lowercase\nletter, or digit, except the last character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Interconnect",
        "URL of the underlying Interconnect object that this attachment's\ntraffic will traverse through. Required if type is DEDICATED, must not\nbe set if type is PARTNER.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Encryption",
        "Indicates the user-supplied encryption option of this interconnect\nattachment. Can only be specified at attachment creation for PARTNER or\nDEDICATED attachments.\n* NONE - This is the default value, which means that the VLAN attachment\ncarries unencrypted traffic. VMs are able to send traffic to, or receive\ntraffic from, such a VLAN attachment.\n* IPSEC - The VLAN attachment carries only encrypted traffic that is\nencrypted by an IPsec device, such as an HA VPN gateway or third-party\nIPsec VPN. VMs cannot directly send traffic to, or receive traffic from,\nsuch a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN\nattachment must be created with this option.\nDefault value is `NONE`.\nPossible values are: `NONE`, `IPSEC`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "IpsecInternalAddresses",
        "URL of addresses that have been reserved for the interconnect attachment,\nUsed only for interconnect attachment that has the encryption option as\nIPSEC.\nThe addresses must be RFC 1918 IP address ranges. When creating HA VPN\ngateway over the interconnect attachment, if the attachment is configured\nto use an RFC 1918 IP address, then the VPN gateway's IP address will be\nallocated from the IP address range specified here.\nFor example, if the HA VPN gateway's interface 0 is paired to this\ninterconnect attachment, then an RFC 1918 IP address for the VPN gateway\ninterface 0 will be allocated from the IP address specified for this\ninterconnect attachment.\nIf this field is not specified for interconnect attachment that has\nencryption option as IPSEC, later on when creating HA VPN gateway on this\ninterconnect attachment, the HA VPN gateway's IP address will be\nallocated from regional external IP address pool.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Mtu",
        "Maximum Transmission Unit (MTU), in bytes, of packets passing through\nthis interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "URL of the cloud router to be used for dynamic routing. This router must be in\nthe same region as this InterconnectAttachment. The InterconnectAttachment will\nautomatically connect the Interconnect to the network & region within which the\nCloud Router is configured.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of InterconnectAttachment you wish to create. Defaults to\nDEDICATED.\nPossible values are: `DEDICATED`, `PARTNER`, `PARTNER_PROVIDER`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EdgeAvailabilityDomain",
        "Desired availability domain for the attachment. Only available for type\nPARTNER, at creation time. For improved reliability, customers should\nconfigure a pair of attachments with one per availability domain. The\nselected availability domain will be provided to the Partner via the\npairing key so that the provisioned circuit will lie in the specified\ndomain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "VlanTag8021q",
        "The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When\nusing PARTNER type this will be managed upstream.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the regional interconnect attachment resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bandwidth",
        "Provisioned bandwidth capacity for the interconnect attachment.\nFor attachments of type DEDICATED, the user can set the bandwidth.\nFor attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.\nOutput only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,\nDefaults to BPS_10G\nPossible values are: `BPS_50M`, `BPS_100M`, `BPS_200M`, `BPS_300M`, `BPS_400M`, `BPS_500M`, `BPS_1G`, `BPS_2G`, `BPS_5G`, `BPS_10G`, `BPS_20G`, `BPS_50G`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StackType",
        "The stack type for this interconnect attachment to identify whether the IPv6\nfeature is enabled or not. If not specified, IPV4_ONLY will be used.\nThis field can be both set at interconnect attachments creation and update\ninterconnect attachment operations.\nPossible values are: `IPV4_IPV6`, `IPV4_ONLY`.",
      ),
    ];
  }
}