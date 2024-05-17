import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerRepositoryEventConfigPush,
  Cloudbuild_getTriggerRepositoryEventConfigPush_GetTypes,
} from "./Cloudbuild_getTriggerRepositoryEventConfigPush";
import {
  Cloudbuild_getTriggerRepositoryEventConfigPullRequest,
  Cloudbuild_getTriggerRepositoryEventConfigPullRequest_GetTypes,
} from "./Cloudbuild_getTriggerRepositoryEventConfigPullRequest";

export interface Cloudbuild_getTriggerRepositoryEventConfig {
  // Contains filter properties for matching git pushes.
  Pushes?: Array<Cloudbuild_getTriggerRepositoryEventConfigPush>;

  // The resource name of the Repo API resource.
  Repository?: string;

  // Contains filter properties for matching Pull Requests.
  PullRequests?: Array<Cloudbuild_getTriggerRepositoryEventConfigPullRequest>;
}

export function Cloudbuild_getTriggerRepositoryEventConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PullRequests",
      "Contains filter properties for matching Pull Requests.",
      Cloudbuild_getTriggerRepositoryEventConfigPullRequest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Pushes",
      "Contains filter properties for matching git pushes.",
      Cloudbuild_getTriggerRepositoryEventConfigPush_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Repository",
      "The resource name of the Repo API resource.",
      [],
      true,
      false,
    ),
  ];
}
