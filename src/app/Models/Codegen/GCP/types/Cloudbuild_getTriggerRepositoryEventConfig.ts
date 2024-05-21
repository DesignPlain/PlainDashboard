import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_getTriggerRepositoryEventConfigPullRequest,
  cloudbuild_getTriggerRepositoryEventConfigPullRequest_GetTypes,
} from "./cloudbuild_getTriggerRepositoryEventConfigPullRequest";
import {
  cloudbuild_getTriggerRepositoryEventConfigPush,
  cloudbuild_getTriggerRepositoryEventConfigPush_GetTypes,
} from "./cloudbuild_getTriggerRepositoryEventConfigPush";

export interface cloudbuild_getTriggerRepositoryEventConfig {
  // Contains filter properties for matching Pull Requests.
  pullRequests?: Array<cloudbuild_getTriggerRepositoryEventConfigPullRequest>;

  // Contains filter properties for matching git pushes.
  pushes?: Array<cloudbuild_getTriggerRepositoryEventConfigPush>;

  // The resource name of the Repo API resource.
  repository?: string;
}

export function cloudbuild_getTriggerRepositoryEventConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pullRequests",
      "Contains filter properties for matching Pull Requests.",
      cloudbuild_getTriggerRepositoryEventConfigPullRequest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "pushes",
      "Contains filter properties for matching git pushes.",
      cloudbuild_getTriggerRepositoryEventConfigPush_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      "The resource name of the Repo API resource.",
      [],
      true,
      false,
    ),
  ];
}
