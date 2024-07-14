import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AttachedClusterError {
  // Human-friendly description of the error.
  message?: string;
}

export function container_AttachedClusterError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "Human-friendly description of the error.",
      [],
      false,
      false,
    ),
  ];
}
