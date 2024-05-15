import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_URLMapDefaultUrlRedirect,
  Compute_URLMapDefaultUrlRedirect_GetTypes,
} from "../types/Compute_URLMapDefaultUrlRedirect";
import {
  Compute_URLMapHeaderAction,
  Compute_URLMapHeaderAction_GetTypes,
} from "../types/Compute_URLMapHeaderAction";
import {
  Compute_URLMapHostRule,
  Compute_URLMapHostRule_GetTypes,
} from "../types/Compute_URLMapHostRule";
import {
  Compute_URLMapPathMatcher,
  Compute_URLMapPathMatcher_GetTypes,
} from "../types/Compute_URLMapPathMatcher";
import {
  Compute_URLMapTest,
  Compute_URLMapTest_GetTypes,
} from "../types/Compute_URLMapTest";
import {
  Compute_URLMapDefaultRouteAction,
  Compute_URLMapDefaultRouteAction_GetTypes,
} from "../types/Compute_URLMapDefaultRouteAction";

export interface URLMapArgs {
  // The backend service or backend bucket to use when none of the given rules match.
  DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: Compute_URLMapDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  Description?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here take effect after
headerAction specified under pathMatcher.
Structure is documented below.
*/
  HeaderAction?: Compute_URLMapHeaderAction;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  HostRules?: Array<Compute_URLMapHostRule>;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  PathMatchers?: Array<Compute_URLMapPathMatcher>;

  /*
The list of expected URL mapping tests. Request to update this UrlMap will
succeed only if all of the test cases pass. You can specify a maximum of 100
tests per UrlMap.
Structure is documented below.
*/
  Tests?: Array<Compute_URLMapTest>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions
like URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.
If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService
is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  DefaultRouteAction?: Compute_URLMapDefaultRouteAction;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
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
export class URLMap extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // The backend service or backend bucket to use when none of the given rules match.
  public DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  public DefaultUrlRedirect?: Compute_URLMapDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  public Description?: string;

  // The unique identifier for the resource.
  public MapId?: number;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  public PathMatchers?: Array<Compute_URLMapPathMatcher>;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here take effect after
headerAction specified under pathMatcher.
Structure is documented below.
*/
  public HeaderAction?: Compute_URLMapHeaderAction;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  public HostRules?: Array<Compute_URLMapHostRule>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions
like URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.
If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService
is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  public DefaultRouteAction?: Compute_URLMapDefaultRouteAction;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  public Name?: string;

  /*
Fingerprint of this resource. A hash of the contents stored in this object. This
field is used in optimistic locking.
*/
  public Fingerprint?: string;

  /*
The list of expected URL mapping tests. Request to update this UrlMap will
succeed only if all of the test cases pass. You can specify a maximum of 100
tests per UrlMap.
Structure is documented below.
*/
  public Tests?: Array<Compute_URLMapTest>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is created. The\nname must be 1-63 characters long, and comply with RFC1035. Specifically, the\nname must be 1-63 characters long and match the regular expression\n`a-z?` which means the first character must be a lowercase\nletter, and all following characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
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
        "DefaultService",
        "The backend service or backend bucket to use when none of the given rules match.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultUrlRedirect",
        "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
        Compute_URLMapDefaultUrlRedirect_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create\nthe resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HeaderAction",
        "Specifies changes to request and response headers that need to take effect for\nthe selected backendService. The headerAction specified here take effect after\nheaderAction specified under pathMatcher.\nStructure is documented below.",
        Compute_URLMapHeaderAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "HostRules",
        "The list of HostRules to use against the URL.\nStructure is documented below.",
        Compute_URLMapHostRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultRouteAction",
        "defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions\nlike URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.\nIf defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService\nis set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nStructure is documented below.",
        Compute_URLMapDefaultRouteAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "PathMatchers",
        "The list of named PathMatchers to use against the URL.\nStructure is documented below.",
        Compute_URLMapPathMatcher_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Tests",
        "The list of expected URL mapping tests. Request to update this UrlMap will\nsucceed only if all of the test cases pass. You can specify a maximum of 100\ntests per UrlMap.\nStructure is documented below.",
        Compute_URLMapTest_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
