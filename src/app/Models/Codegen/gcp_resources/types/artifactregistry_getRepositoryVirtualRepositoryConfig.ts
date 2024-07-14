import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy,
  artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes,
} from "./artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy";

export interface artifactregistry_getRepositoryVirtualRepositoryConfig {
  /*
Policies that configure the upstream artifacts distributed by the Virtual
Repository. Upstream policies cannot be set on a standard repository.
*/
  upstreamPolicies?: Array<artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy>;
}

export function artifactregistry_getRepositoryVirtualRepositoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "upstreamPolicies",
      "Policies that configure the upstream artifacts distributed by the Virtual\nRepository. Upstream policies cannot be set on a standard repository.",
      artifactregistry_getRepositoryVirtualRepositoryConfigUpstreamPolicy_GetTypes(),
      true,
      false,
    ),
  ];
}
