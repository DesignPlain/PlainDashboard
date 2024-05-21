import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_FirewallAllow,
  compute_FirewallAllow_GetTypes,
} from "../types/compute_FirewallAllow";
import {
  compute_FirewallDeny,
  compute_FirewallDeny_GetTypes,
} from "../types/compute_FirewallDeny";
import {
  compute_FirewallLogConfig,
  compute_FirewallLogConfig_GetTypes,
} from "../types/compute_FirewallLogConfig";

export interface FirewallArgs {
  /*
The list of ALLOW rules specified by this firewall. Each rule
specifies a protocol and port-range tuple that describes a permitted
connection.
Structure is documented below.
*/
  allows?: Array<compute_FirewallAllow>;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
This field denotes whether to enable logging for a particular firewall rule.
If logging is enabled, logs will be exported to Stackdriver. Deprecated in favor of `log_config`
*/
  enableLogging?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
If source ranges are specified, the firewall will apply only to
traffic that has source IP address in these ranges. These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
`source_ranges`, `source_tags` or `source_service_accounts` is required.
*/
  sourceRanges?: Array<string>;

  /*
If source service accounts are specified, the firewall will apply only
to traffic originating from an instance with a service account in this
list. Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of `source_ranges`, `source_tags` or `source_service_accounts` is required.
*/
  sourceServiceAccounts?: Array<string>;

  /*
The list of DENY rules specified by this firewall. Each rule specifies
a protocol and port-range tuple that describes a denied connection.
Structure is documented below.
*/
  denies?: Array<compute_FirewallDeny>;

  /*
Direction of traffic to which this firewall applies; default is
INGRESS. Note: For INGRESS traffic, one of `source_ranges`,
`source_tags` or `source_service_accounts` is required.
Possible values are: `INGRESS`, `EGRESS`.
*/
  direction?: string;

  /*
Denotes whether the firewall rule is disabled, i.e not applied to the
network it is associated with. When set to true, the firewall rule is
not enforced and the network behaves as if it did not exist. If this
is unspecified, the firewall rule will be enabled.
*/
  disabled?: boolean;

  /*
A list of instance tags indicating sets of instances located in the
network that may make network connections as specified in allowed[].
If no targetTags are specified, the firewall rule applies to all
instances on the specified network.
*/
  targetTags?: Array<string>;

  /*
If destination ranges are specified, the firewall will apply only to
traffic that has destination IP address in these ranges. These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.
*/
  destinationRanges?: Array<string>;

  /*
This field denotes the logging options for a particular firewall rule.
If defined, logging is enabled, and logs will be exported to Cloud Logging.
Structure is documented below.
*/
  logConfig?: compute_FirewallLogConfig;

  /*
Priority for this rule. This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.
*/
  priority?: number;

  /*
If source tags are specified, the firewall will apply only to traffic
with source IP that belongs to a tag listed in source tags. Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of `source_ranges`, `source_tags` or `source_service_accounts` is required.
*/
  sourceTags?: Array<string>;

  /*
A list of service accounts indicating sets of instances located in the
network that may make network connections as specified in allowed[].
targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.
*/
  targetServiceAccounts?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The name or self_link of the network to attach this firewall to.


- - -
*/
  network?: string;
}
export class Firewall extends Resource {
  /*
A list of service accounts indicating sets of instances located in the
network that may make network connections as specified in allowed[].
targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.
*/
  public targetServiceAccounts?: Array<string>;

  /*
A list of instance tags indicating sets of instances located in the
network that may make network connections as specified in allowed[].
If no targetTags are specified, the firewall rule applies to all
instances on the specified network.
*/
  public targetTags?: Array<string>;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
Priority for this rule. This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.
*/
  public priority?: number;

  /*
If source service accounts are specified, the firewall will apply only
to traffic originating from an instance with a service account in this
list. Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of `source_ranges`, `source_tags` or `source_service_accounts` is required.
*/
  public sourceServiceAccounts?: Array<string>;

  /*
Direction of traffic to which this firewall applies; default is
INGRESS. Note: For INGRESS traffic, one of `source_ranges`,
`source_tags` or `source_service_accounts` is required.
Possible values are: `INGRESS`, `EGRESS`.
*/
  public direction?: string;

  /*
The name or self_link of the network to attach this firewall to.


- - -
*/
  public network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
This field denotes the logging options for a particular firewall rule.
If defined, logging is enabled, and logs will be exported to Cloud Logging.
Structure is documented below.
*/
  public logConfig?: compute_FirewallLogConfig;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
If source tags are specified, the firewall will apply only to traffic
with source IP that belongs to a tag listed in source tags. Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of `source_ranges`, `source_tags` or `source_service_accounts` is required.
*/
  public sourceTags?: Array<string>;

  /*
The list of ALLOW rules specified by this firewall. Each rule
specifies a protocol and port-range tuple that describes a permitted
connection.
Structure is documented below.
*/
  public allows?: Array<compute_FirewallAllow>;

  /*
If destination ranges are specified, the firewall will apply only to
traffic that has destination IP address in these ranges. These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.
*/
  public destinationRanges?: Array<string>;

  /*
This field denotes whether to enable logging for a particular firewall rule.
If logging is enabled, logs will be exported to Stackdriver. Deprecated in favor of `log_config`
*/
  public enableLogging?: boolean;

  // The URI of the created resource.
  public selfLink?: string;

  /*
If source ranges are specified, the firewall will apply only to
traffic that has source IP address in these ranges. These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
`source_ranges`, `source_tags` or `source_service_accounts` is required.
*/
  public sourceRanges?: Array<string>;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
The list of DENY rules specified by this firewall. Each rule specifies
a protocol and port-range tuple that describes a denied connection.
Structure is documented below.
*/
  public denies?: Array<compute_FirewallDeny>;

  /*
Denotes whether the firewall rule is disabled, i.e not applied to the
network it is associated with. When set to true, the firewall rule is
not enforced and the network behaves as if it did not exist. If this
is unspecified, the firewall rule will be enabled.
*/
  public disabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "allows",
        "The list of ALLOW rules specified by this firewall. Each rule\nspecifies a protocol and port-range tuple that describes a permitted\nconnection.\nStructure is documented below.",
        compute_FirewallAllow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLogging",
        "This field denotes whether to enable logging for a particular firewall rule.\nIf logging is enabled, logs will be exported to Stackdriver. Deprecated in favor of `log_config`",
        [],
        false,
        false,
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
        InputType.Array,
        "sourceServiceAccounts",
        "If source service accounts are specified, the firewall will apply only\nto traffic originating from an instance with a service account in this\nlist. Source service accounts cannot be used to control traffic to an\ninstance's external IP address because service accounts are associated\nwith an instance, not an IP address. sourceRanges can be set at the\nsame time as sourceServiceAccounts. If both are set, the firewall will\napply to traffic that has source IP address within sourceRanges OR the\nsource IP belongs to an instance with service account listed in\nsourceServiceAccount. The connection does not need to match both\nproperties for the firewall to apply. sourceServiceAccounts cannot be\nused at the same time as sourceTags or targetTags. For INGRESS traffic,\none of `source_ranges`, `source_tags` or `source_service_accounts` is required.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetTags",
        "A list of instance tags indicating sets of instances located in the\nnetwork that may make network connections as specified in allowed[].\nIf no targetTags are specified, the firewall rule applies to all\ninstances on the specified network.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logConfig",
        "This field denotes the logging options for a particular firewall rule.\nIf defined, logging is enabled, and logs will be exported to Cloud Logging.\nStructure is documented below.",
        compute_FirewallLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sourceTags",
        "If source tags are specified, the firewall will apply only to traffic\nwith source IP that belongs to a tag listed in source tags. Source\ntags cannot be used to control traffic to an instance's external IP\naddress. Because tags are associated with an instance, not an IP\naddress. One or both of sourceRanges and sourceTags may be set. If\nboth properties are set, the firewall will apply to traffic that has\nsource IP address within sourceRanges OR the source IP that belongs to\na tag listed in the sourceTags property. The connection does not need\nto match both properties for the firewall to apply. For INGRESS traffic,\none of `source_ranges`, `source_tags` or `source_service_accounts` is required.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The name or self_link of the network to attach this firewall to.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sourceRanges",
        "If source ranges are specified, the firewall will apply only to\ntraffic that has source IP address in these ranges. These ranges must\nbe expressed in CIDR format. One or both of sourceRanges and\nsourceTags may be set. If both properties are set, the firewall will\napply to traffic that has source IP address within sourceRanges OR the\nsource IP that belongs to a tag listed in the sourceTags property. The\nconnection does not need to match both properties for the firewall to\napply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of\n`source_ranges`, `source_tags` or `source_service_accounts` is required.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "denies",
        "The list of DENY rules specified by this firewall. Each rule specifies\na protocol and port-range tuple that describes a denied connection.\nStructure is documented below.",
        compute_FirewallDeny_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "Priority for this rule. This is an integer between 0 and 65535, both\ninclusive. When not specified, the value assumed is 1000. Relative\npriorities determine precedence of conflicting rules. Lower value of\npriority implies higher precedence (eg, a rule with priority 0 has\nhigher precedence than a rule with priority 1). DENY rules take\nprecedence over ALLOW rules having equal priority.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "direction",
        "Direction of traffic to which this firewall applies; default is\nINGRESS. Note: For INGRESS traffic, one of `source_ranges`,\n`source_tags` or `source_service_accounts` is required.\nPossible values are: `INGRESS`, `EGRESS`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Denotes whether the firewall rule is disabled, i.e not applied to the\nnetwork it is associated with. When set to true, the firewall rule is\nnot enforced and the network behaves as if it did not exist. If this\nis unspecified, the firewall rule will be enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinationRanges",
        "If destination ranges are specified, the firewall will apply only to\ntraffic that has destination IP address in these ranges. These ranges\nmust be expressed in CIDR format. IPv4 or IPv6 ranges are supported.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetServiceAccounts",
        "A list of service accounts indicating sets of instances located in the\nnetwork that may make network connections as specified in allowed[].\ntargetServiceAccounts cannot be used at the same time as targetTags or\nsourceTags. If neither targetServiceAccounts nor targetTags are\nspecified, the firewall rule applies to all instances on the specified\nnetwork.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
