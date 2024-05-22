import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appintegrations_getEventIntegrationEventFilter {
  // The source of the events.
  source?: string;
}

export function appintegrations_getEventIntegrationEventFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "source",
      "The source of the events.",
      [],
      true,
      false,
    ),
  ];
}
