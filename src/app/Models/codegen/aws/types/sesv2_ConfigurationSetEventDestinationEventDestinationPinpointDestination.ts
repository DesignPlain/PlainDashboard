import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination {
  //
  applicationArn?: string;
}

export function sesv2_ConfigurationSetEventDestinationEventDestinationPinpointDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationArn",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
