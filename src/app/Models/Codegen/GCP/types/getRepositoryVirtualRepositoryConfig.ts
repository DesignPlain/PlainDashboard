import { getRepositoryVirtualRepositoryConfigUpstreamPolicy } from "./getRepositoryVirtualRepositoryConfigUpstreamPolicy";

export interface getRepositoryVirtualRepositoryConfig {
  /*
Policies that configure the upstream artifacts distributed by the Virtual
Repository. Upstream policies cannot be set on a standard repository.
*/
  UpstreamPolicies?: Array<getRepositoryVirtualRepositoryConfigUpstreamPolicy>;
}
