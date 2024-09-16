import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  eventarc_TriggerDestinationCloudRunService,
  eventarc_TriggerDestinationCloudRunService_GetTypes,
} from './eventarc_TriggerDestinationCloudRunService';
import {
  eventarc_TriggerDestinationGke,
  eventarc_TriggerDestinationGke_GetTypes,
} from './eventarc_TriggerDestinationGke';
import {
  eventarc_TriggerDestinationHttpEndpoint,
  eventarc_TriggerDestinationHttpEndpoint_GetTypes,
} from './eventarc_TriggerDestinationHttpEndpoint';
import {
  eventarc_TriggerDestinationNetworkConfig,
  eventarc_TriggerDestinationNetworkConfig_GetTypes,
} from './eventarc_TriggerDestinationNetworkConfig';

export interface eventarc_TriggerDestination {
  // The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`
  workflow?: string;

  // The Cloud Function resource name. Only Cloud Functions V2 is supported. Format projects/{project}/locations/{location}/functions/{function} This is a read-only field. [WARNING] Creating Cloud Functions V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.
  cloudFunction?: string;

  // Cloud Run fully-managed service that receives the events. The service should be running in the same project of the trigger.
  cloudRunService?: eventarc_TriggerDestinationCloudRunService;

  // A GKE service capable of receiving events. The service should be running in the same project as the trigger.
  gke?: eventarc_TriggerDestinationGke;

  // An HTTP endpoint destination described by an URI.
  httpEndpoint?: eventarc_TriggerDestinationHttpEndpoint;

  // Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.
  networkConfig?: eventarc_TriggerDestinationNetworkConfig;
}

export function eventarc_TriggerDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'workflow',
      'The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cloudFunction',
      'The Cloud Function resource name. Only Cloud Functions V2 is supported. Format projects/{project}/locations/{location}/functions/{function} This is a read-only field. [WARNING] Creating Cloud Functions V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'cloudRunService',
      'Cloud Run fully-managed service that receives the events. The service should be running in the same project of the trigger.',
      () => eventarc_TriggerDestinationCloudRunService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'gke',
      'A GKE service capable of receiving events. The service should be running in the same project as the trigger.',
      () => eventarc_TriggerDestinationGke_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'httpEndpoint',
      'An HTTP endpoint destination described by an URI.',
      () => eventarc_TriggerDestinationHttpEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkConfig',
      'Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.',
      () => eventarc_TriggerDestinationNetworkConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
