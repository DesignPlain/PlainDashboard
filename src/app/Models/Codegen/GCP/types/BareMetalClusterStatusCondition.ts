export interface BareMetalClusterStatusCondition {
  /*
Type of the condition.
(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
*/
  Type?: string;

  /*
(Output)
Last time the condition transit from one status to another.
*/
  LastTransitionTime?: string;

  // Human-readable message indicating details about last transition.
  Message?: string;

  /*
(Output)
A human-readable message of the check failure.
*/
  Reason?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  State?: string;
}
