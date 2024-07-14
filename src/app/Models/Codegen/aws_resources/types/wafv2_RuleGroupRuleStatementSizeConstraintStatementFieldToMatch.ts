import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies";
import {
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader,
  wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader_GetTypes,
} from "./wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader";

export interface wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch {
  // Inspect a single header. See Single Header below for details.
  singleHeader?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader;

  // Inspect a single query argument. See Single Query Argument below for details.
  singleQueryArgument?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;

  // Inspect all query arguments.
  allQueryArguments?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments;

  // Inspect the cookies in the web request. See Cookies below for details.
  cookies?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies;

  // Inspect the request headers. See Headers below for details.
  headers?: Array<wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader>;

  //
  ja3Fingerprint?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint;

  // Inspect the request body as JSON. See JSON Body for details.
  jsonBody?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody;

  // Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
  method?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod;

  // Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
  queryString?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString;

  // Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.
  uriPath?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath;

  // Inspect the request body, which immediately follows the request headers.
  body?: wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody;

  // Inspect the request headers. See Header Order below for details.
  headerOrders?: Array<wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder>;
}

export function wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "body",
      "Inspect the request body, which immediately follows the request headers.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleHeader",
      "Inspect a single header. See Single Header below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonBody",
      "Inspect the request body as JSON. See JSON Body for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJsonBody_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryString",
      "Inspect the query string. This is the part of a URL that appears after a `?` character, if any.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ja3Fingerprint",
      "",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchJa3Fingerprint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uriPath",
      "Inspect the request URI path. This is the part of a web request that identifies a resource, for example, `/images/daily-ad.jpg`.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerOrders",
      "Inspect the request headers. See Header Order below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeaderOrder_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "singleQueryArgument",
      "Inspect a single query argument. See Single Query Argument below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "allQueryArguments",
      "Inspect all query arguments.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cookies",
      "Inspect the cookies in the web request. See Cookies below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Inspect the request headers. See Headers below for details.",
      wafv2_RuleGroupRuleStatementSizeConstraintStatementFieldToMatchHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
