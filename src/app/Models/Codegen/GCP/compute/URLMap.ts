import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { URLMapHeaderAction } from "../types/URLMapHeaderAction";
import { URLMapHostRule } from "../types/URLMapHostRule";
import { URLMapDefaultUrlRedirect } from "../types/URLMapDefaultUrlRedirect";
import { URLMapPathMatcher } from "../types/URLMapPathMatcher";
import { URLMapTest } from "../types/URLMapTest";
import { URLMapDefaultRouteAction } from "../types/URLMapDefaultRouteAction";

export interface URLMapArgs {
  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: URLMapDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  Description?: string;

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
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  PathMatchers?: Array<URLMapPathMatcher>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The list of expected URL mapping tests. Request to update this UrlMap will
succeed only if all of the test cases pass. You can specify a maximum of 100
tests per UrlMap.
Structure is documented below.
*/
  Tests?: Array<URLMapTest>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions
like URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.
If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService
is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  DefaultRouteAction?: URLMapDefaultRouteAction;

  // The backend service or backend bucket to use when none of the given rules match.
  DefaultService?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here take effect after
headerAction specified under pathMatcher.
Structure is documented below.
*/
  HeaderAction?: URLMapHeaderAction;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  HostRules?: Array<URLMapHostRule>;
}
export class URLMap extends Resource {
  // The unique identifier for the resource.
  public MapId?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The backend service or backend bucket to use when none of the given rules match.
  public DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  public DefaultUrlRedirect?: URLMapDefaultUrlRedirect;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  public PathMatchers?: Array<URLMapPathMatcher>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions
like URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.
If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService
is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  public DefaultRouteAction?: URLMapDefaultRouteAction;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  public Description?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here take effect after
headerAction specified under pathMatcher.
Structure is documented below.
*/
  public HeaderAction?: URLMapHeaderAction;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  public HostRules?: Array<URLMapHostRule>;

  /*
The list of expected URL mapping tests. Request to update this UrlMap will
succeed only if all of the test cases pass. You can specify a maximum of 100
tests per UrlMap.
Structure is documented below.
*/
  public Tests?: Array<URLMapTest>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
Fingerprint of this resource. A hash of the contents stored in this object. This
field is used in optimistic locking.
*/
  public Fingerprint?: string;

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

  // The URI of the created resource.
  public SelfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DefaultRouteAction",
        "defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions\nlike URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.\nIf defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService\nis set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultService",
        "The backend service or backend bucket to use when none of the given rules match.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "HostRules",
        "The list of HostRules to use against the URL.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultUrlRedirect",
        "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create\nthe resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is created. The\nname must be 1-63 characters long, and comply with RFC1035. Specifically, the\nname must be 1-63 characters long and match the regular expression\n`a-z?` which means the first character must be a lowercase\nletter, and all following characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PathMatchers",
        "The list of named PathMatchers to use against the URL.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tests",
        "The list of expected URL mapping tests. Request to update this UrlMap will\nsucceed only if all of the test cases pass. You can specify a maximum of 100\ntests per UrlMap.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HeaderAction",
        "Specifies changes to request and response headers that need to take effect for\nthe selected backendService. The headerAction specified here take effect after\nheaderAction specified under pathMatcher.\nStructure is documented below.",
      ),
    ];
  }
}
