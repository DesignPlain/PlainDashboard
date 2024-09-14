import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_getServiceStatusTraffic,
  cloudrun_getServiceStatusTraffic_GetTypes,
} from "./cloudrun_getServiceStatusTraffic";
import {
  cloudrun_getServiceStatusCondition,
  cloudrun_getServiceStatusCondition_GetTypes,
} from "./cloudrun_getServiceStatusCondition";

export interface cloudrun_getServiceStatus {
  /*
ObservedGeneration is the 'Generation' of the Route that was last processed by the
controller.

Clients polling for completed reconciliation should poll until observedGeneration =
metadata.generation and the Ready condition's status is True or False.
*/
  observedGeneration?: number;

  /*
Traffic specifies how to distribute traffic over a collection of Knative Revisions
and Configurations
*/
  traffics?: Array<cloudrun_getServiceStatusTraffic>;

  /*
From RouteStatus. URL holds the url that will distribute traffic over the provided traffic
targets. It generally has the form
https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
*/
  url?: string;

  // Array of observed Service Conditions, indicating the current ready state of the service.
  conditions?: Array<cloudrun_getServiceStatusCondition>;

  /*
From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created
from this Service's Configuration. It might not be ready yet, for that use
LatestReadyRevisionName.
*/
  latestCreatedRevisionName?: string;

  /*
From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision
stamped out from this Service's Configuration that has had its "Ready" condition become
"True".
*/
  latestReadyRevisionName?: string;
}

export function cloudrun_getServiceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "latestReadyRevisionName",
      'From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision\nstamped out from this Service\'s Configuration that has had its "Ready" condition become\n"True".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "observedGeneration",
      "ObservedGeneration is the 'Generation' of the Route that was last processed by the\ncontroller.\n\nClients polling for completed reconciliation should poll until observedGeneration =\nmetadata.generation and the Ready condition's status is True or False.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "traffics",
      "Traffic specifies how to distribute traffic over a collection of Knative Revisions\nand Configurations",
      () => cloudrun_getServiceStatusTraffic_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "From RouteStatus. URL holds the url that will distribute traffic over the provided traffic\ntargets. It generally has the form\nhttps://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "Array of observed Service Conditions, indicating the current ready state of the service.",
      () => cloudrun_getServiceStatusCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latestCreatedRevisionName",
      "From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created\nfrom this Service's Configuration. It might not be ready yet, for that use\nLatestReadyRevisionName.",
      () => [],
      true,
      false,
    ),
  ];
}
