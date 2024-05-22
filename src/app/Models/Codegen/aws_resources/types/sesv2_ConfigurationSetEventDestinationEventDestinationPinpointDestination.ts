import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination {
  //
  applicationArn?: string;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "applicationArn", "", [], true, false),
  ];
}
