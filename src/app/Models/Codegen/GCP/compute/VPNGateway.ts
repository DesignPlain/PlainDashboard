import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VPNGatewayArgs {
  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The network this VPN gateway is accepting traffic for.


- - -
*/
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region this gateway should sit in.
  region?: string;

  // An optional description of this resource.
  description?: string;
}
export class VPNGateway extends Resource {
  // The unique identifier for the resource.
  public gatewayId?: number;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The network this VPN gateway is accepting traffic for.


- - -
*/
  public network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region this gateway should sit in.
  public region?: string;

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
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The network this VPN gateway is accepting traffic for.\n\n\n- - -",
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
        "The region this gateway should sit in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
    ];
  }
}
