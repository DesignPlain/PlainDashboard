import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_GuestPoliciesRecipeInstallStep,
  Osconfig_GuestPoliciesRecipeInstallStep_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStep";
import {
  Osconfig_GuestPoliciesRecipeUpdateStep,
  Osconfig_GuestPoliciesRecipeUpdateStep_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStep";
import {
  Osconfig_GuestPoliciesRecipeArtifact,
  Osconfig_GuestPoliciesRecipeArtifact_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeArtifact";

export interface Osconfig_GuestPoliciesRecipe {
  /*
Resources available to be used in the steps in the recipe.
Structure is documented below.
*/
  Artifacts?: Array<Osconfig_GuestPoliciesRecipeArtifact>;

  /*
Default is INSTALLED. The desired state the agent should maintain for this recipe.
INSTALLED: The software recipe is installed on the instance but won't be updated to new versions.
INSTALLED_KEEP_UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version,
if a higher version of the recipe is assigned to this instance.
REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.
Default value is `INSTALLED`.
Possible values are: `INSTALLED`, `UPDATED`, `REMOVED`.
*/
  DesiredState?: string;

  /*
Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation.
Any steps taken (including partially completed steps) are not rolled back.
Structure is documented below.
*/
  InstallSteps?: Array<Osconfig_GuestPoliciesRecipeInstallStep>;

  /*
Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.
Names are also used to identify resources which helps to determine whether guest policies have conflicts.
This means that requests to create multiple recipes with the same name and version are rejected since they
could potentially have conflicting assignments.
*/
  Name?: string;

  /*
Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe.
Any steps taken (including partially completed steps) are not rolled back.
Structure is documented below.
*/
  UpdateSteps?: Array<Osconfig_GuestPoliciesRecipeUpdateStep>;

  // The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).
  Version?: string;
}

export function Osconfig_GuestPoliciesRecipe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Artifacts",
      "Resources available to be used in the steps in the recipe.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeArtifact_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DesiredState",
      "Default is INSTALLED. The desired state the agent should maintain for this recipe.\nINSTALLED: The software recipe is installed on the instance but won't be updated to new versions.\nINSTALLED_KEEP_UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version,\nif a higher version of the recipe is assigned to this instance.\nREMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.\nDefault value is `INSTALLED`.\nPossible values are: `INSTALLED`, `UPDATED`, `REMOVED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstallSteps",
      "Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation.\nAny steps taken (including partially completed steps) are not rolled back.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStep_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.\nNames are also used to identify resources which helps to determine whether guest policies have conflicts.\nThis means that requests to create multiple recipes with the same name and version are rejected since they\ncould potentially have conflicting assignments.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UpdateSteps",
      "Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe.\nAny steps taken (including partially completed steps) are not rolled back.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStep_GetTypes(),
      false,
      false,
    ),
  ];
}
