import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetGrpcProxyArgs {
  /*
URL to the UrlMap resource that defines the mapping from URL to
the BackendService. The protocol field in the BackendService
must be set to GRPC.
*/
  UrlMap?: string;

  /*
If true, indicates that the BackendServices referenced by
the urlMap may be accessed by gRPC applications without using
a sidecar proxy. This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to
*/
  ValidateForProxyless?: boolean;

  // An optional description of this resource.
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class TargetGrpcProxy extends Resource {
  // Server-defined URL with id for the resource.
  public SelfLinkWithId?: string;

  /*
URL to the UrlMap resource that defines the mapping from URL to
the BackendService. The protocol field in the BackendService
must be set to GRPC.
*/
  public UrlMap?: string;

  /*
If true, indicates that the BackendServices referenced by
the urlMap may be accessed by gRPC applications without using
a sidecar proxy. This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to
*/
  public ValidateForProxyless?: boolean;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Name of the resource. Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Fingerprint of this resource. A hash of the contents stored in
this object. This field is used in optimistic locking. This field
will be ignored when inserting a TargetGrpcProxy. An up-to-date
fingerprint must be provided in order to patch/update the
TargetGrpcProxy; otherwise, the request will fail with error
412 conditionNotMet. To see the latest fingerprint, make a get()
request to retrieve the TargetGrpcProxy. A base64-encoded string.
*/
  public Fingerprint?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "UrlMap",
        "URL to the UrlMap resource that defines the mapping from URL to\nthe BackendService. The protocol field in the BackendService\nmust be set to GRPC.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ValidateForProxyless",
        'If true, indicates that the BackendServices referenced by\nthe urlMap may be accessed by gRPC applications without using\na sidecar proxy. This will enable configuration checks on urlMap\nand its referenced BackendServices to not allow unsupported features.\nA gRPC application must use "xds:///" scheme in the target URI\nof the service it is connecting to. If false, indicates that the\nBackendServices referenced by the urlMap will be accessed by gRPC\napplications via a sidecar proxy. In this case, a gRPC application\nmust not use "xds:///" scheme in the target URI of the service\nit is connecting to',
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource\nis created. The name must be 1-63 characters long, and comply\nwith RFC1035. Specifically, the name must be 1-63 characters long\nand match the regular expression `a-z?` which\nmeans the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
