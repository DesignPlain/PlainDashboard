import { GuestPoliciesRecipeInstallStepMsiInstallation } from "./GuestPoliciesRecipeInstallStepMsiInstallation";
import { GuestPoliciesRecipeInstallStepRpmInstallation } from "./GuestPoliciesRecipeInstallStepRpmInstallation";
import { GuestPoliciesRecipeInstallStepScriptRun } from "./GuestPoliciesRecipeInstallStepScriptRun";
import { GuestPoliciesRecipeInstallStepArchiveExtraction } from "./GuestPoliciesRecipeInstallStepArchiveExtraction";
import { GuestPoliciesRecipeInstallStepDpkgInstallation } from "./GuestPoliciesRecipeInstallStepDpkgInstallation";
import { GuestPoliciesRecipeInstallStepFileCopy } from "./GuestPoliciesRecipeInstallStepFileCopy";
import { GuestPoliciesRecipeInstallStepFileExec } from "./GuestPoliciesRecipeInstallStepFileExec";

export interface GuestPoliciesRecipeInstallStep {
  /*
Installs an MSI file.
Structure is documented below.
*/
  MsiInstallation?: GuestPoliciesRecipeInstallStepMsiInstallation;

  /*
Installs an rpm file via the rpm utility.
Structure is documented below.
*/
  RpmInstallation?: GuestPoliciesRecipeInstallStepRpmInstallation;

  /*
Runs commands in a shell.
Structure is documented below.
*/
  ScriptRun?: GuestPoliciesRecipeInstallStepScriptRun;

  /*
Extracts an archive into the specified directory.
Structure is documented below.
*/
  ArchiveExtraction?: GuestPoliciesRecipeInstallStepArchiveExtraction;

  /*
Installs a deb file via dpkg.
Structure is documented below.
*/
  DpkgInstallation?: GuestPoliciesRecipeInstallStepDpkgInstallation;

  /*
Copies a file onto the instance.
Structure is documented below.
*/
  FileCopy?: GuestPoliciesRecipeInstallStepFileCopy;

  /*
Executes an artifact or local file.
Structure is documented below.
*/
  FileExec?: GuestPoliciesRecipeInstallStepFileExec;
}
