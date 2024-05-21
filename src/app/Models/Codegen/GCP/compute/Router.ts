import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RouterBgp,
  compute_RouterBgp_GetTypes,
} from "../types/compute_RouterBgp";

export interface RouterArgs {
  /*
BGP information specific to this router.
Structure is documented below.
*/
  bgp?: compute_RouterBgp;

  // An optional description of this resource.
  description?: string;

  /*
Indicates if a router is dedicated for use with encrypted VLAN
attachments (interconnectAttachments).
*/
  encryptedInterconnectRouter?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  name?: string;

  /*
A reference to the network to which this router belongs.


- - -
*/
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Region where the router resides.
  region?: string;
}
export class Router extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Region where the router resides.
  public region?: string;

  /*
BGP information specific to this router.
Structure is documented below.
*/
  public bgp?: compute_RouterBgp;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  /*
Indicates if a router is dedicated for use with encrypted VLAN
attachments (interconnectAttachments).
*/
  public encryptedInterconnectRouter?: boolean;

  /*
A reference to the network to which this router belongs.


- - -
*/
  public network?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional description of this resource.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "A reference to the network to which this router belongs.\n\n\n- - -",
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
        "region",
        "Region where the router resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bgp",
        "BGP information specific to this router.\nStructure is documented below.",
        compute_RouterBgp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "encryptedInterconnectRouter",
        "Indicates if a router is dedicated for use with encrypted VLAN\nattachments (interconnectAttachments).",
        [],
        false,
        true,
      ),
    ];
  }
}
