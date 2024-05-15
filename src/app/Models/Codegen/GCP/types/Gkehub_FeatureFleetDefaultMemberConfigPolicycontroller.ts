import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig,
  Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig_GetTypes,
} from "./Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller {
  // Configures the version of Policy Controller
  Version?: string;

  /*
Configuration of Policy Controller
Structure is documented below.
*/
  PolicyControllerHubConfig?: Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Configures the version of Policy Controller",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PolicyControllerHubConfig",
      "Configuration of Policy Controller\nStructure is documented below.",
      Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
