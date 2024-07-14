import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_EventSourceMappingDestinationConfigOnFailure {
  // The Amazon Resource Name (ARN) of the destination resource.
  destinationArn?: string;
}

export function lambda_EventSourceMappingDestinationConfigOnFailure_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destinationArn",
      "The Amazon Resource Name (ARN) of the destination resource.",
      [],
      true,
      false,
    ),
  ];
}
