import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GlobalNetworkEndpointGroupArgs {
  /*
The default port used if the port number is not specified in the
network endpoint.
*/
  DefaultPort?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
Type of network endpoints in this network endpoint group.
Possible values are: `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.


- - -
*/
  NetworkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class GlobalNetworkEndpointGroup extends Resource {
  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  /*
Type of network endpoints in this network endpoint group.
Possible values are: `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.


- - -
*/
  public NetworkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The default port used if the port number is not specified in the
network endpoint.
*/
  public DefaultPort?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "DefaultPort",
        "The default port used if the port number is not specified in the\nnetwork endpoint.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkEndpointType",
        "Type of network endpoints in this network endpoint group.\nPossible values are: `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
