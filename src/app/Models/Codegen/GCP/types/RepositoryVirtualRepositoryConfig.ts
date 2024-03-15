import { RepositoryVirtualRepositoryConfigUpstreamPolicy } from "./RepositoryVirtualRepositoryConfigUpstreamPolicy";

export interface RepositoryVirtualRepositoryConfig {
  /*
Policies that configure the upstream artifacts distributed by the Virtual
Repository. Upstream policies cannot be set on a standard repository.
Structure is documented below.
*/
  UpstreamPolicies?: Array<RepositoryVirtualRepositoryConfigUpstreamPolicy>;
}
