import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument";

export interface wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch {
  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder>;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument;
}

export function wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      wafv2_WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
  ];
}
