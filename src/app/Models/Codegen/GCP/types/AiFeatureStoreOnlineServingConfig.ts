import { AiFeatureStoreOnlineServingConfigScaling } from "./AiFeatureStoreOnlineServingConfigScaling";

export interface AiFeatureStoreOnlineServingConfig {
  /*
Online serving scaling configuration. Only one of fixedNodeCount and scaling can be set. Setting one will reset the other.
Structure is documented below.
*/
  Scaling?: AiFeatureStoreOnlineServingConfigScaling;

  // The number of nodes for each cluster. The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.
  FixedNodeCount?: number;
}
