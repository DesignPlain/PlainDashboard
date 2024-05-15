import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring {
  /*
Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export.
Each value may be one of: `MONITORING_BACKEND_UNSPECIFIED`, `PROMETHEUS`, `CLOUD_MONITORING`.
*/
  Backends?: Array<string>;
}

export function Gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Backends",
      "Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export.\nEach value may be one of: `MONITORING_BACKEND_UNSPECIFIED`, `PROMETHEUS`, `CLOUD_MONITORING`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
