import { FeatureMembershipPolicycontrollerPolicyControllerHubConfig } from "./FeatureMembershipPolicycontrollerPolicyControllerHubConfig";

export interface FeatureMembershipPolicycontroller {
  // Policy Controller configuration for the cluster. Structure is documented below.
  PolicyControllerHubConfig?: FeatureMembershipPolicycontrollerPolicyControllerHubConfig;

  // Version of Policy Controller to install. Defaults to the latest version.
  Version?: string;
}
