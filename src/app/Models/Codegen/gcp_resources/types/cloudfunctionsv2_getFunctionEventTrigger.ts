import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfunctionsv2_getFunctionEventTriggerEventFilter,
  cloudfunctionsv2_getFunctionEventTriggerEventFilter_GetTypes,
} from "./cloudfunctionsv2_getFunctionEventTriggerEventFilter";

export interface cloudfunctionsv2_getFunctionEventTrigger {
  // Output only. The resource name of the Eventarc trigger.
  trigger?: string;

  /*
The region that the trigger will be in. The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.
*/
  triggerRegion?: string;

  // Criteria used to filter events.
  eventFilters?: Array<cloudfunctionsv2_getFunctionEventTriggerEventFilter>;

  // Required. The type of event to observe.
  eventType?: string;

  /*
The name of a Pub/Sub topic in the same project that will be used
as the transport topic for the event delivery.
*/
  pubsubTopic?: string;

  /*
Describes the retry policy in case of function's execution failure.
Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]
*/
  retryPolicy?: string;

  /*
Optional. The email of the trigger's service account. The service account
must have permission to invoke Cloud Run services. If empty, defaults to the
Compute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.
*/
  serviceAccountEmail?: string;
}

export function cloudfunctionsv2_getFunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "trigger",
      "Output only. The resource name of the Eventarc trigger.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "triggerRegion",
      "The region that the trigger will be in. The trigger will only receive\nevents originating in this region. It can be the same\nregion as the function, a different region or multi-region, or the global\nregion. If not provided, defaults to the same region as the function.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "eventFilters",
      "Criteria used to filter events.",
      cloudfunctionsv2_getFunctionEventTriggerEventFilter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventType",
      "Required. The type of event to observe.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pubsubTopic",
      "The name of a Pub/Sub topic in the same project that will be used\nas the transport topic for the event delivery.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "retryPolicy",
      'Describes the retry policy in case of function\'s execution failure.\nRetried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmail",
      "Optional. The email of the trigger's service account. The service account\nmust have permission to invoke Cloud Run services. If empty, defaults to the\nCompute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.",
      [],
      true,
      false,
    ),
  ];
}
