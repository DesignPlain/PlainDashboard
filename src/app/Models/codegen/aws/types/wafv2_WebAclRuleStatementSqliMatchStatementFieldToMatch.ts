import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString";

export interface wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch {
  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      () =>
        wafv2_WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
  ];
}
