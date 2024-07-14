import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch,
  vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch_GetTypes,
} from "./vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch";

export interface vpclattice_ListenerRuleMatchHttpMatchHeaderMatch {
  // Indicates whether the match is case sensitive. Defaults to false.
  caseSensitive?: boolean;

  // The header match type.
  match?: vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch;

  // The name of the header.
  name?: string;
}

export function vpclattice_ListenerRuleMatchHttpMatchHeaderMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "caseSensitive",
      "Indicates whether the match is case sensitive. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "match",
      "The header match type.",
      vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
