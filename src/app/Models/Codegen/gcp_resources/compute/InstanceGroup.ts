import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceGroupNamedPort,
  compute_InstanceGroupNamedPort_GetTypes,
} from "../types/compute_InstanceGroupNamedPort";

export interface InstanceGroupArgs {
  /*
The zone that this instance group should be created in.

- - -
*/
  zone?: string;

  /*
An optional textual description of the instance
group.
*/
  description?: string;

  /*
The list of instances in the group, in `self_link` format.
When adding instances they must all be in the same network and zone as the instance group.
*/
  instances?: Array<string>;

  /*
The name of the instance group. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  name?: string;

  /*
The named port configuration. See the section below
for details on configuration. Structure is documented below.
*/
  namedPorts?: Array<compute_InstanceGroupNamedPort>;

  /*
The URL of the network the instance group is in. If
this is different from the network where the instances are in, the creation
fails. Defaults to the network where the instances are in (if neither
`network` nor `instances` is specified, this field will be blank).
*/
  network?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class InstanceGroup extends Resource {
  /*
The name of the instance group. Must be 1-63
characters long and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters
include lowercase letters, numbers, and hyphens.
*/
  public name?: string;

  /*
The URL of the network the instance group is in. If
this is different from the network where the instances are in, the creation
fails. Defaults to the network where the instances are in (if neither
`network` nor `instances` is specified, this field will be blank).
*/
  public network?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The zone that this instance group should be created in.

- - -
*/
  public zone?: string;

  /*
An optional textual description of the instance
group.
*/
  public description?: string;

  /*
The named port configuration. See the section below
for details on configuration. Structure is documented below.
*/
  public namedPorts?: Array<compute_InstanceGroupNamedPort>;

  // The URI of the created resource.
  public selfLink?: string;

  // The number of instances in the group.
  public size?: number;

  /*
The list of instances in the group, in `self_link` format.
When adding instances they must all be in the same network and zone as the instance group.
*/
  public instances?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "namedPorts",
        "The named port configuration. See the section below\nfor details on configuration. Structure is documented below.",
        compute_InstanceGroupNamedPort_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The URL of the network the instance group is in. If\nthis is different from the network where the instances are in, the creation\nfails. Defaults to the network where the instances are in (if neither\n`network` nor `instances` is specified, this field will be blank).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone that this instance group should be created in.\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional textual description of the instance\ngroup.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instances",
        "The list of instances in the group, in `self_link` format.\nWhen adding instances they must all be in the same network and zone as the instance group.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the instance group. Must be 1-63\ncharacters long and comply with\n[RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Supported characters\ninclude lowercase letters, numbers, and hyphens.",
        [],
        false,
        true,
      ),
    ];
  }
}
