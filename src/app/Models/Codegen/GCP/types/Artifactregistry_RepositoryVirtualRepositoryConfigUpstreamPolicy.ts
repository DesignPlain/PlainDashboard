import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy {
  // Entries with a greater priority value take precedence in the pull order.
  Priority?: number;

  /*
A reference to the repository resource, for example:
"projects/p1/locations/us-central1/repository/repo1".
*/
  Repository?: string;

  // The user-provided ID of the upstream policy.
  Id?: string;
}

export function Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Priority",
      "Entries with a greater priority value take precedence in the pull order.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Repository",
      'A reference to the repository resource, for example:\n"projects/p1/locations/us-central1/repository/repo1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "The user-provided ID of the upstream policy.",
      [],
      false,
      false,
    ),
  ];
}
