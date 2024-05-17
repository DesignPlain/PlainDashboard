import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_TrustConfigTrustStoreIntermediateCa,
  Certificatemanager_TrustConfigTrustStoreIntermediateCa_GetTypes,
} from "./Certificatemanager_TrustConfigTrustStoreIntermediateCa";
import {
  Certificatemanager_TrustConfigTrustStoreTrustAnchor,
  Certificatemanager_TrustConfigTrustStoreTrustAnchor_GetTypes,
} from "./Certificatemanager_TrustConfigTrustStoreTrustAnchor";

export interface Certificatemanager_TrustConfigTrustStore {
  /*
Set of intermediate CA certificates used for the path building phase of chain validation.
The field is currently not supported if trust config is used for the workload certificate feature.
Structure is documented below.
*/
  IntermediateCas?: Array<Certificatemanager_TrustConfigTrustStoreIntermediateCa>;

  /*
List of Trust Anchors to be used while performing validation against a given TrustStore.
Structure is documented below.
*/
  TrustAnchors?: Array<Certificatemanager_TrustConfigTrustStoreTrustAnchor>;
}

export function Certificatemanager_TrustConfigTrustStore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "IntermediateCas",
      "Set of intermediate CA certificates used for the path building phase of chain validation.\nThe field is currently not supported if trust config is used for the workload certificate feature.\nStructure is documented below.",
      Certificatemanager_TrustConfigTrustStoreIntermediateCa_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TrustAnchors",
      "List of Trust Anchors to be used while performing validation against a given TrustStore.\nStructure is documented below.",
      Certificatemanager_TrustConfigTrustStoreTrustAnchor_GetTypes(),
      false,
      false,
    ),
  ];
}
