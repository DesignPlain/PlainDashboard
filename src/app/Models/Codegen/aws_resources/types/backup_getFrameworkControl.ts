import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  backup_getFrameworkControlInputParameter,
  backup_getFrameworkControlInputParameter_GetTypes,
} from "./backup_getFrameworkControlInputParameter";
import {
  backup_getFrameworkControlScope,
  backup_getFrameworkControlScope_GetTypes,
} from "./backup_getFrameworkControlScope";

export interface backup_getFrameworkControl {
  // One or more input parameter blocks. An example of a control with two parameters is: "backup plan frequency is at least daily and the retention period is at least 1 year". The first parameter is daily. The second parameter is 1 year. Detailed below.
  inputParameters?: Array<backup_getFrameworkControlInputParameter>;

  // Backup framework name.
  name?: string;

  // Scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. Detailed below.
  scopes?: Array<backup_getFrameworkControlScope>;
}

export function backup_getFrameworkControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inputParameters",
      'One or more input parameter blocks. An example of a control with two parameters is: "backup plan frequency is at least daily and the retention period is at least 1 year". The first parameter is daily. The second parameter is 1 year. Detailed below.',
      backup_getFrameworkControlInputParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Backup framework name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "Scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. Detailed below.",
      backup_getFrameworkControlScope_GetTypes(),
      true,
      false,
    ),
  ];
}
