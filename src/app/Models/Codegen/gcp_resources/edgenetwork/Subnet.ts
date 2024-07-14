import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SubnetArgs {
  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
The ID of the network to which this router belongs.
Must be of the form: `projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`
*/
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // VLAN ID for this subnetwork. If not specified, one is assigned automatically.
  vlanId?: number;

  // The name of the target Distributed Cloud Edge zone.
  zone?: string;

  // The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.
  ipv4Cidrs?: Array<string>;

  // The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.
  ipv6Cidrs?: Array<string>;

  // Labels associated with this resource.
  labels?: Map<string, string>;

  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  location?: string;

  /*
A unique ID that identifies this subnet.


- - -
*/
  subnetId?: string;
}
export class Subnet extends Resource {
  /*
The time when the subnet was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public updateTime?: string;

  // VLAN ID for this subnetwork. If not specified, one is assigned automatically.
  public vlanId?: number;

  /*
The time when the subnet was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: `2014-10-02T15:01:23Z` and `2014-10-02T15:01:23.045123456Z`.
*/
  public createTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
The ID of the network to which this router belongs.
Must be of the form: `projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`
*/
  public network?: string;

  /*
The canonical name of this resource, with format
`projects/{{project}}/locations/{{location}}/zones/{{zone}}/subnets/{{subnet_id}}`
*/
  public name?: string;

  /*
A unique ID that identifies this subnet.


- - -
*/
  public subnetId?: string;

  // Current stage of the resource to the device by config push.
  public state?: string;

  // The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.
  public ipv4Cidrs?: Array<string>;

  // The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.
  public ipv6Cidrs?: Array<string>;

  // Labels associated with this resource.
  public labels?: Map<string, string>;

  // The Google Cloud region to which the target Distributed Cloud Edge zone belongs.
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The name of the target Distributed Cloud Edge zone.
  public zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "vlanId",
        "VLAN ID for this subnetwork. If not specified, one is assigned automatically.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The name of the target Distributed Cloud Edge zone.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv4Cidrs",
        "The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The Google Cloud region to which the target Distributed Cloud Edge zone belongs.",
        [],
        true,
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
        "The ID of the network to which this router belongs.\nMust be of the form: `projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipv6Cidrs",
        "The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels associated with this resource.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "A unique ID that identifies this subnet.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A free-text description of the resource. Max length 1024 characters.",
        [],
        false,
        true,
      ),
    ];
  }
}
