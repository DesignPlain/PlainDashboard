import { EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock } from "./EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock";

export interface EnvironmentConfigMasterAuthorizedNetworksConfig {
  // cidr_blocks define up to 50 external networks that could access Kubernetes master through HTTPS.
  CidrBlocks?: Array<EnvironmentConfigMasterAuthorizedNetworksConfigCidrBlock>;

  // Whether or not master authorized networks is enabled.
  Enabled?: boolean;
}
