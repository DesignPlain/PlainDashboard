import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  // Configures the manner in which the template library is installed on the cluster. Must be one of `ALL`, `NOT_INSTALLED` or `INSTALLATION_UNSPECIFIED`. Defaults to `ALL`.
  Installation?: string;
}

export function Gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Installation",
      "Configures the manner in which the template library is installed on the cluster. Must be one of `ALL`, `NOT_INSTALLED` or `INSTALLATION_UNSPECIFIED`. Defaults to `ALL`.",
      [],
      false,
      false,
    ),
  ];
}
