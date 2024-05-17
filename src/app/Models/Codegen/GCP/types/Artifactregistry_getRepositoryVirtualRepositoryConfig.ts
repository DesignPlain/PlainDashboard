import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy,
  Artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes,
} from "./Artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy";

export interface Artifactregistry_getRepositoryVirtualRepositoryConfig {
  /*
Policies that configure the upstream artifacts distributed by the Virtual
Repository. Upstream policies cannot be set on a standard repository.
*/
  UpstreamPolicies?: Array<Artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy>;
}

export function Artifactregistry_getRepositoryVirtualRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "UpstreamPolicies",
      "Policies that configure the upstream artifacts distributed by the Virtual\nRepository. Upstream policies cannot be set on a standard repository.",
      Artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
