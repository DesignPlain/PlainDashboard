import { ServiceStatusTraffic } from "./ServiceStatusTraffic";
import { ServiceStatusCondition } from "./ServiceStatusCondition";

export interface ServiceStatus {
  /*
(Output)
From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created
from this Service's Configuration. It might not be ready yet, for that use
LatestReadyRevisionName.
*/
  LatestCreatedRevisionName?: string;

  /*
(Output)
From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision
stamped out from this Service's Configuration that has had its "Ready" condition become
"True".
*/
  LatestReadyRevisionName?: string;

  /*
(Output)
ObservedGeneration is the 'Generation' of the Route that was last processed by the
controller.
Clients polling for completed reconciliation should poll until observedGeneration =
metadata.generation and the Ready condition's status is True or False.
*/
  ObservedGeneration?: number;

  /*
Traffic specifies how to distribute traffic over a collection of Knative Revisions
and Configurations
Structure is documented below.
*/
  Traffics?: Array<ServiceStatusTraffic>;

  /*
(Output)
URL displays the URL for accessing tagged traffic targets. URL is displayed in status,
and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,
but may not contain anything else (e.g. basic auth, url path, etc.)
*/
  Url?: string;

  /*
(Output)
Array of observed Service Conditions, indicating the current ready state of the service.
Structure is documented below.
*/
  Conditions?: Array<ServiceStatusCondition>;
}
