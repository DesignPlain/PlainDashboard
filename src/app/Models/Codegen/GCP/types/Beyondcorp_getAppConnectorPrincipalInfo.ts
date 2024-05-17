import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Beyondcorp_getAppConnectorPrincipalInfoServiceAccount,
  Beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes,
} from "./Beyondcorp_getAppConnectorPrincipalInfoServiceAccount";

export interface Beyondcorp_getAppConnectorPrincipalInfo {
  // ServiceAccount represents a GCP service account.
  ServiceAccounts?: Array<Beyondcorp_getAppConnectorPrincipalInfoServiceAccount>;
}

export function Beyondcorp_getAppConnectorPrincipalInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ServiceAccounts",
      "ServiceAccount represents a GCP service account.",
      Beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes(),
      true,
      false,
    ),
  ];
}
