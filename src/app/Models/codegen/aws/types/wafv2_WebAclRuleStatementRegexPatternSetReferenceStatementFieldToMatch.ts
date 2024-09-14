import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader";

export interface wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder>;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      () =>
        wafv2_WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
  ];
}
