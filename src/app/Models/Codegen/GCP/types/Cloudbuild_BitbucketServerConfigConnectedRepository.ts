import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_BitbucketServerConfigConnectedRepository {
  // Identifier for the project storing the repository.
  ProjectKey?: string;

  // Identifier for the repository.
  RepoSlug?: string;
}

export function Cloudbuild_BitbucketServerConfigConnectedRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectKey",
      "Identifier for the project storing the repository.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RepoSlug",
      "Identifier for the repository.",
      [],
      true,
      false,
    ),
  ];
}
