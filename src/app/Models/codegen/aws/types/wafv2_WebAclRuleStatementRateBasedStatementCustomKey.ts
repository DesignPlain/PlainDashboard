import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument';
import {
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath,
  wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath_GetTypes,
} from './wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath';

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKey {
  // Use the value of a header in the request as an aggregate key. See RateLimit `header` below for details.
  header?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader;

  // Use the request's HTTP method as an aggregate key. See RateLimit `http_method` below for details.
  httpMethod?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod;

  // Use the request's originating IP address as an aggregate key. See `RateLimit ip` below for details.
  ip?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp;

  // Use the specified label namespace as an aggregate key. See RateLimit `label_namespace` below for details.
  labelNamespace?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace;

  // Use the request's query string as an aggregate key. See RateLimit `query_string` below for details.
  queryString?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString;

  // Use the value of a cookie in the request as an aggregate key. See RateLimit `cookie` below for details.
  cookie?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie;

  // Use the first IP address in an HTTP header as an aggregate key. See `forwarded_ip` below for details.
  forwardedIp?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp;

  // Use the specified query argument as an aggregate key. See RateLimit `query_argument` below for details.
  queryArgument?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument;

  // Use the request's URI path as an aggregate key. See RateLimit `uri_path` below for details.
  uriPath?: wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ip',
      "Use the request's originating IP address as an aggregate key. See `RateLimit ip` below for details.",
      () => wafv2_WebAclRuleStatementRateBasedStatementCustomKeyIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'labelNamespace',
      'Use the specified label namespace as an aggregate key. See RateLimit `label_namespace` below for details.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'forwardedIp',
      'Use the first IP address in an HTTP header as an aggregate key. See `forwarded_ip` below for details.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyForwardedIp_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'uriPath',
      "Use the request's URI path as an aggregate key. See RateLimit `uri_path` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'header',
      'Use the value of a header in the request as an aggregate key. See RateLimit `header` below for details.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpMethod',
      "Use the request's HTTP method as an aggregate key. See RateLimit `http_method` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyHttpMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'queryString',
      "Use the request's query string as an aggregate key. See RateLimit `query_string` below for details.",
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cookie',
      'Use the value of a cookie in the request as an aggregate key. See RateLimit `cookie` below for details.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyCookie_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'queryArgument',
      'Use the specified query argument as an aggregate key. See RateLimit `query_argument` below for details.',
      () =>
        wafv2_WebAclRuleStatementRateBasedStatementCustomKeyQueryArgument_GetTypes(),
      false,
      false,
    ),
  ];
}
