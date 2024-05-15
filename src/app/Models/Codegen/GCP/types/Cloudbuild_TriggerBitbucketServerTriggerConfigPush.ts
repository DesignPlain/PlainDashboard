import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerBitbucketServerTriggerConfigPush {
  // Regex of branches to match.  Specify only one of branch or tag.
  Branch?: string;

  // When true, only trigger a build if the revision regex does NOT match the gitRef regex.
  InvertRegex?: boolean;

  // Regex of tags to match.  Specify only one of branch or tag.
  Tag?: string;
}

export function Cloudbuild_TriggerBitbucketServerTriggerConfigPush_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "Regex of tags to match.  Specify only one of branch or tag.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Branch",
      "Regex of branches to match.  Specify only one of branch or tag.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InvertRegex",
      "When true, only trigger a build if the revision regex does NOT match the gitRef regex.",
      [],
      false,
      false,
    ),
  ];
}
