import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ManagedZoneDnssecConfig } from "../types/ManagedZoneDnssecConfig";
import { ManagedZonePeeringConfig } from "../types/ManagedZonePeeringConfig";
import { ManagedZonePrivateVisibilityConfig } from "../types/ManagedZonePrivateVisibilityConfig";
import { ManagedZoneCloudLoggingConfig } from "../types/ManagedZoneCloudLoggingConfig";
import { ManagedZoneForwardingConfig } from "../types/ManagedZoneForwardingConfig";
import { ManagedZoneServiceDirectoryConfig } from "../types/ManagedZoneServiceDirectoryConfig";

export interface ManagedZoneArgs {
  /*
The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
Structure is documented below.
*/
  ServiceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;

  // The DNS name of this managed zone, for instance "example.com.".
  DnsName?: string;

  /*
DNSSEC configuration
Structure is documented below.
*/
  DnssecConfig?: ManagedZoneDnssecConfig;

  // Set this true to delete all records in the zone.
  ForceDestroy?: boolean;

  /*
A set of key/value label pairs to assign to this ManagedZone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The presence of this field indicates that DNS Peering is enabled for this
zone. The value of this field contains the network to peer with.
Structure is documented below.
*/
  PeeringConfig?: ManagedZonePeeringConfig;

  /*
For privately visible zones, the set of Virtual Private Cloud
resources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.
Structure is documented below.
*/
  PrivateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;

  /*
The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources.
Default value is `public`.
Possible values are: `private`, `public`.
*/
  Visibility?: string;

  /*
Cloud logging configuration
Structure is documented below.
*/
  CloudLoggingConfig?: ManagedZoneCloudLoggingConfig;

  /*
The presence for this field indicates that outbound forwarding is enabled
for this zone. The value of this field contains the set of destinations
to forward to.
Structure is documented below.
*/
  ForwardingConfig?: ManagedZoneForwardingConfig;

  /*
Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under `private_visibility_config`.
*/
  ReverseLookup?: boolean;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  Description?: string;

  /*
User assigned name for this resource.
Must be unique within the project.

- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ManagedZone extends Resource {
  /*
The time that this resource was created on the server.
This is in RFC3339 text format.
*/
  public CreationTime?: string;

  /*
DNSSEC configuration
Structure is documented below.
*/
  public DnssecConfig?: ManagedZoneDnssecConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
For privately visible zones, the set of Virtual Private Cloud
resources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.
Structure is documented below.
*/
  public PrivateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The DNS name of this managed zone, for instance "example.com.".
  public DnsName?: string;

  /*
The presence for this field indicates that outbound forwarding is enabled
for this zone. The value of this field contains the set of destinations
to forward to.
Structure is documented below.
*/
  public ForwardingConfig?: ManagedZoneForwardingConfig;

  /*
User assigned name for this resource.
Must be unique within the project.

- - -
*/
  public Name?: string;

  /*
Delegate your managed_zone to these virtual name servers;
defined by the server
*/
  public NameServers?: Array<string>;

  /*
The presence of this field indicates that DNS Peering is enabled for this
zone. The value of this field contains the network to peer with.
Structure is documented below.
*/
  public PeeringConfig?: ManagedZonePeeringConfig;

  /*
Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under `private_visibility_config`.
*/
  public ReverseLookup?: boolean;

  /*
The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources.
Default value is `public`.
Possible values are: `private`, `public`.
*/
  public Visibility?: string;

  /*
Cloud logging configuration
Structure is documented below.
*/
  public CloudLoggingConfig?: ManagedZoneCloudLoggingConfig;

  /*
A set of key/value label pairs to assign to this ManagedZone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
Structure is documented below.
*/
  public ServiceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  public Description?: string;

  // Set this true to delete all records in the zone.
  public ForceDestroy?: boolean;

  // Unique identifier for the resource; defined by the server.
  public ManagedZoneId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DnsName",
        'The DNS name of this managed zone, for instance "example.com.".',
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceDestroy",
        "Set this true to delete all records in the zone.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateVisibilityConfig",
        "For privately visible zones, the set of Virtual Private Cloud\nresources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User assigned name for this resource.\nMust be unique within the project.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeeringConfig",
        "The presence of this field indicates that DNS Peering is enabled for this\nzone. The value of this field contains the network to peer with.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Visibility",
        "The zone's visibility: public zones are exposed to the Internet,\nwhile private zones are visible only to Virtual Private Cloud resources.\nDefault value is `public`.\nPossible values are: `private`, `public`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ForwardingConfig",
        "The presence for this field indicates that outbound forwarding is enabled\nfor this zone. The value of this field contains the set of destinations\nto forward to.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ReverseLookup",
        "Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse\nlookup queries using automatically configured records for VPC resources. This only applies\nto networks listed under `private_visibility_config`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A textual description field. Defaults to 'Managed by Pulumi'.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceDirectoryConfig",
        "The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to this ManagedZone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CloudLoggingConfig",
        "Cloud logging configuration\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DnssecConfig",
        "DNSSEC configuration\nStructure is documented below.",
      ),
    ];
  }
}
