import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepFileExec,
  Osconfig_GuestPoliciesRecipeUpdateStepFileExec_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepFileExec";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation,
  Osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation,
  Osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepScriptRun,
  Osconfig_GuestPoliciesRecipeUpdateStepScriptRun_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepScriptRun";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction,
  Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation,
  Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation";
import {
  Osconfig_GuestPoliciesRecipeUpdateStepFileCopy,
  Osconfig_GuestPoliciesRecipeUpdateStepFileCopy_GetTypes,
} from "./Osconfig_GuestPoliciesRecipeUpdateStepFileCopy";

export interface Osconfig_GuestPoliciesRecipeUpdateStep {
  /*
Executes an artifact or local file.
Structure is documented below.
*/
  FileExec?: Osconfig_GuestPoliciesRecipeUpdateStepFileExec;

  /*
Installs an MSI file.
Structure is documented below.
*/
  MsiInstallation?: Osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation;

  /*
Installs an rpm file via the rpm utility.
Structure is documented below.
*/
  RpmInstallation?: Osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation;

  /*
Runs commands in a shell.
Structure is documented below.
*/
  ScriptRun?: Osconfig_GuestPoliciesRecipeUpdateStepScriptRun;

  /*
Extracts an archive into the specified directory.
Structure is documented below.
*/
  ArchiveExtraction?: Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction;

  /*
Installs a deb file via dpkg.
Structure is documented below.
*/
  DpkgInstallation?: Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation;

  /*
Copies a file onto the instance.
Structure is documented below.
*/
  FileCopy?: Osconfig_GuestPoliciesRecipeUpdateStepFileCopy;
}

export function Osconfig_GuestPoliciesRecipeUpdateStep_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "FileExec",
      "Executes an artifact or local file.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepFileExec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MsiInstallation",
      "Installs an MSI file.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepMsiInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RpmInstallation",
      "Installs an rpm file via the rpm utility.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepRpmInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ScriptRun",
      "Runs commands in a shell.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepScriptRun_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ArchiveExtraction",
      "Extracts an archive into the specified directory.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepArchiveExtraction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DpkgInstallation",
      "Installs a deb file via dpkg.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepDpkgInstallation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FileCopy",
      "Copies a file onto the instance.\nStructure is documented below.",
      Osconfig_GuestPoliciesRecipeUpdateStepFileCopy_GetTypes(),
      false,
      false,
    ),
  ];
}
