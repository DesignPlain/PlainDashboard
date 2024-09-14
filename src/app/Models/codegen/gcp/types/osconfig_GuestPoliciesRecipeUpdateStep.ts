import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation,
  osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation";
import {
  osconfig_GuestPoliciesRecipeUpdateStepFileCopy,
  osconfig_GuestPoliciesRecipeUpdateStepFileCopy_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepFileCopy";
import {
  osconfig_GuestPoliciesRecipeUpdateStepFileExec,
  osconfig_GuestPoliciesRecipeUpdateStepFileExec_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepFileExec";
import {
  osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation,
  osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation";
import {
  osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation,
  osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation";
import {
  osconfig_GuestPoliciesRecipeUpdateStepScriptRun,
  osconfig_GuestPoliciesRecipeUpdateStepScriptRun_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepScriptRun";
import {
  osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction,
  osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction_GetTypes,
} from "./osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction";

export interface osconfig_GuestPoliciesRecipeUpdateStep {
  /*
Runs commands in a shell.
Structure is documented below.
*/
  scriptRun?: osconfig_GuestPoliciesRecipeUpdateStepScriptRun;

  /*
Extracts an archive into the specified directory.
Structure is documented below.
*/
  archiveExtraction?: osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction;

  /*
Installs a deb file via dpkg.
Structure is documented below.
*/
  dpkgInstallation?: osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation;

  /*
Copies a file onto the instance.
Structure is documented below.
*/
  fileCopy?: osconfig_GuestPoliciesRecipeUpdateStepFileCopy;

  /*
Executes an artifact or local file.
Structure is documented below.
*/
  fileExec?: osconfig_GuestPoliciesRecipeUpdateStepFileExec;

  /*
Installs an MSI file.
Structure is documented below.
*/
  msiInstallation?: osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation;

  /*
Installs an rpm file via the rpm utility.
Structure is documented below.
*/
  rpmInstallation?: osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation;
}

export function osconfig_GuestPoliciesRecipeUpdateStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "msiInstallation",
      "Installs an MSI file.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rpmInstallation",
      "Installs an rpm file via the rpm utility.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scriptRun",
      "Runs commands in a shell.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepScriptRun_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "archiveExtraction",
      "Extracts an archive into the specified directory.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dpkgInstallation",
      "Installs a deb file via dpkg.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fileCopy",
      "Copies a file onto the instance.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepFileCopy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fileExec",
      "Executes an artifact or local file.\nStructure is documented below.",
      () => osconfig_GuestPoliciesRecipeUpdateStepFileExec_GetTypes(),
      false,
      false,
    ),
  ];
}
