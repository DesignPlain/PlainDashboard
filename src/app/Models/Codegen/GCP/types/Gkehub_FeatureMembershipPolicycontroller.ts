import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig,
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig_GetTypes,
} from "./Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig";

export interface Gkehub_FeatureMembershipPolicycontroller {
  // Policy Controller configuration for the cluster. Structure is documented below.
  PolicyControllerHubConfig?: Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig;

  // Version of Policy Controller to install. Defaults to the latest version.
  Version?: string;
}

export function Gkehub_FeatureMembershipPolicycontroller_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PolicyControllerHubConfig",
      "Policy Controller configuration for the cluster. Structure is documented below.",
      Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version of Policy Controller to install. Defaults to the latest version.",
      [],
      false,
      false,
    ),
  ];
}
