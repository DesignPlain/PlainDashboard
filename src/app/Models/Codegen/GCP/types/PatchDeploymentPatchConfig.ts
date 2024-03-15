import { PatchDeploymentPatchConfigGoo } from "./PatchDeploymentPatchConfigGoo";
import { PatchDeploymentPatchConfigWindowsUpdate } from "./PatchDeploymentPatchConfigWindowsUpdate";
import { PatchDeploymentPatchConfigZypper } from "./PatchDeploymentPatchConfigZypper";
import { PatchDeploymentPatchConfigPostStep } from "./PatchDeploymentPatchConfigPostStep";
import { PatchDeploymentPatchConfigPreStep } from "./PatchDeploymentPatchConfigPreStep";
import { PatchDeploymentPatchConfigYum } from "./PatchDeploymentPatchConfigYum";
import { PatchDeploymentPatchConfigApt } from "./PatchDeploymentPatchConfigApt";

export interface PatchDeploymentPatchConfig {
  /*
Windows update settings. Use this setting to override the default Windows patch rules.
Structure is documented below.
*/
  WindowsUpdate?: PatchDeploymentPatchConfigWindowsUpdate;

  /*
zypper update settings. Use this setting to override the default zypper patch rules.
Structure is documented below.
*/
  Zypper?: PatchDeploymentPatchConfigZypper;

  // Allows the patch job to run on Managed instance groups (MIGs).
  MigInstancesAllowed?: boolean;

  /*
Post-patch reboot settings.
Possible values are: `DEFAULT`, `ALWAYS`, `NEVER`.
*/
  RebootConfig?: string;

  /*
The ExecStep to run after the patch update.
Structure is documented below.
*/
  PostStep?: PatchDeploymentPatchConfigPostStep;

  /*
The ExecStep to run before the patch update.
Structure is documented below.
*/
  PreStep?: PatchDeploymentPatchConfigPreStep;

  /*
Yum update settings. Use this setting to override the default yum patch rules.
Structure is documented below.
*/
  Yum?: PatchDeploymentPatchConfigYum;

  /*
Apt update settings. Use this setting to override the default apt patch rules.
Structure is documented below.
*/
  Apt?: PatchDeploymentPatchConfigApt;

  /*
goo update settings. Use this setting to override the default goo patch rules.
Structure is documented below.
*/
  Goo?: PatchDeploymentPatchConfigGoo;
}
