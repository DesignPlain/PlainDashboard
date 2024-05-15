import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundle {
  // The set of namespaces to be exempted from the bundle.
  ExemptedNamespaces?: Array<string>;

  // The identifier for this object. Format specified above.
  Bundle?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExemptedNamespaces",
      "The set of namespaces to be exempted from the bundle.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Bundle",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
