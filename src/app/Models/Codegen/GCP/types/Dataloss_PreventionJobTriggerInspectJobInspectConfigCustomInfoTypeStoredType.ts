import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType {
  /*
(Output)
The creation timestamp of an inspectTemplate. Set by the server.
*/
  CreateTime?: string;

  /*
Resource name of the requested StoredInfoType, for example `organizations/433245324/storedInfoTypes/432452342`
or `projects/project-id/storedInfoTypes/432452342`.
*/
  Name?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "(Output)\nThe creation timestamp of an inspectTemplate. Set by the server.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Resource name of the requested StoredInfoType, for example `organizations/433245324/storedInfoTypes/432452342`\nor `projects/project-id/storedInfoTypes/432452342`.",
      [],
      true,
      false,
    ),
  ];
}
