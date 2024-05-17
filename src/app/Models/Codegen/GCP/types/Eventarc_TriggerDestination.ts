import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Eventarc_TriggerDestinationGke,
  Eventarc_TriggerDestinationGke_GetTypes,
} from "./Eventarc_TriggerDestinationGke";
import {
  Eventarc_TriggerDestinationHttpEndpoint,
  Eventarc_TriggerDestinationHttpEndpoint_GetTypes,
} from "./Eventarc_TriggerDestinationHttpEndpoint";
import {
  Eventarc_TriggerDestinationNetworkConfig,
  Eventarc_TriggerDestinationNetworkConfig_GetTypes,
} from "./Eventarc_TriggerDestinationNetworkConfig";
import {
  Eventarc_TriggerDestinationCloudRunService,
  Eventarc_TriggerDestinationCloudRunService_GetTypes,
} from "./Eventarc_TriggerDestinationCloudRunService";

export interface Eventarc_TriggerDestination {
  // The Cloud Function resource name. Only Cloud Functions V2 is supported. Format projects/{project}/locations/{location}/functions/{function} This is a read-only field. [WARNING] Creating Cloud Functions V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.
  CloudFunction?: string;

  // Cloud Run fully-managed service that receives the events. The service should be running in the same project of the trigger.
  CloudRunService?: Eventarc_TriggerDestinationCloudRunService;

  // A GKE service capable of receiving events. The service should be running in the same project as the trigger.
  Gke?: Eventarc_TriggerDestinationGke;

  // An HTTP endpoint destination described by an URI.
  HttpEndpoint?: Eventarc_TriggerDestinationHttpEndpoint;

  // Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.
  NetworkConfig?: Eventarc_TriggerDestinationNetworkConfig;

  // The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`
  Workflow?: string;
}

export function Eventarc_TriggerDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CloudFunction",
      "The Cloud Function resource name. Only Cloud Functions V2 is supported. Format projects/{project}/locations/{location}/functions/{function} This is a read-only field. [WARNING] Creating Cloud Functions V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudRunService",
      "Cloud Run fully-managed service that receives the events. The service should be running in the same project of the trigger.",
      Eventarc_TriggerDestinationCloudRunService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Gke",
      "A GKE service capable of receiving events. The service should be running in the same project as the trigger.",
      Eventarc_TriggerDestinationGke_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HttpEndpoint",
      "An HTTP endpoint destination described by an URI.",
      Eventarc_TriggerDestinationHttpEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NetworkConfig",
      "Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.",
      Eventarc_TriggerDestinationNetworkConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Workflow",
      "The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`",
      [],
      false,
      false,
    ),
  ];
}
