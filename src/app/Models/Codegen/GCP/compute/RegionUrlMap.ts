import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionUrlMapDefaultRouteAction,
  Compute_RegionUrlMapDefaultRouteAction_GetTypes,
} from "../types/Compute_RegionUrlMapDefaultRouteAction";
import {
  Compute_RegionUrlMapDefaultUrlRedirect,
  Compute_RegionUrlMapDefaultUrlRedirect_GetTypes,
} from "../types/Compute_RegionUrlMapDefaultUrlRedirect";
import {
  Compute_RegionUrlMapHostRule,
  Compute_RegionUrlMapHostRule_GetTypes,
} from "../types/Compute_RegionUrlMapHostRule";
import {
  Compute_RegionUrlMapPathMatcher,
  Compute_RegionUrlMapPathMatcher_GetTypes,
} from "../types/Compute_RegionUrlMapPathMatcher";
import {
  Compute_RegionUrlMapTest,
  Compute_RegionUrlMapTest_GetTypes,
} from "../types/Compute_RegionUrlMapTest";

export interface RegionUrlMapArgs {
  /*
The Region in which the url map should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;

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
When none of the specified hostRules match, the request is redirected to a URL specified
by defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or
defaultRouteAction must not be set.
Structure is documented below.
*/
  DefaultUrlRedirect?: Compute_RegionUrlMapDefaultUrlRedirect;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  HostRules?: Array<Compute_RegionUrlMapHostRule>;

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
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  PathMatchers?: Array<Compute_RegionUrlMapPathMatcher>;

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
  Tests?: Array<Compute_RegionUrlMapTest>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
URL maps for Classic external HTTP(S) load balancers only support the urlRewrite action within defaultRouteAction.
defaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.
Structure is documented below.
*/
  DefaultRouteAction?: Compute_RegionUrlMapDefaultRouteAction;
}
export class RegionUrlMap extends Resource {
  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Fingerprint of this resource. This field is used internally during
updates of this resource.
*/
  public Fingerprint?: string;

  /*
The list of HostRules to use against the URL.
Structure is documented below.
*/
  public HostRules?: Array<Compute_RegionUrlMapHostRule>;

  /*
The Region in which the url map should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

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
The list of named PathMatchers to use against the URL.
Structure is documented below.
*/
  public PathMatchers?: Array<Compute_RegionUrlMapPathMatcher>;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
The list of expected URL mappings. Requests to update this UrlMap will
succeed only if all of the test cases pass.
Structure is documented below.
*/
  public Tests?: Array<Compute_RegionUrlMapTest>;

  /*
defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.
Only one of defaultRouteAction or defaultUrlRedirect must be set.
URL maps for Classic external HTTP(S) load balancers only support the urlRewrite action within defaultRouteAction.
defaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.
Structure is documented below.
*/
  public DefaultRouteAction?: Compute_RegionUrlMapDefaultRouteAction;

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
  public DefaultUrlRedirect?: Compute_RegionUrlMapDefaultUrlRedirect;

  // The unique identifier for the resource.
  public MapId?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the url map should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultService",
        "The full or partial URL of the defaultService resource to which traffic is directed if\nnone of the hostRules match. If defaultRouteAction is additionally specified, advanced\nrouting actions like URL Rewrites, etc. take effect prior to sending the request to the\nbackend. However, if defaultService is specified, defaultRouteAction cannot contain any\nweightedBackendServices. Conversely, if routeAction specifies any\nweightedBackendServices, service must not be specified.  Only one of defaultService,\ndefaultUrlRedirect or defaultRouteAction.weightedBackendService must be set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultUrlRedirect",
        "When none of the specified hostRules match, the request is redirected to a URL specified\nby defaultUrlRedirect. If defaultUrlRedirect is specified, defaultService or\ndefaultRouteAction must not be set.\nStructure is documented below.",
        Compute_RegionUrlMapDefaultUrlRedirect_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -",
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
        InputType.Array,
        "Tests",
        "The list of expected URL mappings. Requests to update this UrlMap will\nsucceed only if all of the test cases pass.\nStructure is documented below.",
        Compute_RegionUrlMapTest_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DefaultRouteAction",
        "defaultRouteAction takes effect when none of the hostRules match. The load balancer performs advanced routing actions, such as URL rewrites and header transformations, before forwarding the request to the selected backend. If defaultRouteAction specifies any weightedBackendServices, defaultService must not be set. Conversely if defaultService is set, defaultRouteAction cannot contain any weightedBackendServices.\nOnly one of defaultRouteAction or defaultUrlRedirect must be set.\nURL maps for Classic external HTTP(S) load balancers only support the urlRewrite action within defaultRouteAction.\ndefaultRouteAction has no effect when the URL map is bound to a target gRPC proxy that has the validateForProxyless field set to true.\nStructure is documented below.",
        Compute_RegionUrlMapDefaultRouteAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "HostRules",
        "The list of HostRules to use against the URL.\nStructure is documented below.",
        Compute_RegionUrlMapHostRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "PathMatchers",
        "The list of named PathMatchers to use against the URL.\nStructure is documented below.",
        Compute_RegionUrlMapPathMatcher_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
