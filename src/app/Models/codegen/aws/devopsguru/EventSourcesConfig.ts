import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  devopsguru_EventSourcesConfigEventSource,
  devopsguru_EventSourcesConfigEventSource_GetTypes,
} from "../types/devopsguru_EventSourcesConfigEventSource";

export interface EventSourcesConfigArgs {
  // Configuration information about the integration of DevOps Guru as the Consumer via EventBridge with another AWS Service. See `event_sources` below.
  eventSources?: Array<devopsguru_EventSourcesConfigEventSource>;
}
export class EventSourcesConfig extends DS_Resource {
  // Configuration information about the integration of DevOps Guru as the Consumer via EventBridge with another AWS Service. See `event_sources` below.
  public eventSources?: Array<devopsguru_EventSourcesConfigEventSource>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "eventSources",
        "Configuration information about the integration of DevOps Guru as the Consumer via EventBridge with another AWS Service. See `event_sources` below.",
        () => devopsguru_EventSourcesConfigEventSource_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
