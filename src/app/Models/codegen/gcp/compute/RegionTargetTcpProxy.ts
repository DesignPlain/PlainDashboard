import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RegionTargetTcpProxyArgs {
  /*
A reference to the BackendService resource.


- - -
*/
  backendService?: string;

  // An optional description of this resource.
  description?: string;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
This field only applies when the forwarding rule that references
this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
*/
  proxyBind?: boolean;

  /*
Specifies the type of proxy header to append before sending data to
the backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  proxyHeader?: string;

  /*
The Region in which the created target TCP proxy should reside.
If it is not provided, the provider region is used.
*/
  region?: string;
}
export class RegionTargetTcpProxy extends DS_Resource {
  // An optional description of this resource.
  public description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Specifies the type of proxy header to append before sending data to
the backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  public proxyHeader?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
A reference to the BackendService resource.


- - -
*/
  public backendService?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

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

  /*
This field only applies when the forwarding rule that references
this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
*/
  public proxyBind?: boolean;

  // The unique identifier for the resource.
  public proxyId?: number;

  /*
The Region in which the created target TCP proxy should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'proxyBind',
        'This field only applies when the forwarding rule that references\nthis target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'proxyHeader',
        'Specifies the type of proxy header to append before sending data to\nthe backend.\nDefault value is `NONE`.\nPossible values are: `NONE`, `PROXY_V1`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The Region in which the created target TCP proxy should reside.\nIf it is not provided, the provider region is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'backendService',
        'A reference to the BackendService resource.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
