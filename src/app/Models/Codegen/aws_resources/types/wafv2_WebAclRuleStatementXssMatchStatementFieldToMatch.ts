import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder";

export interface wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch {
  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader>;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody;
}

export function wafv2_WebAclRuleStatementXssMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      wafv2_WebAclRuleStatementXssMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
