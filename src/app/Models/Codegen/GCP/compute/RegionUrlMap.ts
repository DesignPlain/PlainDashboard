import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionUrlMapTest } from "../types/RegionUrlMapTest";
import { RegionUrlMapDefaultRouteAction } from "../types/RegionUrlMapDefaultRouteAction";
import { RegionUrlMapDefaultUrlRedirect } from "../types/RegionUrlMapDefaultUrlRedirect";
import { RegionUrlMapHostRule } from "../types/RegionUrlMapHostRule";
import { RegionUrlMapPathMatcher } from "../types/RegionUrlMapPathMatcher";

export interface RegionUrlMapArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The list of expected URL mappings. Requests to update this UrlMap will
succeed only if all of the test cases pass.
Structure is documented below.
*/
  Tests?: Array<RegionUrlMapTest>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
URL maps for Classic external HTTP(S) load balancers only support the urlRewrite action within defaultRouteAction.
defaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.
Structure is documented below.
*/
  DefaultRouteAction?: RegionUrlMapDefaultRouteAction;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: RegionUrlMapDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  HostRules?: Array<RegionUrlMapHostRule>;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  PathMatchers?: Array<RegionUrlMapPathMatcher>;

  /*
The full or partial URL of the defaultService resource to which traffic is directed if
none of the hostRules match. If defaultRouteAction is additionally specified, advanced
routing actions like URL Rewrites, etc. take effect prior to sending the request to the
backend. However, if defaultService is specified, defaultRouteAction cannot contain any
weightedBackendServices. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified.  Only one of defaultService,
defaultUrlRedirect or defaultRouteAction.weightedBackendService must be set.
*/
  DefaultService?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  Name?: string;

  /*
The Region in which the url map should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;
}
export class RegionUrlMap extends Resource {
  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public Fingerprint?: string;

  /*
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  public PathMatchers?: Array<RegionUrlMapPathMatcher>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  // The unique identifier for the resource.
  public MapId?: number;

  /*
The Region in which the url map should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The list of expected URL mappings. Requests to update this UrlMap will
succeed only if all of the test cases pass.
Structure is documented below.
*/
  public Tests?: Array<RegionUrlMapTest>;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
The full or partial URL of the defaultService resource to which traffic is directed if
none of the hostRules match. If defaultRouteAction is additionally specified, advanced
routing actions like URL Rewrites, etc. take effect prior to sending the request to the
backend. However, if defaultService is specified, defaultRouteAction cannot contain any
weightedBackendServices. Conversely, if routeAction specifies any
weightedBackendServices, service must not be specified.  Only one of defaultService,
defaultUrlRedirect or defaultRouteAction.weightedBackendService must be set.
*/
  public DefaultService?: string;

  /*
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  public DefaultUrlRedirect?: RegionUrlMapDefaultUrlRedirect;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  public HostRules?: Array<RegionUrlMapHostRule>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  public Name?: string;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
URL maps for Classic external HTTP(S) load balancers only support the urlRewrite action within defaultRouteAction.
defaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.
Structure is documented below.
*/
  public DefaultRouteAction?: RegionUrlMapDefaultRouteAction;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultRouteAction",
        "defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nURL maps for Classic external HTTP(S) load balancers only support the urlRewrite action within defaultRouteAction.\ndefaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultUrlRedirect",
        "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "HostRules",
        "The list of HostRules to use against the URL.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PathMatchers",
        "The list of named PathMatchers to use against the URL.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultService",
        "The full or partial URL of the defaultService resource to which traffic is directed if\nnone of the hostRules match. If defaultRouteAction is additionally specified, advanced\nrouting actions like URL Rewrites, etc. take effect prior to sending the request to the\nbackend. However, if defaultService is specified, defaultRouteAction cannot contain any\nweightedBackendServices. Conversely, if routeAction specifies any\nweightedBackendServices, service must not be specified.  Only one of defaultService,\ndefaultUrlRedirect or defaultRouteAction.weightedBackendService must be set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the url map should reside.\nIf it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Tests",
        "The list of expected URL mappings. Requests to update this UrlMap will\nsucceed only if all of the test cases pass.\nStructure is documented below.",
      ),
    ];
  }
}
