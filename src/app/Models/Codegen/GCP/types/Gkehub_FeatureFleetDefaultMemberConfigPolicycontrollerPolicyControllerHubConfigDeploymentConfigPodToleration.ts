import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration {
  // Matches a taint effect.
  Effect?: string;

  // Matches a taint key (not necessarily unique).
  Key?: string;

  // Matches a taint operator.
  Operator?: string;

  // Matches a taint value.
  Value?: string;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Effect",
      "Matches a taint effect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Matches a taint key (not necessarily unique).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Operator",
      "Matches a taint operator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Matches a taint value.",
      [],
      false,
      false,
    ),
  ];
}
