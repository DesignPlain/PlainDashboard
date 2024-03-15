export interface FeatureResourceState {
  /*
(Output)
Whether this Feature has outstanding resources that need to be cleaned up before it can be disabled.
*/
  HasResources?: boolean;

  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  State?: string;
}
