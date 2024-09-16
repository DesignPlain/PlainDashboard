import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesRecipeInstallStepRpmInstallation {
  // The id of the relevant artifact in the recipe.
  artifactId?: string;
}

export function osconfig_GuestPoliciesRecipeInstallStepRpmInstallation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'artifactId',
      'The id of the relevant artifact in the recipe.',
      () => [],
      true,
      false,
    ),
  ];
}
