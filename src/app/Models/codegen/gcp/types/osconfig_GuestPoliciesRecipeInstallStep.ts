import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction,
  osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction";
import {
  osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation,
  osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation";
import {
  osconfig_GuestPoliciesRecipeInstallStepFileCopy,
  osconfig_GuestPoliciesRecipeInstallStepFileCopy_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepFileCopy";
import {
  osconfig_GuestPoliciesRecipeInstallStepFileExec,
  osconfig_GuestPoliciesRecipeInstallStepFileExec_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepFileExec";
import {
  osconfig_GuestPoliciesRecipeInstallStepMsiInstallation,
  osconfig_GuestPoliciesRecipeInstallStepMsiInstallation_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepMsiInstallation";
import {
  osconfig_GuestPoliciesRecipeInstallStepRpmInstallation,
  osconfig_GuestPoliciesRecipeInstallStepRpmInstallation_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepRpmInstallation";
import {
  osconfig_GuestPoliciesRecipeInstallStepScriptRun,
  osconfig_GuestPoliciesRecipeInstallStepScriptRun_GetTypes,
} from "./osconfig_GuestPoliciesRecipeInstallStepScriptRun";

export interface osconfig_GuestPoliciesRecipeInstallStep {
  /*
Installs an MSI file.
Structure is documented below.
*/
  msiInstallation?: osconfig_GuestPoliciesRecipeInstallStepMsiInstallation;

  /*
Installs an rpm file via the rpm utility.
Structure is documented below.
*/
  rpmInstallation?: osconfig_GuestPoliciesRecipeInstallStepRpmInstallation;

  /*
Runs commands in a shell.
Structure is documented below.
*/
  scriptRun?: osconfig_GuestPoliciesRecipeInstallStepScriptRun;

  /*
Extracts an archive into the specified directory.
Structure is documented below.
*/
  archiveExtraction?: osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction;

  /*
Installs a deb file via dpkg.
Structure is documented below.
*/
  dpkgInstallation?: osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation;

  /*
Copies a file onto the instance.
Structure is documented below.
*/
  fileCopy?: osconfig_GuestPoliciesRecipeInstallStepFileCopy;

  /*
Executes an artifact or local file.
Structure is documented below.
*/
  fileExec?: osconfig_GuestPoliciesRecipeInstallStepFileExec;
}

export function osconfig_GuestPoliciesRecipeInstallStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dpkgInstallation",
      "Installs a deb file via dpkg.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fileCopy",
      "Copies a file onto the instance.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepFileCopy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fileExec",
      "Executes an artifact or local file.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepFileExec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "msiInstallation",
      "Installs an MSI file.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepMsiInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rpmInstallation",
      "Installs an rpm file via the rpm utility.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepRpmInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scriptRun",
      "Runs commands in a shell.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepScriptRun_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "archiveExtraction",
      "Extracts an archive into the specified directory.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction_GetTypes(),
      false,
      false,
    ),
  ];
}
