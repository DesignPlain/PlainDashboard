import { getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock } from "./getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock";

export interface getEnvironmentConfigMasterAuthorizedNetworksConfig {
  // cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
  CidrBlocks?: Array<getEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock>;

  // Whether or not master authorized networks is enabled.
  Enabled?: boolean;
}
