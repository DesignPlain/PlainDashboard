import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Projects_OrganizationPolicyRestorePolicy {
  // May only be set to true. If set, then the default Policy is restored.
  Default?: boolean;
}

export function Projects_OrganizationPolicyRestorePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Default",
      "May only be set to true. If set, then the default Policy is restored.",
      [],
      true,
      false,
    ),
  ];
}
