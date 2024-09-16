import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lb_ListenerRuleConditionPathPattern,
  lb_ListenerRuleConditionPathPattern_GetTypes,
} from './lb_ListenerRuleConditionPathPattern';
import {
  lb_ListenerRuleConditionQueryString,
  lb_ListenerRuleConditionQueryString_GetTypes,
} from './lb_ListenerRuleConditionQueryString';
import {
  lb_ListenerRuleConditionSourceIp,
  lb_ListenerRuleConditionSourceIp_GetTypes,
} from './lb_ListenerRuleConditionSourceIp';
import {
  lb_ListenerRuleConditionHostHeader,
  lb_ListenerRuleConditionHostHeader_GetTypes,
} from './lb_ListenerRuleConditionHostHeader';
import {
  lb_ListenerRuleConditionHttpHeader,
  lb_ListenerRuleConditionHttpHeader_GetTypes,
} from './lb_ListenerRuleConditionHttpHeader';
import {
  lb_ListenerRuleConditionHttpRequestMethod,
  lb_ListenerRuleConditionHttpRequestMethod_GetTypes,
} from './lb_ListenerRuleConditionHttpRequestMethod';

export interface lb_ListenerRuleCondition {
  // Contains a single `values` item which is a list of path patterns to match against the request URL. Maximum size of each pattern is 128 characters. Comparison is case sensitive. Wildcard characters supported: - (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied. Path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use a `query_string` condition.
  pathPattern?: lb_ListenerRuleConditionPathPattern;

  // Query strings to match. Query String block fields documented below.
  queryStrings?: Array<lb_ListenerRuleConditionQueryString>;

  /*
Contains a single `values` item which is a list of source IP CIDR notations to match. You can use both IPv4 and IPv6 addresses. Wildcards are not supported. Condition is satisfied if the source IP address of the request matches one of the CIDR blocks. Condition is not satisfied by the addresses in the `X-Forwarded-For` header, use `http_header` condition instead.

> --NOTE::-- Exactly one of `host_header`, `http_header`, `http_request_method`, `path_pattern`, `query_string` or `source_ip` must be set per condition.
*/
  sourceIp?: lb_ListenerRuleConditionSourceIp;

  // Contains a single `values` item which is a list of host header patterns to match. The maximum size of each pattern is 128 characters. Comparison is case insensitive. Wildcard characters supported: - (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied.
  hostHeader?: lb_ListenerRuleConditionHostHeader;

  // HTTP headers to match. HTTP Header block fields documented below.
  httpHeader?: lb_ListenerRuleConditionHttpHeader;

  // Contains a single `values` item which is a list of HTTP request methods or verbs to match. Maximum size is 40 characters. Only allowed characters are A-Z, hyphen (-) and underscore (\_). Comparison is case sensitive. Wildcards are not supported. Only one needs to match for the condition to be satisfied. AWS recommends that GET and HEAD requests are routed in the same way because the response to a HEAD request may be cached.
  httpRequestMethod?: lb_ListenerRuleConditionHttpRequestMethod;
}

export function lb_ListenerRuleCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'pathPattern',
      'Contains a single `values` item which is a list of path patterns to match against the request URL. Maximum size of each pattern is 128 characters. Comparison is case sensitive. Wildcard characters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied. Path pattern is compared only to the path of the URL, not to its query string. To compare against the query string, use a `query_string` condition.',
      () => lb_ListenerRuleConditionPathPattern_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryStrings',
      'Query strings to match. Query String block fields documented below.',
      () => lb_ListenerRuleConditionQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sourceIp',
      'Contains a single `values` item which is a list of source IP CIDR notations to match. You can use both IPv4 and IPv6 addresses. Wildcards are not supported. Condition is satisfied if the source IP address of the request matches one of the CIDR blocks. Condition is not satisfied by the addresses in the `X-Forwarded-For` header, use `http_header` condition instead.\n\n> **NOTE::** Exactly one of `host_header`, `http_header`, `http_request_method`, `path_pattern`, `query_string` or `source_ip` must be set per condition.',
      () => lb_ListenerRuleConditionSourceIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hostHeader',
      'Contains a single `values` item which is a list of host header patterns to match. The maximum size of each pattern is 128 characters. Comparison is case insensitive. Wildcard characters supported: * (matches 0 or more characters) and ? (matches exactly 1 character). Only one pattern needs to match for the condition to be satisfied.',
      () => lb_ListenerRuleConditionHostHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpHeader',
      'HTTP headers to match. HTTP Header block fields documented below.',
      () => lb_ListenerRuleConditionHttpHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpRequestMethod',
      'Contains a single `values` item which is a list of HTTP request methods or verbs to match. Maximum size is 40 characters. Only allowed characters are A-Z, hyphen (-) and underscore (\\_). Comparison is case sensitive. Wildcards are not supported. Only one needs to match for the condition to be satisfied. AWS recommends that GET and HEAD requests are routed in the same way because the response to a HEAD request may be cached.',
      () => lb_ListenerRuleConditionHttpRequestMethod_GetTypes(),
      false,
      false,
    ),
  ];
}
