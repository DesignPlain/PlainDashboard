import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrun_ServiceStatusTraffic,
  cloudrun_ServiceStatusTraffic_GetTypes,
} from './cloudrun_ServiceStatusTraffic';
import {
  cloudrun_ServiceStatusCondition,
  cloudrun_ServiceStatusCondition_GetTypes,
} from './cloudrun_ServiceStatusCondition';

export interface cloudrun_ServiceStatus {
  /*
(Output)
From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision
stamped out from this Service's Configuration that has had its "Ready" condition become
"True".
*/
  latestReadyRevisionName?: string;

  /*
(Output)
ObservedGeneration is the 'Generation' of the Route that was last processed by the
controller.
Clients polling for completed reconciliation should poll until observedGeneration =
metadata.generation and the Ready condition's status is True or False.
*/
  observedGeneration?: number;

  /*
Traffic specifies how to distribute traffic over a collection of Knative Revisions
and Configurations
Structure is documented below.
*/
  traffics?: Array<cloudrun_ServiceStatusTraffic>;

  /*
(Output)
URL displays the URL for accessing tagged traffic targets. URL is displayed in status,
and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,
but may not contain anything else (e.g. basic auth, url path, etc.)
*/
  url?: string;

  /*
(Output)
Array of observed Service Conditions, indicating the current ready state of the service.
Structure is documented below.
*/
  conditions?: Array<cloudrun_ServiceStatusCondition>;

  /*
(Output)
From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created
from this Service's Configuration. It might not be ready yet, for that use
LatestReadyRevisionName.
*/
  latestCreatedRevisionName?: string;
}

export function cloudrun_ServiceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'latestReadyRevisionName',
      '(Output)\nFrom ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision\nstamped out from this Service\'s Configuration that has had its "Ready" condition become\n"True".',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'observedGeneration',
      "(Output)\nObservedGeneration is the 'Generation' of the Route that was last processed by the\ncontroller.\nClients polling for completed reconciliation should poll until observedGeneration =\nmetadata.generation and the Ready condition's status is True or False.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'traffics',
      'Traffic specifies how to distribute traffic over a collection of Knative Revisions\nand Configurations\nStructure is documented below.',
      () => cloudrun_ServiceStatusTraffic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'url',
      '(Output)\nURL displays the URL for accessing tagged traffic targets. URL is displayed in status,\nand is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname,\nbut may not contain anything else (e.g. basic auth, url path, etc.)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'conditions',
      '(Output)\nArray of observed Service Conditions, indicating the current ready state of the service.\nStructure is documented below.',
      () => cloudrun_ServiceStatusCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'latestCreatedRevisionName',
      "(Output)\nFrom ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created\nfrom this Service's Configuration. It might not be ready yet, for that use\nLatestReadyRevisionName.",
      () => [],
      false,
      false,
    ),
  ];
}
