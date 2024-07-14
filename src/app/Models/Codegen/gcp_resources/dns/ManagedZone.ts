import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_ManagedZoneCloudLoggingConfig,
  dns_ManagedZoneCloudLoggingConfig_GetTypes,
} from "../types/dns_ManagedZoneCloudLoggingConfig";
import {
  dns_ManagedZoneDnssecConfig,
  dns_ManagedZoneDnssecConfig_GetTypes,
} from "../types/dns_ManagedZoneDnssecConfig";
import {
  dns_ManagedZonePrivateVisibilityConfig,
  dns_ManagedZonePrivateVisibilityConfig_GetTypes,
} from "../types/dns_ManagedZonePrivateVisibilityConfig";
import {
  dns_ManagedZonePeeringConfig,
  dns_ManagedZonePeeringConfig_GetTypes,
} from "../types/dns_ManagedZonePeeringConfig";
import {
  dns_ManagedZoneServiceDirectoryConfig,
  dns_ManagedZoneServiceDirectoryConfig_GetTypes,
} from "../types/dns_ManagedZoneServiceDirectoryConfig";
import {
  dns_ManagedZoneForwardingConfig,
  dns_ManagedZoneForwardingConfig_GetTypes,
} from "../types/dns_ManagedZoneForwardingConfig";

export interface ManagedZoneArgs {
  /*
The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources.
Default value is `public`.
Possible values are: `private`, `public`.
*/
  visibility?: string;

  /*
Cloud logging configuration
Structure is documented below.
*/
  cloudLoggingConfig?: dns_ManagedZoneCloudLoggingConfig;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  description?: string;

  /*
DNSSEC configuration
Structure is documented below.
*/
  dnssecConfig?: dns_ManagedZoneDnssecConfig;

  // Set this true to delete all records in the zone.
  forceDestroy?: boolean;

  /*
For privately visible zones, the set of Virtual Private Cloud
resources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.
Structure is documented below.
*/
  privateVisibilityConfig?: dns_ManagedZonePrivateVisibilityConfig;

  /*
The presence of this field indicates that DNS Peering is enabled for this
zone. The value of this field contains the network to peer with.
Structure is documented below.
*/
  peeringConfig?: dns_ManagedZonePeeringConfig;

  /*
The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
Structure is documented below.
*/
  serviceDirectoryConfig?: dns_ManagedZoneServiceDirectoryConfig;

  // The DNS name of this managed zone, for instance "example.com.".
  dnsName?: string;

  /*
The presence for this field indicates that outbound forwarding is enabled
for this zone. The value of this field contains the set of destinations
to forward to.
Structure is documented below.
*/
  forwardingConfig?: dns_ManagedZoneForwardingConfig;

  /*
User assigned name for this resource.
Must be unique within the project.

- - -
*/
  name?: string;

  /*
A set of key/value label pairs to assign to this ManagedZone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under `private_visibility_config`.
*/
  reverseLookup?: boolean;
}
export class ManagedZone extends Resource {
  // A textual description field. Defaults to 'Managed by Pulumi'.
  public description?: string;

  // Unique identifier for the resource; defined by the server.
  public managedZoneId?: number;

  /*
User assigned name for this resource.
Must be unique within the project.

- - -
*/
  public name?: string;

  /*
Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under `private_visibility_config`.
*/
  public reverseLookup?: boolean;

  /*
The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
Structure is documented below.
*/
  public serviceDirectoryConfig?: dns_ManagedZoneServiceDirectoryConfig;

  /*
Cloud logging configuration
Structure is documented below.
*/
  public cloudLoggingConfig?: dns_ManagedZoneCloudLoggingConfig;

  /*
DNSSEC configuration
Structure is documented below.
*/
  public dnssecConfig?: dns_ManagedZoneDnssecConfig;

  // Set this true to delete all records in the zone.
  public forceDestroy?: boolean;

  /*
For privately visible zones, the set of Virtual Private Cloud
resources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.
Structure is documented below.
*/
  public privateVisibilityConfig?: dns_ManagedZonePrivateVisibilityConfig;

  /*
The time that this resource was created on the server.
This is in RFC3339 text format.
*/
  public creationTime?: string;

  // The DNS name of this managed zone, for instance "example.com.".
  public dnsName?: string;

  /*
The presence for this field indicates that outbound forwarding is enabled
for this zone. The value of this field contains the set of destinations
to forward to.
Structure is documented below.
*/
  public forwardingConfig?: dns_ManagedZoneForwardingConfig;

  /*
A set of key/value label pairs to assign to this ManagedZone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Delegate your managed_zone to these virtual name servers;
defined by the server
*/
  public nameServers?: Array<string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The presence of this field indicates that DNS Peering is enabled for this
zone. The value of this field contains the network to peer with.
Structure is documented below.
*/
  public peeringConfig?: dns_ManagedZonePeeringConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The zone's visibility: public zones are exposed to the Internet,
while private zones are visible only to Virtual Private Cloud resources.
Default value is `public`.
Possible values are: `private`, `public`.
*/
  public visibility?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A textual description field. Defaults to 'Managed by Pulumi'.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "Set this true to delete all records in the zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dnsName",
        'The DNS name of this managed zone, for instance "example.com.".',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceDirectoryConfig",
        "The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.\nStructure is documented below.",
        dns_ManagedZoneServiceDirectoryConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "reverseLookup",
        "Specifies if this is a managed reverse lookup zone. If true, Cloud DNS will resolve reverse\nlookup queries using automatically configured records for VPC resources. This only applies\nto networks listed under `private_visibility_config`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "visibility",
        "The zone's visibility: public zones are exposed to the Internet,\nwhile private zones are visible only to Virtual Private Cloud resources.\nDefault value is `public`.\nPossible values are: `private`, `public`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudLoggingConfig",
        "Cloud logging configuration\nStructure is documented below.",
        dns_ManagedZoneCloudLoggingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "privateVisibilityConfig",
        "For privately visible zones, the set of Virtual Private Cloud\nresources that the zone is visible from. At least one of `gke_clusters` or `networks` must be specified.\nStructure is documented below.",
        dns_ManagedZonePrivateVisibilityConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "peeringConfig",
        "The presence of this field indicates that DNS Peering is enabled for this\nzone. The value of this field contains the network to peer with.\nStructure is documented below.",
        dns_ManagedZonePeeringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "User assigned name for this resource.\nMust be unique within the project.\n\n- - -",
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
        InputType.Object,
        "dnssecConfig",
        "DNSSEC configuration\nStructure is documented below.",
        dns_ManagedZoneDnssecConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "forwardingConfig",
        "The presence for this field indicates that outbound forwarding is enabled\nfor this zone. The value of this field contains the set of destinations\nto forward to.\nStructure is documented below.",
        dns_ManagedZoneForwardingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this ManagedZone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
