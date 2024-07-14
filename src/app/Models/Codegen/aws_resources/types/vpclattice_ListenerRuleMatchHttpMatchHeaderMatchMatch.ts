import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch {
  // Specifies a contains type match.
  contains?: string;

  // Specifies an exact type match.
  exact?: string;

  // Specifies a prefix type match. Matches the value with the prefix.
  prefix?: string;
}

export function vpclattice_ListenerRuleMatchHttpMatchHeaderMatchMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Specifies a prefix type match. Matches the value with the prefix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contains",
      "Specifies a contains type match.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exact",
      "Specifies an exact type match.",
      [],
      false,
      false,
    ),
  ];
}
