import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FirewallLogConfig } from "../types/FirewallLogConfig";
import { FirewallAllow } from "../types/FirewallAllow";
import { FirewallDeny } from "../types/FirewallDeny";

export interface FirewallArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A list of instance tags indicating sets of instances located in the
network that may make network connections as specified in allowed[].
If no targetTags are specified, the firewall rule applies to all
instances on the specified network.
*/
  TargetTags?: Array<string>;

  /*
If destination ranges are specified, the firewall will apply only to
traffic that has destination IP address in these ranges. These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.
*/
  DestinationRanges?: Array<string>;

  /*
This field denotes the logging options for a particular firewall rule.
If defined, logging is enabled, and logs will be exported to Cloud Logging.
Structure is documented below.
*/
  LogConfig?: FirewallLogConfig;

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
  SourceRanges?: Array<string>;

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
  SourceServiceAccounts?: Array<string>;

  /*
The name or self_link of the network to attach this firewall to.


- - -
*/
  Network?: string;

  /*
The list of ALLOW rules specified by this firewall. Each rule
specifies a protocol and port-range tuple that describes a permitted
connection.
Structure is documented below.
*/
  Allows?: Array<FirewallAllow>;

  /*
The list of DENY rules specified by this firewall. Each rule specifies
a protocol and port-range tuple that describes a denied connection.
Structure is documented below.
*/
  Denies?: Array<FirewallDeny>;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
Direction of traffic to which this firewall applies; default is
INGRESS. Note: For INGRESS traffic, one of `source_ranges`,
`source_tags` or `source_service_accounts` is required.
Possible values are: `INGRESS`, `EGRESS`.
*/
  Direction?: string;

  /*
Denotes whether the firewall rule is disabled, i.e not applied to the
network it is associated with. When set to true, the firewall rule is
not enforced and the network behaves as if it did not exist. If this
is unspecified, the firewall rule will be enabled.
*/
  Disabled?: boolean;

  /*
This field denotes whether to enable logging for a particular firewall rule.
If logging is enabled, logs will be exported to Stackdriver. Deprecated in favor of `log_config`
*/
  EnableLogging?: boolean;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
Priority for this rule. This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.
*/
  Priority?: number;

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
  SourceTags?: Array<string>;

  /*
A list of service accounts indicating sets of instances located in the
network that may make network connections as specified in allowed[].
targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.
*/
  TargetServiceAccounts?: Array<string>;
}
export class Firewall extends Resource {
  /*
Denotes whether the firewall rule is disabled, i.e not applied to the
network it is associated with. When set to true, the firewall rule is
not enforced and the network behaves as if it did not exist. If this
is unspecified, the firewall rule will be enabled.
*/
  public Disabled?: boolean;

  /*
The name or self_link of the network to attach this firewall to.


- - -
*/
  public Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

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
  public SourceRanges?: Array<string>;

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
  public SourceServiceAccounts?: Array<string>;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
This field denotes the logging options for a particular firewall rule.
If defined, logging is enabled, and logs will be exported to Cloud Logging.
Structure is documented below.
*/
  public LogConfig?: FirewallLogConfig;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

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
  public SourceTags?: Array<string>;

  /*
A list of instance tags indicating sets of instances located in the
network that may make network connections as specified in allowed[].
If no targetTags are specified, the firewall rule applies to all
instances on the specified network.
*/
  public TargetTags?: Array<string>;

  /*
If destination ranges are specified, the firewall will apply only to
traffic that has destination IP address in these ranges. These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.
*/
  public DestinationRanges?: Array<string>;

  /*
A list of service accounts indicating sets of instances located in the
network that may make network connections as specified in allowed[].
targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.
*/
  public TargetServiceAccounts?: Array<string>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
The list of DENY rules specified by this firewall. Each rule specifies
a protocol and port-range tuple that describes a denied connection.
Structure is documented below.
*/
  public Denies?: Array<FirewallDeny>;

  /*
Direction of traffic to which this firewall applies; default is
INGRESS. Note: For INGRESS traffic, one of `source_ranges`,
`source_tags` or `source_service_accounts` is required.
Possible values are: `INGRESS`, `EGRESS`.
*/
  public Direction?: string;

  /*
This field denotes whether to enable logging for a particular firewall rule.
If logging is enabled, logs will be exported to Stackdriver. Deprecated in favor of `log_config`
*/
  public EnableLogging?: boolean;

  /*
Priority for this rule. This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.
*/
  public Priority?: number;

  /*
The list of ALLOW rules specified by this firewall. Each rule
specifies a protocol and port-range tuple that describes a permitted
connection.
Structure is documented below.
*/
  public Allows?: Array<FirewallAllow>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SourceServiceAccounts",
        "If source service accounts are specified, the firewall will apply only\nto traffic originating from an instance with a service account in this\nlist. Source service accounts cannot be used to control traffic to an\ninstance's external IP address because service accounts are associated\nwith an instance, not an IP address. sourceRanges can be set at the\nsame time as sourceServiceAccounts. If both are set, the firewall will\napply to traffic that has source IP address within sourceRanges OR the\nsource IP belongs to an instance with service account listed in\nsourceServiceAccount. The connection does not need to match both\nproperties for the firewall to apply. sourceServiceAccounts cannot be\nused at the same time as sourceTags or targetTags. For INGRESS traffic,\none of `source_ranges`, `source_tags` or `source_service_accounts` is required.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Allows",
        "The list of ALLOW rules specified by this firewall. Each rule\nspecifies a protocol and port-range tuple that describes a permitted\nconnection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SourceTags",
        "If source tags are specified, the firewall will apply only to traffic\nwith source IP that belongs to a tag listed in source tags. Source\ntags cannot be used to control traffic to an instance's external IP\naddress. Because tags are associated with an instance, not an IP\naddress. One or both of sourceRanges and sourceTags may be set. If\nboth properties are set, the firewall will apply to traffic that has\nsource IP address within sourceRanges OR the source IP that belongs to\na tag listed in the sourceTags property. The connection does not need\nto match both properties for the firewall to apply. For INGRESS traffic,\none of `source_ranges`, `source_tags` or `source_service_accounts` is required.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetServiceAccounts",
        "A list of service accounts indicating sets of instances located in the\nnetwork that may make network connections as specified in allowed[].\ntargetServiceAccounts cannot be used at the same time as targetTags or\nsourceTags. If neither targetServiceAccounts nor targetTags are\nspecified, the firewall rule applies to all instances on the specified\nnetwork.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableLogging",
        "This field denotes whether to enable logging for a particular firewall rule.\nIf logging is enabled, logs will be exported to Stackdriver. Deprecated in favor of `log_config`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetTags",
        "A list of instance tags indicating sets of instances located in the\nnetwork that may make network connections as specified in allowed[].\nIf no targetTags are specified, the firewall rule applies to all\ninstances on the specified network.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SourceRanges",
        "If source ranges are specified, the firewall will apply only to\ntraffic that has source IP address in these ranges. These ranges must\nbe expressed in CIDR format. One or both of sourceRanges and\nsourceTags may be set. If both properties are set, the firewall will\napply to traffic that has source IP address within sourceRanges OR the\nsource IP that belongs to a tag listed in the sourceTags property. The\nconnection does not need to match both properties for the firewall to\napply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of\n`source_ranges`, `source_tags` or `source_service_accounts` is required.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The name or self_link of the network to attach this firewall to.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Denies",
        "The list of DENY rules specified by this firewall. Each rule specifies\na protocol and port-range tuple that describes a denied connection.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Direction",
        "Direction of traffic to which this firewall applies; default is\nINGRESS. Note: For INGRESS traffic, one of `source_ranges`,\n`source_tags` or `source_service_accounts` is required.\nPossible values are: `INGRESS`, `EGRESS`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Denotes whether the firewall rule is disabled, i.e not applied to the\nnetwork it is associated with. When set to true, the firewall rule is\nnot enforced and the network behaves as if it did not exist. If this\nis unspecified, the firewall rule will be enabled.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "Priority for this rule. This is an integer between 0 and 65535, both\ninclusive. When not specified, the value assumed is 1000. Relative\npriorities determine precedence of conflicting rules. Lower value of\npriority implies higher precedence (eg, a rule with priority 0 has\nhigher precedence than a rule with priority 1). DENY rules take\nprecedence over ALLOW rules having equal priority.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DestinationRanges",
        "If destination ranges are specified, the firewall will apply only to\ntraffic that has destination IP address in these ranges. These ranges\nmust be expressed in CIDR format. IPv4 or IPv6 ranges are supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LogConfig",
        "This field denotes the logging options for a particular firewall rule.\nIf defined, logging is enabled, and logs will be exported to Cloud Logging.\nStructure is documented below.",
      ),
    ];
  }
}
