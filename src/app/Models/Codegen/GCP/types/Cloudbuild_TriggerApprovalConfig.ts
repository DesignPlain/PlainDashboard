import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerApprovalConfig {
  /*
Whether or not approval is needed. If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.
*/
  ApprovalRequired?: boolean;
}

export function Cloudbuild_TriggerApprovalConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ApprovalRequired",
      "Whether or not approval is needed. If this is set on a build, it will become pending when run,\nand will need to be explicitly approved to start.",
      [],
      false,
      false,
    ),
  ];
}
