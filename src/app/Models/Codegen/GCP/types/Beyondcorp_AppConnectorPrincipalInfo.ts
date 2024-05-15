import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Beyondcorp_AppConnectorPrincipalInfoServiceAccount,
  Beyondcorp_AppConnectorPrincipalInfoServiceAccount_GetTypes,
} from "./Beyondcorp_AppConnectorPrincipalInfoServiceAccount";

export interface Beyondcorp_AppConnectorPrincipalInfo {
  /*
ServiceAccount represents a GCP service account.
Structure is documented below.
*/
  ServiceAccount?: Beyondcorp_AppConnectorPrincipalInfoServiceAccount;
}

export function Beyondcorp_AppConnectorPrincipalInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ServiceAccount",
      "ServiceAccount represents a GCP service account.\nStructure is documented below.",
      Beyondcorp_AppConnectorPrincipalInfoServiceAccount_GetTypes(),
      true,
      false,
    ),
  ];
}
