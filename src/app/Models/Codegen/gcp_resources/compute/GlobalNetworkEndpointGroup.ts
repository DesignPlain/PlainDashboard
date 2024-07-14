import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GlobalNetworkEndpointGroupArgs {
  /*
The default port used if the port number is not specified in the
network endpoint.
*/
  defaultPort?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
Type of network endpoints in this network endpoint group.
Possible values are: `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.


- - -
*/
  networkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class GlobalNetworkEndpointGroup extends Resource {
  // The URI of the created resource.
  public selfLink?: string;

  /*
The default port used if the port number is not specified in the
network endpoint.
*/
  public defaultPort?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
Type of network endpoints in this network endpoint group.
Possible values are: `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.


- - -
*/
  public networkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkEndpointType",
        "Type of network endpoints in this network endpoint group.\nPossible values are: `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.\n\n\n- - -",
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
        InputType.Number,
        "defaultPort",
        "The default port used if the port number is not specified in the\nnetwork endpoint.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        true,
      ),
    ];
  }
}
