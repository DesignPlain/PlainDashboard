import { GuestPoliciesRecipeUpdateStepFileCopy } from "./GuestPoliciesRecipeUpdateStepFileCopy";
import { GuestPoliciesRecipeUpdateStepFileExec } from "./GuestPoliciesRecipeUpdateStepFileExec";
import { GuestPoliciesRecipeUpdateStepMsiInstallation } from "./GuestPoliciesRecipeUpdateStepMsiInstallation";
import { GuestPoliciesRecipeUpdateStepRpmInstallation } from "./GuestPoliciesRecipeUpdateStepRpmInstallation";
import { GuestPoliciesRecipeUpdateStepScriptRun } from "./GuestPoliciesRecipeUpdateStepScriptRun";
import { GuestPoliciesRecipeUpdateStepArchiveExtraction } from "./GuestPoliciesRecipeUpdateStepArchiveExtraction";
import { GuestPoliciesRecipeUpdateStepDpkgInstallation } from "./GuestPoliciesRecipeUpdateStepDpkgInstallation";

export interface GuestPoliciesRecipeUpdateStep {
  /*
Extracts an archive into the specified directory.
Structure is documented below.
*/
  ArchiveExtraction?: GuestPoliciesRecipeUpdateStepArchiveExtraction;

  /*
Installs a deb file via dpkg.
Structure is documented below.
*/
  DpkgInstallation?: GuestPoliciesRecipeUpdateStepDpkgInstallation;

  /*
Copies a file onto the instance.
Structure is documented below.
*/
  FileCopy?: GuestPoliciesRecipeUpdateStepFileCopy;

  /*
Executes an artifact or local file.
Structure is documented below.
*/
  FileExec?: GuestPoliciesRecipeUpdateStepFileExec;

  /*
Installs an MSI file.
Structure is documented below.
*/
  MsiInstallation?: GuestPoliciesRecipeUpdateStepMsiInstallation;

  /*
Installs an rpm file via the rpm utility.
Structure is documented below.
*/
  RpmInstallation?: GuestPoliciesRecipeUpdateStepRpmInstallation;

  /*
Runs commands in a shell.
Structure is documented below.
*/
  ScriptRun?: GuestPoliciesRecipeUpdateStepScriptRun;
}
