import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfunctionsv2_FunctionEventTriggerEventFilter,
  cloudfunctionsv2_FunctionEventTriggerEventFilter_GetTypes,
} from "./cloudfunctionsv2_FunctionEventTriggerEventFilter";

export interface cloudfunctionsv2_FunctionEventTrigger {
  /*
The name of a Pub/Sub topic in the same project that will be used
as the transport topic for the event delivery.
*/
  pubsubTopic?: string;

  /*
Describes the retry policy in case of function's execution failure.
Retried execution is charged as any other execution.
Possible values are: `RETRY_POLICY_UNSPECIFIED`, `RETRY_POLICY_DO_NOT_RETRY`, `RETRY_POLICY_RETRY`.
*/
  retryPolicy?: string;

  /*
Optional. The email of the trigger's service account. The service account
must have permission to invoke Cloud Run services. If empty, defaults to the
Compute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.
*/
  serviceAccountEmail?: string;

  /*
(Output)
Output only. The resource name of the Eventarc trigger.
*/
  trigger?: string;

  /*
The region that the trigger will be in. The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.
*/
  triggerRegion?: string;

  /*
Criteria used to filter events.
Structure is documented below.
*/
  eventFilters?: Array<cloudfunctionsv2_FunctionEventTriggerEventFilter>;

  // Required. The type of event to observe.
  eventType?: string;
}

export function cloudfunctionsv2_FunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "retryPolicy",
      "Describes the retry policy in case of function's execution failure.\nRetried execution is charged as any other execution.\nPossible values are: `RETRY_POLICY_UNSPECIFIED`, `RETRY_POLICY_DO_NOT_RETRY`, `RETRY_POLICY_RETRY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmail",
      "Optional. The email of the trigger's service account. The service account\nmust have permission to invoke Cloud Run services. If empty, defaults to the\nCompute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "trigger",
      "(Output)\nOutput only. The resource name of the Eventarc trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "triggerRegion",
      "The region that the trigger will be in. The trigger will only receive\nevents originating in this region. It can be the same\nregion as the function, a different region or multi-region, or the global\nregion. If not provided, defaults to the same region as the function.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "eventFilters",
      "Criteria used to filter events.\nStructure is documented below.",
      cloudfunctionsv2_FunctionEventTriggerEventFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventType",
      "Required. The type of event to observe.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pubsubTopic",
      "The name of a Pub/Sub topic in the same project that will be used\nas the transport topic for the event delivery.",
      [],
      false,
      false,
    ),
  ];
}
