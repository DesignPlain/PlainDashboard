import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RouterBgp,
  Compute_RouterBgp_GetTypes,
} from "../types/Compute_RouterBgp";

export interface RouterArgs {
  /*
BGP information specific to this router.
Structure is documented below.
*/
  Bgp?: Compute_RouterBgp;

  // An optional description of this resource.
  Description?: string;

  /*
Indicates if a router is dedicated for use with encrypted VLAN
attachments (interconnectAttachments).
*/
  EncryptedInterconnectRouter?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;

  /*
A reference to the network to which this router belongs.


- - -
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Region where the router resides.
  Region?: string;
}
export class Router extends Resource {
  /*
Indicates if a router is dedicated for use with encrypted VLAN
attachments (interconnectAttachments).
*/
  public EncryptedInterconnectRouter?: boolean;

  /*
Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?`
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public Name?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
BGP information specific to this router.
Structure is documented below.
*/
  public Bgp?: Compute_RouterBgp;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
A reference to the network to which this router belongs.


- - -
*/
  public Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Region where the router resides.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?`\nwhich means the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "A reference to the network to which this router belongs.\n\n\n- - -",
        [],
        true,
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
        "Region",
        "Region where the router resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Bgp",
        "BGP information specific to this router.\nStructure is documented below.",
        Compute_RouterBgp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EncryptedInterconnectRouter",
        "Indicates if a router is dedicated for use with encrypted VLAN\nattachments (interconnectAttachments).",
        [],
        false,
        true,
      ),
    ];
  }
}
