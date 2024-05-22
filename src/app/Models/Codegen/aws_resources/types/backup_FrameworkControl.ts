import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  backup_FrameworkControlScope,
  backup_FrameworkControlScope_GetTypes,
} from "./backup_FrameworkControlScope";
import {
  backup_FrameworkControlInputParameter,
  backup_FrameworkControlInputParameter_GetTypes,
} from "./backup_FrameworkControlInputParameter";

export interface backup_FrameworkControl {
  // The name of a control. This name is between 1 and 256 characters.
  name?: string;

  // The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. Detailed below.
  scope?: backup_FrameworkControlScope;

  // One or more input parameter blocks. An example of a control with two parameters is: "backup plan frequency is at least daily and the retention period is at least 1 year". The first parameter is daily. The second parameter is 1 year. Detailed below.
  inputParameters?: Array<backup_FrameworkControlInputParameter>;
}

export function backup_FrameworkControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a control. This name is between 1 and 256 characters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scope",
      "The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans. Detailed below.",
      backup_FrameworkControlScope_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inputParameters",
      'One or more input parameter blocks. An example of a control with two parameters is: "backup plan frequency is at least daily and the retention period is at least 1 year". The first parameter is daily. The second parameter is 1 year. Detailed below.',
      backup_FrameworkControlInputParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
