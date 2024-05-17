import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Ml_EngineModelDefaultVersion {
  // The name specified for the version when it was created.
  Name?: string;
}

export function Ml_EngineModelDefaultVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name specified for the version when it was created.",
      [],
      true,
      true,
    ),
  ];
}
