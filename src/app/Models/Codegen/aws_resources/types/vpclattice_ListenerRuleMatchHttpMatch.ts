import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_ListenerRuleMatchHttpMatchPathMatch,
  vpclattice_ListenerRuleMatchHttpMatchPathMatch_GetTypes,
} from "./vpclattice_ListenerRuleMatchHttpMatchPathMatch";
import {
  vpclattice_ListenerRuleMatchHttpMatchHeaderMatch,
  vpclattice_ListenerRuleMatchHttpMatchHeaderMatch_GetTypes,
} from "./vpclattice_ListenerRuleMatchHttpMatchHeaderMatch";

export interface vpclattice_ListenerRuleMatchHttpMatch {
  // The header matches. Matches incoming requests with rule based on request header value before applying rule action.
  headerMatches?: Array<vpclattice_ListenerRuleMatchHttpMatchHeaderMatch>;

  // The HTTP method type.
  method?: string;

  // The path match.
  pathMatch?: vpclattice_ListenerRuleMatchHttpMatchPathMatch;
}

export function vpclattice_ListenerRuleMatchHttpMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "method",
      "The HTTP method type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "pathMatch",
      "The path match.",
      vpclattice_ListenerRuleMatchHttpMatchPathMatch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerMatches",
      "The header matches. Matches incoming requests with rule based on request header value before applying rule action.",
      vpclattice_ListenerRuleMatchHttpMatchHeaderMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
