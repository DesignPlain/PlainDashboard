import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_ServiceStatusCondition,
  Cloudrun_ServiceStatusCondition_GetTypes,
} from "./Cloudrun_ServiceStatusCondition";
import {
  Cloudrun_ServiceStatusTraffic,
  Cloudrun_ServiceStatusTraffic_GetTypes,
} from "./Cloudrun_ServiceStatusTraffic";

export interface Cloudrun_ServiceStatus {
  /*
(Output)
Array of observed Service Conditions, indicating the current ready state of the service.
Structure is documented below.
*/
  Conditions?: Array<Cloudrun_ServiceStatusCondition>;

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
  Traffics?: Array<Cloudrun_ServiceStatusTraffic>;

  /*
(Output)
URL displays the URL for accessing tagged traffic targets. URL is displayed in status,
and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,
but may not contain anything else (e.g. basic auth, url path, etc.)
*/
  Url?: string;
}

export function Cloudrun_ServiceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "(Output)\nArray of observed Service Conditions, indicating the current ready state of the service.\nStructure is documented below.",
      Cloudrun_ServiceStatusCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LatestCreatedRevisionName",
      "(Output)\nFrom ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created\nfrom this Service's Configuration. It might not be ready yet, for that use\nLatestReadyRevisionName.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LatestReadyRevisionName",
      '(Output)\nFrom ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision\nstamped out from this Service\'s Configuration that has had its "Ready" condition become\n"True".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ObservedGeneration",
      "(Output)\nObservedGeneration is the 'Generation' of the Route that was last processed by the\ncontroller.\nClients polling for completed reconciliation should poll until observedGeneration =\nmetadata.generation and the Ready condition's status is True or False.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Traffics",
      "Traffic specifies how to distribute traffic over a collection of Knative Revisions\nand Configurations\nStructure is documented below.",
      Cloudrun_ServiceStatusTraffic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Url",
      "(Output)\nURL displays the URL for accessing tagged traffic targets. URL is displayed in status,\nand is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,\nbut may not contain anything else (e.g. basic auth, url path, etc.)",
      [],
      false,
      false,
    ),
  ];
}
