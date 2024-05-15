import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy,
  Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes,
} from "./Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy";

export interface Artifactregistry_RepositoryVirtualRepositoryConfig {
  /*
Policies that configure the upstream artifacts distributed by the Virtual
Repository. Upstream policies cannot be set on a standard repository.
Structure is documented below.
*/
  UpstreamPolicies?: Array<Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy>;
}

export function Artifactregistry_RepositoryVirtualRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "UpstreamPolicies",
      "Policies that configure the upstream artifacts distributed by the Virtual\nRepository. Upstream policies cannot be set on a standard repository.\nStructure is documented below.",
      Artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
