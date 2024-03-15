import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { HaVpnGatewayVpnInterface } from "../types/HaVpnGatewayVpnInterface";

export interface HaVpnGatewayArgs {
  // The region this gateway should sit in.
  Region?: string;

  /*
The stack type for this VPN gateway to identify the IP protocols that are enabled.
If not specified, IPV4_ONLY will be used.
Default value is `IPV4_ONLY`.
Possible values are: `IPV4_ONLY`, `IPV4_IPV6`.
*/
  StackType?: string;

  /*
A list of interfaces on this VPN gateway.
Structure is documented below.
*/
  VpnInterfaces?: Array<HaVpnGatewayVpnInterface>;

  // An optional description of this resource.
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The network this VPN gateway is accepting traffic for.


- - -
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class HaVpnGateway extends Resource {
  // The region this gateway should sit in.
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The stack type for this VPN gateway to identify the IP protocols that are enabled.
If not specified, IPV4_ONLY will be used.
Default value is `IPV4_ONLY`.
Possible values are: `IPV4_ONLY`, `IPV4_IPV6`.
*/
  public StackType?: string;

  /*
A list of interfaces on this VPN gateway.
Structure is documented below.
*/
  public VpnInterfaces?: Array<HaVpnGatewayVpnInterface>;

  // An optional description of this resource.
  public Description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  /*
The network this VPN gateway is accepting traffic for.


- - -
*/
  public Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region this gateway should sit in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StackType",
        "The stack type for this VPN gateway to identify the IP protocols that are enabled.\nIf not specified, IPV4_ONLY will be used.\nDefault value is `IPV4_ONLY`.\nPossible values are: `IPV4_ONLY`, `IPV4_IPV6`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "VpnInterfaces",
        "A list of interfaces on this VPN gateway.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The network this VPN gateway is accepting traffic for.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
