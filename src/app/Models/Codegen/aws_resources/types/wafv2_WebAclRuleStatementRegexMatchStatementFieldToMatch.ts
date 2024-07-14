import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint";

export interface wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch {
  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader;
}

export function wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      wafv2_WebAclRuleStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
