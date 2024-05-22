import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_UserDefinedFunctionResourceUri {
  // The type of the resource. can be one of `JAR`, `FILE`, and `ARCHIVE`.
  resourceType?: string;

  // The URI for accessing the resource.
  uri?: string;
}

export function glue_UserDefinedFunctionResourceUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The type of the resource. can be one of `JAR`, `FILE`, and `ARCHIVE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "The URI for accessing the resource.",
      [],
      true,
      false,
    ),
  ];
}
