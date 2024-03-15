import { FeatureFleetDefaultMemberConfigConfigmanagement } from "./FeatureFleetDefaultMemberConfigConfigmanagement";
import { FeatureFleetDefaultMemberConfigMesh } from "./FeatureFleetDefaultMemberConfigMesh";
import { FeatureFleetDefaultMemberConfigPolicycontroller } from "./FeatureFleetDefaultMemberConfigPolicycontroller";

export interface FeatureFleetDefaultMemberConfig {
  /*
Config Management spec
Structure is documented below.
*/
  Configmanagement?: FeatureFleetDefaultMemberConfigConfigmanagement;

  /*
Service Mesh spec
Structure is documented below.
*/
  Mesh?: FeatureFleetDefaultMemberConfigMesh;

  /*
Policy Controller spec
Structure is documented below.
*/
  Policycontroller?: FeatureFleetDefaultMemberConfigPolicycontroller;
}
