import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType {
  /*
(Output)
The creation timestamp of an inspectTemplate. Set by the server.
*/
  createTime?: string;

  /*
Resource name of the requested StoredInfoType, for example `organizations/433245324/storedInfoTypes/432452342`
or `projects/project-id/storedInfoTypes/432452342`.
*/
  name?: string;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeStoredType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "(Output)\nThe creation timestamp of an inspectTemplate. Set by the server.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Resource name of the requested StoredInfoType, for example `organizations/433245324/storedInfoTypes/432452342`\nor `projects/project-id/storedInfoTypes/432452342`.",
      [],
      true,
      false,
    ),
  ];
}
