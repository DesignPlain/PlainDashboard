import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AddressArgs {
  /*
The URL of the network in which to reserve the address. This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.
*/
  network?: string;

  /*
The static external IP address represented by this resource.
The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.
*/
  address?: string;

  /*
The endpoint type of this address, which should be VM or NETLB. This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation.
Possible values are: `VM`, `NETLB`.
*/
  ipv6EndpointType?: string;

  /*
The purpose of this resource, which can be one of the following values.
- GCE_ENDPOINT for addresses that are used by VM instances, alias IP
ranges, load balancers, and similar resources.
- SHARED_LOADBALANCER_VIP for an address that can be used by multiple
internal load balancers.
- VPC_PEERING for addresses that are reserved for VPC peer networks.
- IPSEC_INTERCONNECT for addresses created from a private IP range that
are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
configuration. These addresses are regional resources.
- PRIVATE_SERVICE_CONNECT for a private network address that is used to
configure Private Service Connect. Only global internal addresses can use
this purpose.

This should only be set when using an Internal address.
*/
  purpose?: string;

  /*
The IP Version that will be used by this address. The default value is `IPV4`.
Possible values are: `IPV4`, `IPV6`.
*/
  ipVersion?: string;

  /*
Labels to apply to this address.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
The networking tier used for configuring this address. If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview).
Possible values are: `PREMIUM`, `STANDARD`.
*/
  networkTier?: string;

  /*
The URL of the subnetwork in which to reserve the address. If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.
*/
  subnetwork?: string;

  /*
The type of address to reserve.
Note: if you set this argument's value as `INTERNAL` you need to leave the `network_tier` argument unset in that resource block.
Default value is `EXTERNAL`.
Possible values are: `INTERNAL`, `EXTERNAL`.
*/
  addressType?: string;

  // An optional description of this resource.
  description?: string;

  // The prefix length if the resource represents an IP range.
  prefixLength?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  region?: string;
}
export class Address extends Resource {
  // The prefix length if the resource represents an IP range.
  public prefixLength?: number;

  // The URLs of the resources that are using this address.
  public users?: Array<string>;

  /*
The IP Version that will be used by this address. The default value is `IPV4`.
Possible values are: `IPV4`, `IPV6`.
*/
  public ipVersion?: string;

  /*
The URL of the network in which to reserve the address. This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.
*/
  public network?: string;

  /*
Labels to apply to this address.  A list of key->value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The purpose of this resource, which can be one of the following values.
- GCE_ENDPOINT for addresses that are used by VM instances, alias IP
ranges, load balancers, and similar resources.
- SHARED_LOADBALANCER_VIP for an address that can be used by multiple
internal load balancers.
- VPC_PEERING for addresses that are reserved for VPC peer networks.
- IPSEC_INTERCONNECT for addresses created from a private IP range that
are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
configuration. These addresses are regional resources.
- PRIVATE_SERVICE_CONNECT for a private network address that is used to
configure Private Service Connect. Only global internal addresses can use
this purpose.

This should only be set when using an Internal address.
*/
  public purpose?: string;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  /*
The type of address to reserve.
Note: if you set this argument's value as `INTERNAL` you need to leave the `network_tier` argument unset in that resource block.
Default value is `EXTERNAL`.
Possible values are: `INTERNAL`, `EXTERNAL`.
*/
  public addressType?: string;

  /*
The endpoint type of this address, which should be VM or NETLB. This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation.
Possible values are: `VM`, `NETLB`.
*/
  public ipv6EndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The fingerprint used for optimistic locking of this resource.  Used
internally during updates.
*/
  public labelFingerprint?: string;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // An optional description of this resource.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The networking tier used for configuring this address. If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview).
Possible values are: `PREMIUM`, `STANDARD`.
*/
  public networkTier?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
The URL of the subnetwork in which to reserve the address. If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.
*/
  public subnetwork?: string;

  /*
The static external IP address represented by this resource.
The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.
*/
  public address?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "purpose",
        "The purpose of this resource, which can be one of the following values.\n* GCE_ENDPOINT for addresses that are used by VM instances, alias IP\nranges, load balancers, and similar resources.\n* SHARED_LOADBALANCER_VIP for an address that can be used by multiple\ninternal load balancers.\n* VPC_PEERING for addresses that are reserved for VPC peer networks.\n* IPSEC_INTERCONNECT for addresses created from a private IP range that\nare reserved for a VLAN attachment in an HA VPN over Cloud Interconnect\nconfiguration. These addresses are regional resources.\n* PRIVATE_SERVICE_CONNECT for a private network address that is used to\nconfigure Private Service Connect. Only global internal addresses can use\nthis purpose.\n\nThis should only be set when using an Internal address.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        "The URL of the subnetwork in which to reserve the address. If an IP\naddress is specified, it must be within the subnetwork's IP range.\nThis field can only be used with INTERNAL type with\nGCE_ENDPOINT/DNS_RESOLVER purposes.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The Region in which the created address should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "prefixLength",
        "The prefix length if the resource represents an IP range.",
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
        InputType.String,
        "network",
        "The URL of the network in which to reserve the address. This field\ncan only be used with INTERNAL type with the VPC_PEERING and\nIPSEC_INTERCONNECT purposes.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipVersion",
        "The IP Version that will be used by this address. The default value is `IPV4`.\nPossible values are: `IPV4`, `IPV6`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels to apply to this address.  A list of key->value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "address",
        "The static external IP address represented by this resource.\nThe IP address must be inside the specified subnetwork,\nif any. Set by the API if undefined.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipv6EndpointType",
        "The endpoint type of this address, which should be VM or NETLB. This is\nused for deciding which type of endpoint this address can be used after\nthe external IPv6 address reservation.\nPossible values are: `VM`, `NETLB`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkTier",
        "The networking tier used for configuring this address. If this field is not\nspecified, it is assumed to be PREMIUM.\nThis argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview).\nPossible values are: `PREMIUM`, `STANDARD`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "addressType",
        "The type of address to reserve.\nNote: if you set this argument's value as `INTERNAL` you need to leave the `network_tier` argument unset in that resource block.\nDefault value is `EXTERNAL`.\nPossible values are: `INTERNAL`, `EXTERNAL`.",
        [],
        false,
        true,
      ),
    ];
  }
}
