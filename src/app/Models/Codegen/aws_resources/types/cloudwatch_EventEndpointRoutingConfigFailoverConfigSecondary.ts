import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary {
  // The name of the secondary Region.
  route?: string;
}

export function cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "route",
      "The name of the secondary Region.",
      [],
      false,
      false,
    ),
  ];
}
