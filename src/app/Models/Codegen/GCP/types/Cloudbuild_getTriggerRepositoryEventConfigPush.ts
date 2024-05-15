import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_getTriggerRepositoryEventConfigPush {
  /*
Regex of branches to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax
*/
  Branch?: string;

  // If true, only trigger a build if the revision regex does NOT match the git_ref regex.
  InvertRegex?: boolean;

  /*
Regex of tags to match.

The syntax of the regular expressions accepted is the syntax accepted by
RE2 and described at https://github.com/google/re2/wiki/Syntax
*/
  Tag?: string;
}

export function Cloudbuild_getTriggerRepositoryEventConfigPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Branch",
      "Regex of branches to match.\n\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InvertRegex",
      "If true, only trigger a build if the revision regex does NOT match the git_ref regex.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "Regex of tags to match.\n\nThe syntax of the regular expressions accepted is the syntax accepted by\nRE2 and described at https://github.com/google/re2/wiki/Syntax",
      [],
      true,
      false,
    ),
  ];
}
