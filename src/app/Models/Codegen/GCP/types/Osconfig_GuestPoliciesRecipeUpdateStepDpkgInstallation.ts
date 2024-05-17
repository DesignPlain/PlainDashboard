import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation {
  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;
}

export function Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ArtifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      true,
      false,
    ),
  ];
}
