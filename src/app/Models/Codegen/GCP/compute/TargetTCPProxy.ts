import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetTCPProxyArgs {
  /*
A reference to the BackendService resource.


- - -
*/
  BackendService?: string;

  // An optional description of this resource.
  Description?: string;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
This field only applies when the forwarding rule that references
this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
*/
  ProxyBind?: boolean;

  /*
Specifies the type of proxy header to append before sending data to
the backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  ProxyHeader?: string;
}
export class TargetTCPProxy extends Resource {
  // An optional description of this resource.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
This field only applies when the forwarding rule that references
this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
*/
  public ProxyBind?: boolean;

  /*
A reference to the BackendService resource.


- - -
*/
  public BackendService?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

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

  /*
Specifies the type of proxy header to append before sending data to
the backend.
Default value is `NONE`.
Possible values are: `NONE`, `PROXY_V1`.
*/
  public ProxyHeader?: string;

  // The unique identifier for the resource.
  public ProxyId?: number;

  // The URI of the created resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BackendService",
        "A reference to the BackendService resource.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ProxyBind",
        "This field only applies when the forwarding rule that references\nthis target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ProxyHeader",
        "Specifies the type of proxy header to append before sending data to\nthe backend.\nDefault value is `NONE`.\nPossible values are: `NONE`, `PROXY_V1`.",
      ),
    ];
  }
}