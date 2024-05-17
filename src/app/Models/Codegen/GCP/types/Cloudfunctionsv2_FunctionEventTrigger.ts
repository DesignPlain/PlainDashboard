import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_FunctionEventTriggerEventFilter,
  Cloudfunctionsv2_FunctionEventTriggerEventFilter_GetTypes,
} from "./Cloudfunctionsv2_FunctionEventTriggerEventFilter";

export interface Cloudfunctionsv2_FunctionEventTrigger {
  /*
(Output)
Output only. The resource name of the Eventarc trigger.
*/
  Trigger?: string;

  /*
The region that the trigger will be in. The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.
*/
  TriggerRegion?: string;

  /*
Criteria used to filter events.
Structure is documented below.
*/
  EventFilters?: Array<Cloudfunctionsv2_FunctionEventTriggerEventFilter>;

  // Required. The type of event to observe.
  EventType?: string;

  /*
The name of a Pub/Sub topic in the same project that will be used
as the transport topic for the event delivery.
*/
  PubsubTopic?: string;

  /*
Describes the retry policy in case of function's execution failure.
Retried execution is charged as any other execution.
Possible values are: `RETRY_POLICY_UNSPECIFIED`, `RETRY_POLICY_DO_NOT_RETRY`, `RETRY_POLICY_RETRY`.
*/
  RetryPolicy?: string;

  /*
Optional. The email of the trigger's service account. The service account
must have permission to invoke Cloud Run services. If empty, defaults to the
Compute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.
*/
  ServiceAccountEmail?: string;
}

export function Cloudfunctionsv2_FunctionEventTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EventFilters",
      "Criteria used to filter events.\nStructure is documented below.",
      Cloudfunctionsv2_FunctionEventTriggerEventFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EventType",
      "Required. The type of event to observe.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PubsubTopic",
      "The name of a Pub/Sub topic in the same project that will be used\nas the transport topic for the event delivery.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RetryPolicy",
      "Describes the retry policy in case of function's execution failure.\nRetried execution is charged as any other execution.\nPossible values are: `RETRY_POLICY_UNSPECIFIED`, `RETRY_POLICY_DO_NOT_RETRY`, `RETRY_POLICY_RETRY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "Optional. The email of the trigger's service account. The service account\nmust have permission to invoke Cloud Run services. If empty, defaults to the\nCompute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Trigger",
      "(Output)\nOutput only. The resource name of the Eventarc trigger.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TriggerRegion",
      "The region that the trigger will be in. The trigger will only receive\nevents originating in this region. It can be the same\nregion as the function, a different region or multi-region, or the global\nregion. If not provided, defaults to the same region as the function.",
      [],
      false,
      false,
    ),
  ];
}
