import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface globalaccelerator_EndpointGroupPortOverride {
  // The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint, such as the Application Load Balancer or Amazon EC2 instance.
  endpointPort?: number;

  // The listener port that you want to map to a specific endpoint port. This is the port that user traffic arrives to the Global Accelerator on.
  listenerPort?: number;
}

export function globalaccelerator_EndpointGroupPortOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "listenerPort",
      "The listener port that you want to map to a specific endpoint port. This is the port that user traffic arrives to the Global Accelerator on.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "endpointPort",
      "The endpoint port that you want a listener port to be mapped to. This is the port on the endpoint, such as the Application Load Balancer or Amazon EC2 instance.",
      () => [],
      true,
      false,
    ),
  ];
}
