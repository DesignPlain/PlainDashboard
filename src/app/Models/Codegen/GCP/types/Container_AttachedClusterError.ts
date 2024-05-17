import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AttachedClusterError {
  // Human-friendly description of the error.
  Message?: string;
}

export function Container_AttachedClusterError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Message",
      "Human-friendly description of the error.",
      [],
      false,
      false,
    ),
  ];
}
