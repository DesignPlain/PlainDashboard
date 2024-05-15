import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_SharedflowMetaData {
  // Time at which the API proxy was created, in milliseconds since epoch.
  CreatedAt?: string;

  // Time at which the API proxy was most recently modified, in milliseconds since epoch.
  LastModifiedAt?: string;

  // The type of entity described
  SubType?: string;
}

export function Apigee_SharedflowMetaData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CreatedAt",
      "Time at which the API proxy was created, in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastModifiedAt",
      "Time at which the API proxy was most recently modified, in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SubType",
      "The type of entity described",
      [],
      false,
      false,
    ),
  ];
}
