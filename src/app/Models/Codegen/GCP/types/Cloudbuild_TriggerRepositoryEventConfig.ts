import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerRepositoryEventConfigPullRequest,
  Cloudbuild_TriggerRepositoryEventConfigPullRequest_GetTypes,
} from "./Cloudbuild_TriggerRepositoryEventConfigPullRequest";
import {
  Cloudbuild_TriggerRepositoryEventConfigPush,
  Cloudbuild_TriggerRepositoryEventConfigPush_GetTypes,
} from "./Cloudbuild_TriggerRepositoryEventConfigPush";

export interface Cloudbuild_TriggerRepositoryEventConfig {
  // The resource name of the Repo API resource.
  Repository?: string;

  /*
Contains filter properties for matching Pull Requests.
Structure is documented below.
*/
  PullRequest?: Cloudbuild_TriggerRepositoryEventConfigPullRequest;

  /*
Contains filter properties for matching git pushes.
Structure is documented below.
*/
  Push?: Cloudbuild_TriggerRepositoryEventConfigPush;
}

export function Cloudbuild_TriggerRepositoryEventConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Repository",
      "The resource name of the Repo API resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PullRequest",
      "Contains filter properties for matching Pull Requests.\nStructure is documented below.",
      Cloudbuild_TriggerRepositoryEventConfigPullRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Push",
      "Contains filter properties for matching git pushes.\nStructure is documented below.",
      Cloudbuild_TriggerRepositoryEventConfigPush_GetTypes(),
      false,
      false,
    ),
  ];
}
