import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy,
  artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes,
} from "./artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy";

export interface artifactregistry_RepositoryVirtualRepositoryConfig {
  /*
Policies that configure the upstream artifacts distributed by the Virtual
Repository. Upstream policies cannot be set on a standard repository.
Structure is documented below.
*/
  upstreamPolicies?: Array<artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy>;
}

export function artifactregistry_RepositoryVirtualRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "upstreamPolicies",
      "Policies that configure the upstream artifacts distributed by the Virtual\nRepository. Upstream policies cannot be set on a standard repository.\nStructure is documented below.",
      artifactregistry_RepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
