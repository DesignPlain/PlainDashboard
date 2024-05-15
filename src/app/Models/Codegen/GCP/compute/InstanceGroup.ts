import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceGroupNamedPort,
  Compute_InstanceGroupNamedPort_GetTypes,
} from "../types/Compute_InstanceGroupNamedPort";

export interface InstanceGroupArgs {
  /*
The list of instances in the group, in `self_link` format.
When adding instances they must all be in the same network and zone as the instance group.
*/
  Instances?: Array<string>;

  /*
The name of the instance group. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  Name?: string;

  /*
The named port configuration. See the section below
for details on configuration. Structure is documented below.
*/
  NamedPorts?: Array<Compute_InstanceGroupNamedPort>;

  /*
The URL of the network the instance group is in. If
this is different from the network where the instances are in, the creation
fails. Defaults to the network where the instances are in (if neither
`network` nor `instances` is specified, this field will be blank).
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The zone that this instance group should be created in.

- - -
*/
  Zone?: string;

  /*
An optional textual description of the instance
group.
*/
  Description?: string;
}
export class InstanceGroup extends Resource {
  /*
An optional textual description of the instance
group.
*/
  public Description?: string;

  /*
The named port configuration. See the section below
for details on configuration. Structure is documented below.
*/
  public NamedPorts?: Array<Compute_InstanceGroupNamedPort>;

  // The number of instances in the group.
  public Size?: number;

  /*
The zone that this instance group should be created in.

- - -
*/
  public Zone?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The list of instances in the group, in `self_link` format.
When adding instances they must all be in the same network and zone as the instance group.
*/
  public Instances?: Array<string>;

  /*
The name of the instance group. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  public Name?: string;

  /*
The URL of the network the instance group is in. If
this is different from the network where the instances are in, the creation
fails. Defaults to the network where the instances are in (if neither
`network` nor `instances` is specified, this field will be blank).
*/
  public Network?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "NamedPorts",
        "The named port configuration. See the section below\nfor details on configuration. Structure is documented below.",
        Compute_InstanceGroupNamedPort_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The URL of the network the instance group is in. If\nthis is different from the network where the instances are in, the creation\nfails. Defaults to the network where the instances are in (if neither\n`network` nor `instances` is specified, this field will be blank).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that this instance group should be created in.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the instance\ngroup.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Instances",
        "The list of instances in the group, in `self_link` format.\nWhen adding instances they must all be in the same network and zone as the instance group.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the instance group. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
        [],
        false,
        true,
      ),
    ];
  }
}
