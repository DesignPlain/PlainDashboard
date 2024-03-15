export interface VMwareClusterStatusCondition {
  /*
(Output)
Machine-readable message indicating details about last transition.
*/
  Reason?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  State?: string;

  /*
(Output)
Type of the condition.
(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
*/
  Type?: string;

  /*
(Output)
Last time the condition transit from one status to another.
*/
  LastTransitionTime?: string;

  /*
(Output)
Human-readable message indicating details about last transition.
*/
  Message?: string;
}
