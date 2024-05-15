import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_PatchDeploymentPatchConfigZypper,
  Osconfig_PatchDeploymentPatchConfigZypper_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigZypper";
import {
  Osconfig_PatchDeploymentPatchConfigApt,
  Osconfig_PatchDeploymentPatchConfigApt_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigApt";
import {
  Osconfig_PatchDeploymentPatchConfigGoo,
  Osconfig_PatchDeploymentPatchConfigGoo_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigGoo";
import {
  Osconfig_PatchDeploymentPatchConfigPostStep,
  Osconfig_PatchDeploymentPatchConfigPostStep_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPostStep";
import {
  Osconfig_PatchDeploymentPatchConfigPreStep,
  Osconfig_PatchDeploymentPatchConfigPreStep_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigPreStep";
import {
  Osconfig_PatchDeploymentPatchConfigYum,
  Osconfig_PatchDeploymentPatchConfigYum_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigYum";
import {
  Osconfig_PatchDeploymentPatchConfigWindowsUpdate,
  Osconfig_PatchDeploymentPatchConfigWindowsUpdate_GetTypes,
} from "./Osconfig_PatchDeploymentPatchConfigWindowsUpdate";

export interface Osconfig_PatchDeploymentPatchConfig {
  // Allows the patch job to run on Managed instance groups (MIGs).
  MigInstancesAllowed?: boolean;

  /*
Windows update settings. Use this setting to override the default Windows patch rules.
Structure is documented below.
*/
  WindowsUpdate?: Osconfig_PatchDeploymentPatchConfigWindowsUpdate;

  /*
zypper update settings. Use this setting to override the default zypper patch rules.
Structure is documented below.
*/
  Zypper?: Osconfig_PatchDeploymentPatchConfigZypper;

  /*
Apt update settings. Use this setting to override the default apt patch rules.
Structure is documented below.
*/
  Apt?: Osconfig_PatchDeploymentPatchConfigApt;

  /*
goo update settings. Use this setting to override the default goo patch rules.
Structure is documented below.
*/
  Goo?: Osconfig_PatchDeploymentPatchConfigGoo;

  /*
The ExecStep to run after the patch update.
Structure is documented below.
*/
  PostStep?: Osconfig_PatchDeploymentPatchConfigPostStep;

  /*
The ExecStep to run before the patch update.
Structure is documented below.
*/
  PreStep?: Osconfig_PatchDeploymentPatchConfigPreStep;

  /*
Post-patch reboot settings.
Possible values are: `DEFAULT`, `ALWAYS`, `NEVER`.
*/
  RebootConfig?: string;

  /*
Yum update settings. Use this setting to override the default yum patch rules.
Structure is documented below.
*/
  Yum?: Osconfig_PatchDeploymentPatchConfigYum;
}

export function Osconfig_PatchDeploymentPatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PostStep",
      "The ExecStep to run after the patch update.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPostStep_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PreStep",
      "The ExecStep to run before the patch update.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigPreStep_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "RebootConfig",
      "Post-patch reboot settings.\nPossible values are: `DEFAULT`, `ALWAYS`, `NEVER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Goo",
      "goo update settings. Use this setting to override the default goo patch rules.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigGoo_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WindowsUpdate",
      "Windows update settings. Use this setting to override the default Windows patch rules.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigWindowsUpdate_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Zypper",
      "zypper update settings. Use this setting to override the default zypper patch rules.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigZypper_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Apt",
      "Apt update settings. Use this setting to override the default apt patch rules.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigApt_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Yum",
      "Yum update settings. Use this setting to override the default yum patch rules.\nStructure is documented below.",
      Osconfig_PatchDeploymentPatchConfigYum_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "MigInstancesAllowed",
      "Allows the patch job to run on Managed instance groups (MIGs).",
      [],
      false,
      true,
    ),
  ];
}
