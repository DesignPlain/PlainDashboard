export interface BareMetalNodePoolStatusCondition {
  /*
(Output)
Last time the condition transit from one status to another.
*/
  LastTransitionTime?: string;

  // Human-readable message indicating details about last transition.
  Message?: string;

  // Machine-readable message indicating details about last transition.
  Reason?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  State?: string;

  /*
Type of the condition.
(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
*/
  Type?: string;
}
