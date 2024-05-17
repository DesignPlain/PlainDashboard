import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ManagedZonePrivateVisibilityConfig,
  Dns_ManagedZonePrivateVisibilityConfig_GetTypes,
} from "../types/Dns_ManagedZonePrivateVisibilityConfig";
import {
  Dns_ManagedZoneServiceDirectoryConfig,
  Dns_ManagedZoneServiceDirectoryConfig_GetTypes,
} from "../types/Dns_ManagedZoneServiceDirectoryConfig";
import {
  Dns_ManagedZoneCloudLoggingConfig,
  Dns_ManagedZoneCloudLoggingConfig_GetTypes,
} from "../types/Dns_ManagedZoneCloudLoggingConfig";
import {
  Dns_ManagedZonePeeringConfig,
  Dns_ManagedZonePeeringConfig_GetTypes,
} from "../types/Dns_ManagedZonePeeringConfig";
import {
  Dns_ManagedZoneDnssecConfig,
  Dns_ManagedZoneDnssecConfig_GetTypes,
} from "../types/Dns_ManagedZoneDnssecConfig";
import {
  Dns_ManagedZoneForwardingConfig,
  Dns_ManagedZoneForwardingConfig_GetTypes,
} from "../types/Dns_ManagedZoneForwardingConfig";

export interface ManagedZoneArgs {
  /*
The presence for this field indicates that outbound forwarding is enabled
for this zone. The value of this field contains the set of destinations
to forward to.
Structure is documented below.
*/
  ForwardingConfig?: Dns_ManagedZoneForwardingConfig;

  /*
The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources.
Default value is `public`.
Possible values are: `private`, `public`.
*/
  Visibility?: string;

  /*
A set of key/value label pairs to assign to this ManagedZone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  Description?: string;

  // Set this true to delete all records in the zone.
  ForceDestroy?: boolean;

  /*
For privately visible zones, the set of Virtual Private Cloud
resources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.
Structure is documented below.
*/
  PrivateVisibilityConfig?: Dns_ManagedZonePrivateVisibilityConfig;

  /*
Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under `private_visibility_config`.
*/
  ReverseLookup?: boolean;

  /*
The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
Structure is documented below.
*/
  ServiceDirectoryConfig?: Dns_ManagedZoneServiceDirectoryConfig;

  /*
Cloud logging configuration
Structure is documented below.
*/
  CloudLoggingConfig?: Dns_ManagedZoneCloudLoggingConfig;

  /*
User assigned name for this resource.
Must be unique within the project.

- - -
*/
  Name?: string;

  /*
The presence of this field indicates that DNS Peering is enabled for this
zone. The value of this field contains the network to peer with.
Structure is documented below.
*/
  PeeringConfig?: Dns_ManagedZonePeeringConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The DNS name of this managed zone, for instance "example.com.".
  DnsName?: string;

  /*
DNSSEC configuration
Structure is documented below.
*/
  DnssecConfig?: Dns_ManagedZoneDnssecConfig;
}
export class ManagedZone extends Resource {
  /*
Delegate your managed_zone to these virtual name servers;
defined by the server
*/
  public NameServers?: Array<string>;

  /*
The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
Structure is documented below.
*/
  public ServiceDirectoryConfig?: Dns_ManagedZoneServiceDirectoryConfig;

  /*
The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources.
Default value is `public`.
Possible values are: `private`, `public`.
*/
  public Visibility?: string;

  // The DNS name of this managed zone, for instance "example.com.".
  public DnsName?: string;

  /*
A set of key/value label pairs to assign to this ManagedZone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The presence of this field indicates that DNS Peering is enabled for this
zone. The value of this field contains the network to peer with.
Structure is documented below.
*/
  public PeeringConfig?: Dns_ManagedZonePeeringConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under `private_visibility_config`.
*/
  public ReverseLookup?: boolean;

  /*
The time that this resource was created on the server.
This is in RFC3339 text format.
*/
  public CreationTime?: string;

  /*
The presence for this field indicates that outbound forwarding is enabled
for this zone. The value of this field contains the set of destinations
to forward to.
Structure is documented below.
*/
  public ForwardingConfig?: Dns_ManagedZoneForwardingConfig;

  /*
For privately visible zones, the set of Virtual Private Cloud
resources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.
Structure is documented below.
*/
  public PrivateVisibilityConfig?: Dns_ManagedZonePrivateVisibilityConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Cloud logging configuration
Structure is documented below.
*/
  public CloudLoggingConfig?: Dns_ManagedZoneCloudLoggingConfig;

  /*
User assigned name for this resource.
Must be unique within the project.

- - -
*/
  public Name?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Set this true to delete all records in the zone.
  public ForceDestroy?: boolean;

  // Unique identifier for the resource; defined by the server.
  public ManagedZoneId?: number;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  public Description?: string;

  /*
DNSSEC configuration
Structure is documented below.
*/
  public DnssecConfig?: Dns_ManagedZoneDnssecConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ServiceDirectoryConfig",
        "The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.\nStructure is documented below.",
        Dns_ManagedZoneServiceDirectoryConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PrivateVisibilityConfig",
        "For privately visible zones, the set of Virtual Private Cloud\nresources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.\nStructure is documented below.",
        Dns_ManagedZonePrivateVisibilityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceDestroy",
        "Set this true to delete all records in the zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PeeringConfig",
        "The presence of this field indicates that DNS Peering is enabled for this\nzone. The value of this field contains the network to peer with.\nStructure is documented below.",
        Dns_ManagedZonePeeringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs to assign to this ManagedZone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Visibility",
        "The zone's visibility: public zones are exposed to the Internet,\nwhile private zones are visible only to Virtual Private Cloud resources.\nDefault value is `public`.\nPossible values are: `private`, `public`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ForwardingConfig",
        "The presence for this field indicates that outbound forwarding is enabled\nfor this zone. The value of this field contains the set of destinations\nto forward to.\nStructure is documented below.",
        Dns_ManagedZoneForwardingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ReverseLookup",
        "Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse\nlookup queries using automatically configured records for VPC resources. This only applies\nto networks listed under `private_visibility_config`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CloudLoggingConfig",
        "Cloud logging configuration\nStructure is documented below.",
        Dns_ManagedZoneCloudLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User assigned name for this resource.\nMust be unique within the project.\n\n- - -",
        [],
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
        InputType.String,
        "DnsName",
        'The DNS name of this managed zone, for instance "example.com.".',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DnssecConfig",
        "DNSSEC configuration\nStructure is documented below.",
        Dns_ManagedZoneDnssecConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A textual description field. Defaults to 'Managed by Pulumi'.",
        [],
        false,
        false,
      ),
    ];
  }
}
