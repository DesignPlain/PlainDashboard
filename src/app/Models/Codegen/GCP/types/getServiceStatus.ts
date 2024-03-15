import { getServiceStatusTraffic } from "./getServiceStatusTraffic";
import { getServiceStatusCondition } from "./getServiceStatusCondition";

export interface getServiceStatus {
  /*
ObservedGeneration is the 'Generation' of the Route that was last processed by the
controller.

Clients polling for completed reconciliation should poll until observedGeneration =
metadata.generation and the Ready condition's status is True or False.
*/
  ObservedGeneration?: number;

  /*
Traffic specifies how to distribute traffic over a collection of Knative Revisions
and Configurations
*/
  Traffics?: Array<getServiceStatusTraffic>;

  /*
From RouteStatus. URL holds the url that will distribute traffic over the provided traffic
targets. It generally has the form
https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
*/
  Url?: string;

  // Array of observed Service Conditions, indicating the current ready state of the service.
  Conditions?: Array<getServiceStatusCondition>;

  /*
From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created
from this Service's Configuration. It might not be ready yet, for that use
LatestReadyRevisionName.
*/
  LatestCreatedRevisionName?: string;

  /*
From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision
stamped out from this Service's Configuration that has had its "Ready" condition become
"True".
*/
  LatestReadyRevisionName?: string;
}
