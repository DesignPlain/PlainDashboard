import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch {
  // A header with the contents of headerName must exist. The match takes place whether or not the request's header has a value.
  presentMatch?: boolean;

  // The value of the header must end with the contents of suffixMatch.
  suffixMatch?: string;

  // The value of the header should exactly match contents of exactMatch.
  exactMatch?: string;

  // The header name to match on.
  headerName?: string;

  /*
If set to false (default), the headerMatch is considered a match if the match criteria above are met.
If set to true, the headerMatch is considered a match if the match criteria above are NOT met.
*/
  invertMatch?: boolean;

  // The value of the header must start with the contents of prefixMatch.
  prefixMatch?: string;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "presentMatch",
      "A header with the contents of headerName must exist. The match takes place whether or not the request's header has a value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "suffixMatch",
      "The value of the header must end with the contents of suffixMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exactMatch",
      "The value of the header should exactly match contents of exactMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The header name to match on.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertMatch",
      "If set to false (default), the headerMatch is considered a match if the match criteria above are met.\nIf set to true, the headerMatch is considered a match if the match criteria above are NOT met.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefixMatch",
      "The value of the header must start with the contents of prefixMatch.",
      [],
      false,
      false,
    ),
  ];
}
