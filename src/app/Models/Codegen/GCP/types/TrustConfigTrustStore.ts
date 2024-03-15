import { TrustConfigTrustStoreIntermediateCa } from "./TrustConfigTrustStoreIntermediateCa";
import { TrustConfigTrustStoreTrustAnchor } from "./TrustConfigTrustStoreTrustAnchor";

export interface TrustConfigTrustStore {
  /*
Set of intermediate CA certificates used for the path building phase of chain validation.
The field is currently not supported if trust config is used for the workload certificate feature.
Structure is documented below.
*/
  IntermediateCas?: Array<TrustConfigTrustStoreIntermediateCa>;

  /*
List of Trust Anchors to be used while performing validation against a given TrustStore.
Structure is documented below.
*/
  TrustAnchors?: Array<TrustConfigTrustStoreTrustAnchor>;
}
