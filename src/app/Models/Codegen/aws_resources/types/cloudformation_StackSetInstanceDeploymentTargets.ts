import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudformation_StackSetInstanceDeploymentTargets {
  // The organization root ID or organizational unit (OU) IDs to which StackSets deploys.
  organizationalUnitIds?: Array<string>;
}

export function cloudformation_StackSetInstanceDeploymentTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "organizationalUnitIds",
      "The organization root ID or organizational unit (OU) IDs to which StackSets deploys.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
