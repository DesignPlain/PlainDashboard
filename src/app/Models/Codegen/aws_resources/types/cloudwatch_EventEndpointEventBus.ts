import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventEndpointEventBus {
  // The ARN of the event bus the endpoint is associated with.
  eventBusArn?: string;
}

export function cloudwatch_EventEndpointEventBus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "eventBusArn",
      "The ARN of the event bus the endpoint is associated with.",
      [],
      true,
      false,
    ),
  ];
}
