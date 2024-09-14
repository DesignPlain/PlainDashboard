import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody";

export interface wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch {
  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder>;
}

export function wafv2_WebAclRuleStatementByteMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      () =>
        wafv2_WebAclRuleStatementByteMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
  ];
}
