import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_TriggerApprovalConfig {
  /*
Whether or not approval is needed. If this is set on a build, it will become pending when run,
and will need to be explicitly approved to start.
*/
  approvalRequired?: boolean;
}

export function cloudbuild_TriggerApprovalConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "approvalRequired",
      "Whether or not approval is needed. If this is set on a build, it will become pending when run,\nand will need to be explicitly approved to start.",
      () => [],
      false,
      false,
    ),
  ];
}
