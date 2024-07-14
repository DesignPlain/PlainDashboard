import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation {
  // The flags to use when installing the MSI. Defaults to the install flag.
  flags?: Array<string>;

  // Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  allowedExitCodes?: Array<number>;

  // The id of the relevant artifact in the recipe.
  artifactId?: string;
}

export function osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "flags",
      "The flags to use when installing the MSI. Defaults to the install flag.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedExitCodes",
      "Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "artifactId",
      "The id of the relevant artifact in the recipe.",
      [],
      true,
      false,
    ),
  ];
}
