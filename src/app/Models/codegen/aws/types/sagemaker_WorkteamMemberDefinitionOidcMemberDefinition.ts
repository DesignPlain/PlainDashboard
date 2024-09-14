import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_WorkteamMemberDefinitionOidcMemberDefinition {
  // A list of comma separated strings that identifies user groups in your OIDC IdP. Each user group is made up of a group of private workers.
  groups?: Array<string>;
}

export function sagemaker_WorkteamMemberDefinitionOidcMemberDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "groups",
      "A list of comma separated strings that identifies user groups in your OIDC IdP. Each user group is made up of a group of private workers.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
