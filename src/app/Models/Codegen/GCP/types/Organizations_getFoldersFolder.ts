import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Organizations_getFoldersFolder {
  // The timestamp of when the folder was last modified
  UpdateTime?: string;

  // The timestamp of when the folder was created
  CreateTime?: string;

  // The timestamp of when the folder was requested to be deleted (if applicable)
  DeleteTime?: string;

  // The display name of the folder
  DisplayName?: string;

  // Entity tag identifier of the folder
  Etag?: string;

  // The id of the folder
  Name?: string;

  // The parent id of the folder
  Parent?: string;

  // The lifecycle state of the folder
  State?: string;
}

export function Organizations_getFoldersFolder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Etag",
      "Entity tag identifier of the folder",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The id of the folder",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Parent",
      "The parent id of the folder",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "The lifecycle state of the folder",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "The timestamp of when the folder was last modified",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "The timestamp of when the folder was created",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeleteTime",
      "The timestamp of when the folder was requested to be deleted (if applicable)",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name of the folder",
      [],
      true,
      false,
    ),
  ];
}
