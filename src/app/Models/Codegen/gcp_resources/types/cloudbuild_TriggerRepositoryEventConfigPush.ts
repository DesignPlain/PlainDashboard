import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudbuild_TriggerRepositoryEventConfigPush {
  // Regex of branches to match.  Specify only one of branch or tag.
  branch?: string;

  // When true, only trigger a build if the revision regex does NOT match the gitRef regex.
  invertRegex?: boolean;

  // Regex of tags to match.  Specify only one of branch or tag.
  tag?: string;
}

export function cloudbuild_TriggerRepositoryEventConfigPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "branch",
      "Regex of branches to match.  Specify only one of branch or tag.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "invertRegex",
      "When true, only trigger a build if the revision regex does NOT match the gitRef regex.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "Regex of tags to match.  Specify only one of branch or tag.",
      [],
      false,
      false,
    ),
  ];
}
