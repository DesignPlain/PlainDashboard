import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceGroupNamedPort } from "../types/InstanceGroupNamedPort";

export interface InstanceGroupArgs {
  /*
An optional textual description of the instance
group.
*/
  Description?: string;

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
  NamedPorts?: Array<InstanceGroupNamedPort>;

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
}
export class InstanceGroup extends Resource {
  /*
An optional textual description of the instance
group.
*/
  public Description?: string;

  /*
The list of instances in the group, in `self_link` format.
When adding instances they must all be in the same network and zone as the instance group.
*/
  public Instances?: Array<string>;

  /*
The named port configuration. See the section below
for details on configuration. Structure is documented below.
*/
  public NamedPorts?: Array<InstanceGroupNamedPort>;

  // The URI of the created resource.
  public SelfLink?: string;

  // The number of instances in the group.
  public Size?: number;

  /*
The zone that this instance group should be created in.

- - -
*/
  public Zone?: string;

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
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone that this instance group should be created in.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the instance\ngroup.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Instances",
        "The list of instances in the group, in `self_link` format.\nWhen adding instances they must all be in the same network and zone as the instance group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the instance group. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NamedPorts",
        "The named port configuration. See the section below\nfor details on configuration. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The URL of the network the instance group is in. If\nthis is different from the network where the instances are in, the creation\nfails. Defaults to the network where the instances are in (if neither\n`network` nor `instances` is specified, this field will be blank).",
      ),
    ];
  }
}
