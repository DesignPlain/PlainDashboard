import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary,
  Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes,
} from "./Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary";

export interface Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent {
  // Configures the installation of the Template Library. Structure is documented below.
  TemplateLibrary?: Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}

export function Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "TemplateLibrary",
      "Configures the installation of the Template Library. Structure is documented below.",
      Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes(),
      false,
      false,
    ),
  ];
}
