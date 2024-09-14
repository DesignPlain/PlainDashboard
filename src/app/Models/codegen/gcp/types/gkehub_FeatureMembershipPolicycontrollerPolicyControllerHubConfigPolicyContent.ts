import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary,
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes,
} from "./gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary";

export interface gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent {
  // Configures the installation of the Template Library. Structure is documented below.
  templateLibrary?: gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}

export function gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "templateLibrary",
      "Configures the installation of the Template Library. Structure is documented below.",
      () =>
        gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes(),
      false,
      false,
    ),
  ];
}
