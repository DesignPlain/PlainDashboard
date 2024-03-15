import { AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup } from "./AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup";

export interface AiFeatureOnlineStoreFeatureviewFeatureRegistrySource {
  /*
List of features that need to be synced to Online Store.
Structure is documented below.
*/
  FeatureGroups?: Array<AiFeatureOnlineStoreFeatureviewFeatureRegistrySourceFeatureGroup>;
}
