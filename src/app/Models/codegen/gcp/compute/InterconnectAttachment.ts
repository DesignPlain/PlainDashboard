import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_InterconnectAttachmentPrivateInterconnectInfo,
  compute_InterconnectAttachmentPrivateInterconnectInfo_GetTypes,
} from "../types/compute_InterconnectAttachmentPrivateInterconnectInfo";

export interface InterconnectAttachmentArgs {
  /*
Maximum Transmission Unit (MTU), in bytes, of packets passing through
this interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.
*/
  mtu?: string;

  /*
URL of the underlying Interconnect object that this attachment's
traffic will traverse through. Required if type is DEDICATED, must not
be set if type is PARTNER.
*/
  interconnect?: string;

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
  ipsecInternalAddresses?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
URL of the cloud router to be used for dynamic routing. This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.
*/
  router?: string;

  /*
Provisioned bandwidth capacity for the interconnect attachment.
For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G
Possible values are: `BPS_50M`, `BPS_100M`, `BPS_200M`, `BPS_300M`, `BPS_400M`, `BPS_500M`, `BPS_1G`, `BPS_2G`, `BPS_5G`, `BPS_10G`, `BPS_20G`, `BPS_50G`.
*/
  bandwidth?: string;

  /*
Desired availability domain for the attachment. Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
*/
  edgeAvailabilityDomain?: string;

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
  encryption?: string;

  /*
The stack type for this interconnect attachment to identify whether the IPv6
feature is enabled or not. If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations.
Possible values are: `IPV4_IPV6`, `IPV4_ONLY`.
*/
  stackType?: string;

  /*
The type of InterconnectAttachment you wish to create. Defaults to
DEDICATED.
Possible values are: `DEDICATED`, `PARTNER`, `PARTNER_PROVIDER`.
*/
  type?: string;

  /*
Whether the VLAN attachment is enabled or disabled.  When using
PARTNER type this will Pre-Activate the interconnect attachment
*/
  adminEnabled?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Region where the regional interconnect attachment resides.
  region?: string;

  /*
Up to 16 candidate prefixes that can be used to restrict the allocation
of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.
*/
  candidateSubnets?: Array<string>;

  // An optional description of this resource.
  description?: string;

  /*
The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
using PARTNER type this will be managed upstream.
*/
  vlanTag8021q?: number;
}
export class InterconnectAttachment extends DS_Resource {
  // An optional description of this resource.
  public description?: string;

  /*
[Output only for type PARTNER. Not present for DEDICATED]. The opaque
identifier of an PARTNER attachment used to initiate provisioning with
a selected partner. Of the form "XXXXX/region/domain"
*/
  public pairingKey?: string;

  /*
[Output only for type PARTNER. Not present for DEDICATED]. Optional
BGP ASN for the router that should be supplied by a layer 3 Partner if
they configured BGP on behalf of the customer.
*/
  public partnerAsn?: string;

  /*
The stack type for this interconnect attachment to identify whether the IPv6
feature is enabled or not. If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations.
Possible values are: `IPV4_IPV6`, `IPV4_ONLY`.
*/
  public stackType?: string;

  /*
The type of InterconnectAttachment you wish to create. Defaults to
DEDICATED.
Possible values are: `DEDICATED`, `PARTNER`, `PARTNER_PROVIDER`.
*/
  public type?: string;

  /*
The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
using PARTNER type this will be managed upstream.
*/
  public vlanTag8021q?: number;

  /*
Provisioned bandwidth capacity for the interconnect attachment.
For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G
Possible values are: `BPS_50M`, `BPS_100M`, `BPS_200M`, `BPS_300M`, `BPS_400M`, `BPS_500M`, `BPS_1G`, `BPS_2G`, `BPS_5G`, `BPS_10G`, `BPS_20G`, `BPS_50G`.
*/
  public bandwidth?: string;

  /*
Up to 16 candidate prefixes that can be used to restrict the allocation
of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.
*/
  public candidateSubnets?: Array<string>;

  /*
IPv4 address + prefix length to be configured on Cloud Router
Interface for this interconnect attachment.
*/
  public cloudRouterIpAddress?: string;

  /*
IPv4 address + prefix length to be configured on the customer
router subinterface for this interconnect attachment.
*/
  public customerRouterIpAddress?: string;

  /*
URL of the underlying Interconnect object that this attachment's
traffic will traverse through. Required if type is DEDICATED, must not
be set if type is PARTNER.
*/
  public interconnect?: string;

  // Region where the regional interconnect attachment resides.
  public region?: string;

  /*
URL of the cloud router to be used for dynamic routing. This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.
*/
  public router?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
Whether the VLAN attachment is enabled or disabled.  When using
PARTNER type this will Pre-Activate the interconnect attachment
*/
  public adminEnabled?: boolean;

  /*
Maximum Transmission Unit (MTU), in bytes, of packets passing through
this interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.
*/
  public mtu?: string;

  /*
Information specific to an InterconnectAttachment. This property
is populated if the interconnect that this is attached to is of type DEDICATED.
Structure is documented below.
*/
  public privateInterconnectInfos?: Array<compute_InterconnectAttachmentPrivateInterconnectInfo>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Google reference ID, to be used when raising support tickets with
Google or otherwise to debug backend connectivity issues.
*/
  public googleReferenceId?: string;

  /*
Desired availability domain for the attachment. Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
*/
  public edgeAvailabilityDomain?: string;

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
  public encryption?: string;

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
  public ipsecInternalAddresses?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // [Output Only] The current state of this attachment's functionality.
  public state?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is created. The\nname must be 1-63 characters long, and comply with RFC1035. Specifically, the\nname must be 1-63 characters long and match the regular expression\n`a-z?` which means the first character must be a\nlowercase letter, and all following characters must be a dash, lowercase\nletter, or digit, except the last character, which cannot be a dash.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "router",
        "URL of the cloud router to be used for dynamic routing. This router must be in\nthe same region as this InterconnectAttachment. The InterconnectAttachment will\nautomatically connect the Interconnect to the network & region within which the\nCloud Router is configured.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bandwidth",
        "Provisioned bandwidth capacity for the interconnect attachment.\nFor attachments of type DEDICATED, the user can set the bandwidth.\nFor attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.\nOutput only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,\nDefaults to BPS_10G\nPossible values are: `BPS_50M`, `BPS_100M`, `BPS_200M`, `BPS_300M`, `BPS_400M`, `BPS_500M`, `BPS_1G`, `BPS_2G`, `BPS_5G`, `BPS_10G`, `BPS_20G`, `BPS_50G`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "encryption",
        "Indicates the user-supplied encryption option of this interconnect\nattachment. Can only be specified at attachment creation for PARTNER or\nDEDICATED attachments.\n* NONE - This is the default value, which means that the VLAN attachment\ncarries unencrypted traffic. VMs are able to send traffic to, or receive\ntraffic from, such a VLAN attachment.\n* IPSEC - The VLAN attachment carries only encrypted traffic that is\nencrypted by an IPsec device, such as an HA VPN gateway or third-party\nIPsec VPN. VMs cannot directly send traffic to, or receive traffic from,\nsuch a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN\nattachment must be created with this option.\nDefault value is `NONE`.\nPossible values are: `NONE`, `IPSEC`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "adminEnabled",
        "Whether the VLAN attachment is enabled or disabled.  When using\nPARTNER type this will Pre-Activate the interconnect attachment",
        () => [],
        false,
        false,
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
        "mtu",
        "Maximum Transmission Unit (MTU), in bytes, of packets passing through\nthis interconnect attachment. Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipsecInternalAddresses",
        "URL of addresses that have been reserved for the interconnect attachment,\nUsed only for interconnect attachment that has the encryption option as\nIPSEC.\nThe addresses must be RFC 1918 IP address ranges. When creating HA VPN\ngateway over the interconnect attachment, if the attachment is configured\nto use an RFC 1918 IP address, then the VPN gateway's IP address will be\nallocated from the IP address range specified here.\nFor example, if the HA VPN gateway's interface 0 is paired to this\ninterconnect attachment, then an RFC 1918 IP address for the VPN gateway\ninterface 0 will be allocated from the IP address specified for this\ninterconnect attachment.\nIf this field is not specified for interconnect attachment that has\nencryption option as IPSEC, later on when creating HA VPN gateway on this\ninterconnect attachment, the HA VPN gateway's IP address will be\nallocated from regional external IP address pool.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of InterconnectAttachment you wish to create. Defaults to\nDEDICATED.\nPossible values are: `DEDICATED`, `PARTNER`, `PARTNER_PROVIDER`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "candidateSubnets",
        "Up to 16 candidate prefixes that can be used to restrict the allocation\nof cloudRouterIpAddress and customerRouterIpAddress for this attachment.\nAll prefixes must be within link-local address space (169.254.0.0/16)\nand must be /29 or shorter (/28, /27, etc). Google will attempt to select\nan unused /29 from the supplied candidate prefix(es). The request will\nfail if all possible /29s are in use on Google's edge. If not supplied,\nGoogle will randomly select an unused /29 from all of link-local space.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "interconnect",
        "URL of the underlying Interconnect object that this attachment's\ntraffic will traverse through. Required if type is DEDICATED, must not\nbe set if type is PARTNER.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "edgeAvailabilityDomain",
        "Desired availability domain for the attachment. Only available for type\nPARTNER, at creation time. For improved reliability, customers should\nconfigure a pair of attachments with one per availability domain. The\nselected availability domain will be provided to the Partner via the\npairing key so that the provisioned circuit will lie in the specified\ndomain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackType",
        "The stack type for this interconnect attachment to identify whether the IPv6\nfeature is enabled or not. If not specified, IPV4_ONLY will be used.\nThis field can be both set at interconnect attachments creation and update\ninterconnect attachment operations.\nPossible values are: `IPV4_IPV6`, `IPV4_ONLY`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region where the regional interconnect attachment resides.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "vlanTag8021q",
        "The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When\nusing PARTNER type this will be managed upstream.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
