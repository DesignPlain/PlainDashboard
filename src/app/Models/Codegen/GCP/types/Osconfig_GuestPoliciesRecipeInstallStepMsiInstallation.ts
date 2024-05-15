import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation {
  // Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  AllowedExitCodes?: Array<number>;

  // The id of the relevant artifact in the recipe.
  ArtifactId?: string;

  // The flags to use when installing the MSI. Defaults to the install flag.
  Flags?: Array<string>;
}

export function Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedExitCodes",
      "Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ArtifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Flags",
      "The flags to use when installing the MSI. Defaults to the install flag.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
