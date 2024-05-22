import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_URLMapDefaultRouteAction,
  compute_URLMapDefaultRouteAction_GetTypes,
} from "../types/compute_URLMapDefaultRouteAction";
import {
  compute_URLMapDefaultUrlRedirect,
  compute_URLMapDefaultUrlRedirect_GetTypes,
} from "../types/compute_URLMapDefaultUrlRedirect";
import {
  compute_URLMapHeaderAction,
  compute_URLMapHeaderAction_GetTypes,
} from "../types/compute_URLMapHeaderAction";
import {
  compute_URLMapHostRule,
  compute_URLMapHostRule_GetTypes,
} from "../types/compute_URLMapHostRule";
import {
  compute_URLMapTest,
  compute_URLMapTest_GetTypes,
} from "../types/compute_URLMapTest";
import {
  compute_URLMapPathMatcher,
  compute_URLMapPathMatcher_GetTypes,
} from "../types/compute_URLMapPathMatcher";

export interface URLMapArgs {
  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  hostRules?: Array<compute_URLMapHostRule>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The list of expected URL mapping tests. Request to update this UrlMap will
succeed only if all of the test cases pass. You can specify a maximum of 100
tests per UrlMap.
Structure is documented below.
*/
  tests?: Array<compute_URLMapTest>;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  pathMatchers?: Array<compute_URLMapPathMatcher>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions
like URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.
If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService
is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  defaultRouteAction?: compute_URLMapDefaultRouteAction;

  // The backend service or backend bucket to use when none of the given rules match.
  defaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  defaultUrlRedirect?: compute_URLMapDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  description?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here take effect after
headerAction specified under pathMatcher.
Structure is documented below.
*/
  headerAction?: compute_URLMapHeaderAction;
}
export class URLMap extends Resource {
  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  public hostRules?: Array<compute_URLMapHostRule>;

  /*
Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
`a-z?` which means the first character must be a lowercase
letter, and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // The URI of the created resource.
  public selfLink?: string;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions
like URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.
If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService
is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
Structure is documented below.
*/
  public defaultRouteAction?: compute_URLMapDefaultRouteAction;

  /*
An optional description of this resource. Provide this property when you create
the resource.
*/
  public description?: string;

  /*
Specifies changes to request and response headers that need to take effect for
the selected backendService. The headerAction specified here take effect after
headerAction specified under pathMatcher.
Structure is documented below.
*/
  public headerAction?: compute_URLMapHeaderAction;

  /*
The list of expected URL mapping tests. Request to update this UrlMap will
succeed only if all of the test cases pass. You can specify a maximum of 100
tests per UrlMap.
Structure is documented below.
*/
  public tests?: Array<compute_URLMapTest>;

  /*
Fingerprint of this resource. A hash of the contents stored in this object. This
field is used in optimistic locking.
*/
  public fingerprint?: string;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  public pathMatchers?: Array<compute_URLMapPathMatcher>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The unique identifier for the resource.
  public mapId?: number;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // The backend service or backend bucket to use when none of the given rules match.
  public defaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  public defaultUrlRedirect?: compute_URLMapDefaultUrlRedirect;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "defaultUrlRedirect",
        "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
        compute_URLMapDefaultUrlRedirect_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "hostRules",
        "The list of HostRules to use against the URL.\nStructure is documented below.",
        compute_URLMapHostRule_GetTypes(),
        false,
        false,
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
        InputType.Array,
        "tests",
        "The list of expected URL mapping tests. Request to update this UrlMap will\nsucceed only if all of the test cases pass. You can specify a maximum of 100\ntests per UrlMap.\nStructure is documented below.",
        compute_URLMapTest_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is created. The\nname must be 1-63 characters long, and comply with RFC1035. Specifically, the\nname must be 1-63 characters long and match the regular expression\n`a-z?` which means the first character must be a lowercase\nletter, and all following characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "pathMatchers",
        "The list of named PathMatchers to use against the URL.\nStructure is documented below.",
        compute_URLMapPathMatcher_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultRouteAction",
        "defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions\nlike URL rewrites, header transformations, etc. prior to forwarding the request to the selected backend.\nIf defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService\nis set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nStructure is documented below.",
        compute_URLMapDefaultRouteAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultService",
        "The backend service or backend bucket to use when none of the given rules match.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when you create\nthe resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "headerAction",
        "Specifies changes to request and response headers that need to take effect for\nthe selected backendService. The headerAction specified here take effect after\nheaderAction specified under pathMatcher.\nStructure is documented below.",
        compute_URLMapHeaderAction_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
