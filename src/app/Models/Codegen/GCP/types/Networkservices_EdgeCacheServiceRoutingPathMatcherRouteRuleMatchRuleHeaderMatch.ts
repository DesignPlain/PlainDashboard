import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch {
  /*
If set to false (default), the headerMatch is considered a match if the match criteria above are met.
If set to true, the headerMatch is considered a match if the match criteria above are NOT met.
*/
  InvertMatch?: boolean;

  // The value of the header must start with the contents of prefixMatch.
  PrefixMatch?: string;

  // A header with the contents of headerName must exist. The match takes place whether or not the request's header has a value.
  PresentMatch?: boolean;

  // The value of the header must end with the contents of suffixMatch.
  SuffixMatch?: string;

  // The value of the header should exactly match contents of exactMatch.
  ExactMatch?: string;

  // The header name to match on.
  HeaderName?: string;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "InvertMatch",
      "If set to false (default), the headerMatch is considered a match if the match criteria above are met.\nIf set to true, the headerMatch is considered a match if the match criteria above are NOT met.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrefixMatch",
      "The value of the header must start with the contents of prefixMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PresentMatch",
      "A header with the contents of headerName must exist. The match takes place whether or not the request's header has a value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SuffixMatch",
      "The value of the header must end with the contents of suffixMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExactMatch",
      "The value of the header should exactly match contents of exactMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The header name to match on.",
      [],
      true,
      false,
    ),
  ];
}
