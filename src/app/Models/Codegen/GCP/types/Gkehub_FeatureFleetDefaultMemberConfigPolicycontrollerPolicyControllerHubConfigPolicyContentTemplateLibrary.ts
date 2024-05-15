import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  /*
Configures the manner in which the template library is installed on the cluster.
Possible values are: `INSTALATION_UNSPECIFIED`, `NOT_INSTALLED`, `ALL`.
*/
  Installation?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Installation",
      "Configures the manner in which the template library is installed on the cluster.\nPossible values are: `INSTALATION_UNSPECIFIED`, `NOT_INSTALLED`, `ALL`.",
      [],
      false,
      false,
    ),
  ];
}
