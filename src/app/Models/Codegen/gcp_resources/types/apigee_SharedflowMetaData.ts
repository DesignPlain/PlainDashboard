import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigee_SharedflowMetaData {
  // The type of entity described
  subType?: string;

  // Time at which the API proxy was created, in milliseconds since epoch.
  createdAt?: string;

  // Time at which the API proxy was most recently modified, in milliseconds since epoch.
  lastModifiedAt?: string;
}

export function apigee_SharedflowMetaData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subType",
      "The type of entity described",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createdAt",
      "Time at which the API proxy was created, in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastModifiedAt",
      "Time at which the API proxy was most recently modified, in milliseconds since epoch.",
      [],
      false,
      false,
    ),
  ];
}
