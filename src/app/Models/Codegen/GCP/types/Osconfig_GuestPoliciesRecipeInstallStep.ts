import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_GuestPoliciesRecipeInstallStepFileCopy,
  Osconfig_GuestPoliciesRecipeInstallStepFileCopy_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepFileCopy";
import {
  Osconfig_GuestPoliciesRecipeInstallStepFileExec,
  Osconfig_GuestPoliciesRecipeInstallStepFileExec_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepFileExec";
import {
  Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation,
  Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation";
import {
  Osconfig_GuestPoliciesRecipeInstallStepRpmInstallation,
  Osconfig_GuestPoliciesRecipeInstallStepRpmInstallation_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepRpmInstallation";
import {
  Osconfig_GuestPoliciesRecipeInstallStepScriptRun,
  Osconfig_GuestPoliciesRecipeInstallStepScriptRun_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepScriptRun";
import {
  Osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction,
  Osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction";
import {
  Osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation,
  Osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation";

export interface Osconfig_GuestPoliciesRecipeInstallStep {
  /*
Extracts an archive into the specified directory.
Structure is documented below.
*/
  ArchiveExtraction?: Osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction;

  /*
Installs a deb file via dpkg.
Structure is documented below.
*/
  DpkgInstallation?: Osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation;

  /*
Copies a file onto the instance.
Structure is documented below.
*/
  FileCopy?: Osconfig_GuestPoliciesRecipeInstallStepFileCopy;

  /*
Executes an artifact or local file.
Structure is documented below.
*/
  FileExec?: Osconfig_GuestPoliciesRecipeInstallStepFileExec;

  /*
Installs an MSI file.
Structure is documented below.
*/
  MsiInstallation?: Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation;

  /*
Installs an rpm file via the rpm utility.
Structure is documented below.
*/
  RpmInstallation?: Osconfig_GuestPoliciesRecipeInstallStepRpmInstallation;

  /*
Runs commands in a shell.
Structure is documented below.
*/
  ScriptRun?: Osconfig_GuestPoliciesRecipeInstallStepScriptRun;
}

export function Osconfig_GuestPoliciesRecipeInstallStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "FileCopy",
      "Copies a file onto the instance.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepFileCopy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FileExec",
      "Executes an artifact or local file.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepFileExec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MsiInstallation",
      "Installs an MSI file.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepMsiInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RpmInstallation",
      "Installs an rpm file via the rpm utility.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepRpmInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ScriptRun",
      "Runs commands in a shell.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepScriptRun_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ArchiveExtraction",
      "Extracts an archive into the specified directory.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepArchiveExtraction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DpkgInstallation",
      "Installs a deb file via dpkg.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeInstallStepDpkgInstallation_GetTypes(),
      false,
      false,
    ),
  ];
}
