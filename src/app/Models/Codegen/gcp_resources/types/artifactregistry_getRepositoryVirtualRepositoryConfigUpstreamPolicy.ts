import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy {
  // The user-provided ID of the upstream policy.
  id?: string;

  // Entries with a greater priority value take precedence in the pull order.
  priority?: number;

  /*
A reference to the repository resource, for example:
"projects/p1/locations/us-central1/repository/repo1".
*/
  repository?: string;
}

export function artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The user-provided ID of the upstream policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Entries with a greater priority value take precedence in the pull order.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repository",
      'A reference to the repository resource, for example:\n"projects/p1/locations/us-central1/repository/repo1".',
      [],
      true,
      false,
    ),
  ];
}
