import { TriggerDestinationGke } from "./TriggerDestinationGke";
import { TriggerDestinationHttpEndpoint } from "./TriggerDestinationHttpEndpoint";
import { TriggerDestinationNetworkConfig } from "./TriggerDestinationNetworkConfig";
import { TriggerDestinationCloudRunService } from "./TriggerDestinationCloudRunService";

export interface TriggerDestination {
  // An HTTP endpoint destination described by an URI.
  HttpEndpoint?: TriggerDestinationHttpEndpoint;

  // Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.
  NetworkConfig?: TriggerDestinationNetworkConfig;

  // The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`
  Workflow?: string;

  // The Cloud Function resource name. Only Cloud Functions V2 is supported. Format projects/{project}/locations/{location}/functions/{function} This is a read-only field. [WARNING] Creating Cloud Functions V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.
  CloudFunction?: string;

  // Cloud Run fully-managed service that receives the events. The service should be running in the same project of the trigger.
  CloudRunService?: TriggerDestinationCloudRunService;

  // A GKE service capable of receiving events. The service should be running in the same project as the trigger.
  Gke?: TriggerDestinationGke;
}
