import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  alb_ListenerRuleConditionHttpRequestMethod,
  alb_ListenerRuleConditionHttpRequestMethod_GetTypes,
} from "./alb_ListenerRuleConditionHttpRequestMethod";
import {
  alb_ListenerRuleConditionPathPattern,
  alb_ListenerRuleConditionPathPattern_GetTypes,
} from "./alb_ListenerRuleConditionPathPattern";
import {
  alb_ListenerRuleConditionQueryString,
  alb_ListenerRuleConditionQueryString_GetTypes,
} from "./alb_ListenerRuleConditionQueryString";
import {
  alb_ListenerRuleConditionSourceIp,
  alb_ListenerRuleConditionSourceIp_GetTypes,
} from "./alb_ListenerRuleConditionSourceIp";
import {
  alb_ListenerRuleConditionHostHeader,
  alb_ListenerRuleConditionHostHeader_GetTypes,
} from "./alb_ListenerRuleConditionHostHeader";
import {
  alb_ListenerRuleConditionHttpHeader,
  alb_ListenerRuleConditionHttpHeader_GetTypes,
} from "./alb_ListenerRuleConditionHttpHeader";

export interface alb_ListenerRuleCondition {
  // Contains a single `values` item which is a list of HTTP request methods or verbs to match. Maximum size is 40 characters. Only allowed characters are A-Z, hyphen (-) and underscore (\_). Comparison is case sensitive. Wildcards are not supported. Only one needs to match for the condition to be satisfied. AWS recommends that GET and HEAD requests are routed in the same way because the response to a HEAD request may be cached.
  httpRequestMethod?: alb_ListenerRuleConditionHttpRequestMethod;

  // Contains a single `values` item which is a list of path patterns to match against the request URL. Maximum size of each pattern is 128 characters. Comparison is case sensitive. Wildcard characters supported: - (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied. Path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use a `query_string` condition.
  pathPattern?: alb_ListenerRuleConditionPathPattern;

  // Query strings to match. Query String block fields documented below.
  queryStrings?: Array<alb_ListenerRuleConditionQueryString>;

  /*
Contains a single `values` item which is a list of source IP CIDR notations to match. You can use both IPv4 and IPv6 addresses. Wildcards are not supported. Condition is satisfied if the source IP address of the request matches one of the CIDR blocks. Condition is not satisfied by the addresses in the `X-Forwarded-For` header, use `http_header` condition instead.

> --NOTE::-- Exactly one of `host_header`, `http_header`, `http_request_method`, `path_pattern`, `query_string` or `source_ip` must be set per condition.
*/
  sourceIp?: alb_ListenerRuleConditionSourceIp;

  // Contains a single `values` item which is a list of host header patterns to match. The maximum size of each pattern is 128 characters. Comparison is case insensitive. Wildcard characters supported: - (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied.
  hostHeader?: alb_ListenerRuleConditionHostHeader;

  // HTTP headers to match. HTTP Header block fields documented below.
  httpHeader?: alb_ListenerRuleConditionHttpHeader;
}

export function alb_ListenerRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "httpHeader",
      "HTTP headers to match. HTTP Header block fields documented below.",
      alb_ListenerRuleConditionHttpHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpRequestMethod",
      "Contains a single `values` item which is a list of HTTP request methods or verbs to match. Maximum size is 40 characters. Only allowed characters are A-Z, hyphen (-) and underscore (\\_). Comparison is case sensitive. Wildcards are not supported. Only one needs to match for the condition to be satisfied. AWS recommends that GET and HEAD requests are routed in the same way because the response to a HEAD request may be cached.",
      alb_ListenerRuleConditionHttpRequestMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pathPattern",
      "Contains a single `values` item which is a list of path patterns to match against the request URL. Maximum size of each pattern is 128 characters. Comparison is case sensitive. Wildcard characters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied. Path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use a `query_string` condition.",
      alb_ListenerRuleConditionPathPattern_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStrings",
      "Query strings to match. Query String block fields documented below.",
      alb_ListenerRuleConditionQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceIp",
      "Contains a single `values` item which is a list of source IP CIDR notations to match. You can use both IPv4 and IPv6 addresses. Wildcards are not supported. Condition is satisfied if the source IP address of the request matches one of the CIDR blocks. Condition is not satisfied by the addresses in the `X-Forwarded-For` header, use `http_header` condition instead.\n\n> **NOTE::** Exactly one of `host_header`, `http_header`, `http_request_method`, `path_pattern`, `query_string` or `source_ip` must be set per condition.",
      alb_ListenerRuleConditionSourceIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hostHeader",
      "Contains a single `values` item which is a list of host header patterns to match. The maximum size of each pattern is 128 characters. Comparison is case insensitive. Wildcard characters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied.",
      alb_ListenerRuleConditionHostHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
