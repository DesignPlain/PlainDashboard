import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
