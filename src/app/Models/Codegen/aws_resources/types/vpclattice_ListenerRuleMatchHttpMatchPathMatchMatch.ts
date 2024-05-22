import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch {
  // Specifies an exact type match.
  exact?: string;

  // Specifies a prefix type match. Matches the value with the prefix.
  prefix?: string;
}

export function vpclattice_ListenerRuleMatchHttpMatchPathMatchMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "exact",
      "Specifies an exact type match.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Specifies a prefix type match. Matches the value with the prefix.",
      [],
      false,
      false,
    ),
  ];
}
