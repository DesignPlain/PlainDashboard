import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appconfig_EventIntegrationEventFilter {
  // Source of the events.
  source?: string;
}

export function appconfig_EventIntegrationEventFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "source",
      "Source of the events.",
      [],
      true,
      true,
    ),
  ];
}
