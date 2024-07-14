import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface folder_OrganizationPolicyBooleanPolicy {
  // If true, then the Policy is enforced. If false, then any configuration is acceptable.
  enforced?: boolean;
}

export function folder_OrganizationPolicyBooleanPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enforced",
      "If true, then the Policy is enforced. If false, then any configuration is acceptable.",
      [],
      true,
      false,
    ),
  ];
}
