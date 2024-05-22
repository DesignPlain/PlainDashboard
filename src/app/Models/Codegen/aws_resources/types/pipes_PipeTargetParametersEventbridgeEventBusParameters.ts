import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface pipes_PipeTargetParametersEventbridgeEventBusParameters {
  // A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
  detailType?: string;

  // The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is abcde.veo.
  endpointId?: string;

  // List of AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
  resources?: Array<string>;

  // Source resource of the pipe (typically an ARN).
  source?: string;

  // The time stamp of the event, per RFC3339. If no time stamp is provided, the time stamp of the PutEvents call is used. This is the JSON path to the field in the event e.g. $.detail.timestamp
  time?: string;
}

export function pipes_PipeTargetParametersEventbridgeEventBusParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "source",
      "Source resource of the pipe (typically an ARN).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "time",
      "The time stamp of the event, per RFC3339. If no time stamp is provided, the time stamp of the PutEvents call is used. This is the JSON path to the field in the event e.g. $.detail.timestamp",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "detailType",
      "A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointId",
      "The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is abcde.veo.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "List of AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
