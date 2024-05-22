import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody";
import {
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath,
  wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath";

export interface wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatch {
  // Inspect all query arguments.
  allQueryArguments?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments;

  // Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.
  headerOrders?: Array<wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder>;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString;

  // Inspect a single header. See `single_header` below for details.
  singleHeader?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See `single_query_argument` below for details.
  singleQueryArgument?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath;

  // Inspect the request body, which immediately follows the request headers. See `body` below for details.
  body?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody;

  // Inspect the cookies in the web request. See `cookies` below for details.
  cookies?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies;

  // Inspect the request headers. See `headers` below for details.
  headers?: Array<wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader>;

  // Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.
  ja3Fingerprint?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See `json_body` for details.
  jsonBody?: wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody;
}

export function wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See `headers` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "Inspect the JA3 fingerprint. See `ja3_fingerprint` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect a string containing the list of the request's header names, ordered as they appear in the web request that AWS WAF receives for inspection. See `header_order` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See `single_header` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See `single_query_argument` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers. See `body` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See `cookies` below for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See `json_body` for details.",
      wafv2_WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
  ];
}
