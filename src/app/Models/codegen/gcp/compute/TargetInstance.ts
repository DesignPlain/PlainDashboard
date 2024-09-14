import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TargetInstanceArgs {
  // An optional description of this resource.
  description?: string;

  /*
The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. `projects/project/zones/zone/instances/instance`) or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project.


- - -
*/
  instance?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported.
Default value is `NO_NAT`.
Possible values are: `NO_NAT`.
*/
  natPolicy?: string;

  // The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The resource URL for the security policy associated with this target instance.
  securityPolicy?: string;

  // URL of the zone where the target instance resides.
  zone?: string;
}
export class TargetInstance extends DS_Resource {
  // The URI of the created resource.
  public selfLink?: string;

  // URL of the zone where the target instance resides.
  public zone?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. `projects/project/zones/zone/instances/instance`) or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project.


- - -
*/
  public instance?: string;

  /*
NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported.
Default value is `NO_NAT`.
Possible values are: `NO_NAT`.
*/
  public natPolicy?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // An optional description of this resource.
  public description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  // The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.
  public network?: string;

  // The resource URL for the security policy associated with this target instance.
  public securityPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The Compute instance VM handling traffic for this target instance.\nAccepts the instance self-link, relative path\n(e.g. `projects/project/zones/zone/instances/instance`) or name. If\nname is given, the zone will default to the given zone or\nthe provider-default zone and the project will default to the\nprovider-level project.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "natPolicy",
        "NAT option controlling how IPs are NAT'ed to the instance.\nCurrently only NO_NAT (default value) is supported.\nDefault value is `NO_NAT`.\nPossible values are: `NO_NAT`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The URL of the network this target instance uses to forward traffic. If not specified, the traffic will be forwarded to the network that the default network interface belongs to.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityPolicy",
        "The resource URL for the security policy associated with this target instance.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "URL of the zone where the target instance resides.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
