import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SubnetArgs {
  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  Location?: string;

  // The name of the target Distributed Cloud Edge zone.
  Zone?: string;

  // A free-text description of the resource. Max length 1024 characters.
  Description?: string;

  // The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.
  Ipv4Cidrs?: Array<string>;

  /*
The ID of the network to which this router belongs.
Must be of the form: `projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A unique ID that identifies this subnet.


- - -
*/
  SubnetId?: string;

  // VLAN ID for this subnetwork. If not specified, one is assigned automatically.
  VlanId?: number;

  // The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.
  Ipv6Cidrs?: Array<string>;

  // Labels associated with this resource.
  Labels?: Map<string, string>;
}
export class Subnet extends Resource {
  /*
The time when the subnet was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public CreateTime?: string;

  // Labels associated with this resource.
  public Labels?: Map<string, string>;

  // Current stage of the resource to the device by config push.
  public State?: string;

  // The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.
  public Ipv6Cidrs?: Array<string>;

  /*
The canonical name of this resource, with format
`projects/{{project}}/locations/{{location}}/zones/{{zone}}/subnets/{{subnet_id}}`
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.
  public Ipv4Cidrs?: Array<string>;

  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  public Location?: string;

  /*
A unique ID that identifies this subnet.


- - -
*/
  public SubnetId?: string;

  /*
The time when the subnet was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public UpdateTime?: string;

  // The name of the target Distributed Cloud Edge zone.
  public Zone?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public Description?: string;

  /*
The ID of the network to which this router belongs.
Must be of the form: `projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`
*/
  public Network?: string;

  // VLAN ID for this subnetwork. If not specified, one is assigned automatically.
  public VlanId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Ipv4Cidrs",
        "The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.",
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
        InputType.Number,
        "VlanId",
        "VLAN ID for this subnetwork. If not specified, one is assigned automatically.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels associated with this resource.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Ipv6Cidrs",
        "The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The Google Cloud region to which the target Distributed Cloud Edge zone belongs.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The name of the target Distributed Cloud Edge zone.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The ID of the network to which this router belongs.\nMust be of the form: `projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SubnetId",
        "A unique ID that identifies this subnet.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
