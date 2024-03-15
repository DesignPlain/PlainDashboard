import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetInstanceArgs {
  // URL of the zone where the target instance resides.
  Zone?: string;

  // An optional description of this resource.
  Description?: string;

  /*
The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. `projects/project/zones/zone/instances/instance`) or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project.


- - -
*/
  Instance?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported.
Default value is `NO_NAT`.
Possible values are: `NO_NAT`.
*/
  NatPolicy?: string;

  // The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The resource URL for the security policy associated with this target instance.
  SecurityPolicy?: string;
}
export class TargetInstance extends Resource {
  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported.
Default value is `NO_NAT`.
Possible values are: `NO_NAT`.
*/
  public NatPolicy?: string;

  // The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.
  public Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // URL of the zone where the target instance resides.
  public Zone?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. `projects/project/zones/zone/instances/instance`) or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project.


- - -
*/
  public Instance?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  // The resource URL for the security policy associated with this target instance.
  public SecurityPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NatPolicy",
        "NAT option controlling how IPs are NAT'ed to the instance.\nCurrently only NO_NAT (default value) is supported.\nDefault value is `NO_NAT`.\nPossible values are: `NO_NAT`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityPolicy",
        "The resource URL for the security policy associated with this target instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "URL of the zone where the target instance resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The Compute instance VM handling traffic for this target instance.\nAccepts the instance self-link, relative path\n(e.g. `projects/project/zones/zone/instances/instance`) or name. If\nname is given, the zone will default to the given zone or\nthe provider-default zone and the project will default to the\nprovider-level project.\n\n\n- - -",
      ),
    ];
  }
}
