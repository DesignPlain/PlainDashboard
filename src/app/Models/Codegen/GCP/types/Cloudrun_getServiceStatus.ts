import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_getServiceStatusTraffic,
  Cloudrun_getServiceStatusTraffic_GetTypes,
} from "./Cloudrun_getServiceStatusTraffic";
import {
  Cloudrun_getServiceStatusCondition,
  Cloudrun_getServiceStatusCondition_GetTypes,
} from "./Cloudrun_getServiceStatusCondition";

export interface Cloudrun_getServiceStatus {
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
  Traffics?: Array<Cloudrun_getServiceStatusTraffic>;

  /*
From RouteStatus. URL holds the url that will distribute traffic over the provided traffic
targets. It generally has the form
https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
*/
  Url?: string;

  // Array of observed Service Conditions, indicating the current ready state of the service.
  Conditions?: Array<Cloudrun_getServiceStatusCondition>;

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

export function Cloudrun_getServiceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Url",
      "From RouteStatus. URL holds the url that will distribute traffic over the provided traffic\ntargets. It generally has the form\nhttps://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "Array of observed Service Conditions, indicating the current ready state of the service.",
      Cloudrun_getServiceStatusCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LatestCreatedRevisionName",
      "From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created\nfrom this Service's Configuration. It might not be ready yet, for that use\nLatestReadyRevisionName.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LatestReadyRevisionName",
      'From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision\nstamped out from this Service\'s Configuration that has had its "Ready" condition become\n"True".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ObservedGeneration",
      "ObservedGeneration is the 'Generation' of the Route that was last processed by the\ncontroller.\n\nClients polling for completed reconciliation should poll until observedGeneration =\nmetadata.generation and the Ready condition's status is True or False.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Traffics",
      "Traffic specifies how to distribute traffic over a collection of Knative Revisions\nand Configurations",
      Cloudrun_getServiceStatusTraffic_GetTypes(),
      true,
      false,
    ),
  ];
}
