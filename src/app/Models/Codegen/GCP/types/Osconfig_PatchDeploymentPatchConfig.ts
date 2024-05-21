import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_PatchDeploymentPatchConfigPostStep,
  osconfig_PatchDeploymentPatchConfigPostStep_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigPostStep";
import {
  osconfig_PatchDeploymentPatchConfigYum,
  osconfig_PatchDeploymentPatchConfigYum_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigYum";
import {
  osconfig_PatchDeploymentPatchConfigGoo,
  osconfig_PatchDeploymentPatchConfigGoo_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigGoo";
import {
  osconfig_PatchDeploymentPatchConfigPreStep,
  osconfig_PatchDeploymentPatchConfigPreStep_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigPreStep";
import {
  osconfig_PatchDeploymentPatchConfigWindowsUpdate,
  osconfig_PatchDeploymentPatchConfigWindowsUpdate_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigWindowsUpdate";
import {
  osconfig_PatchDeploymentPatchConfigZypper,
  osconfig_PatchDeploymentPatchConfigZypper_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigZypper";
import {
  osconfig_PatchDeploymentPatchConfigApt,
  osconfig_PatchDeploymentPatchConfigApt_GetTypes,
} from "./osconfig_PatchDeploymentPatchConfigApt";

export interface osconfig_PatchDeploymentPatchConfig {
  /*
The ExecStep to run before the patch update.
Structure is documented below.
*/
  preStep?: osconfig_PatchDeploymentPatchConfigPreStep;

  /*
Post-patch reboot settings.
Possible values are: `DEFAULT`, `ALWAYS`, `NEVER`.
*/
  rebootConfig?: string;

  /*
Windows update settings. Use this setting to override the default Windows patch rules.
Structure is documented below.
*/
  windowsUpdate?: osconfig_PatchDeploymentPatchConfigWindowsUpdate;

  /*
zypper update settings. Use this setting to override the default zypper patch rules.
Structure is documented below.
*/
  zypper?: osconfig_PatchDeploymentPatchConfigZypper;

  /*
Apt update settings. Use this setting to override the default apt patch rules.
Structure is documented below.
*/
  apt?: osconfig_PatchDeploymentPatchConfigApt;

  // Allows the patch job to run on Managed instance groups (MIGs).
  migInstancesAllowed?: boolean;

  /*
The ExecStep to run after the patch update.
Structure is documented below.
*/
  postStep?: osconfig_PatchDeploymentPatchConfigPostStep;

  /*
Yum update settings. Use this setting to override the default yum patch rules.
Structure is documented below.
*/
  yum?: osconfig_PatchDeploymentPatchConfigYum;

  /*
goo update settings. Use this setting to override the default goo patch rules.
Structure is documented below.
*/
  goo?: osconfig_PatchDeploymentPatchConfigGoo;
}

export function osconfig_PatchDeploymentPatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "postStep",
      "The ExecStep to run after the patch update.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigPostStep_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "yum",
      "Yum update settings. Use this setting to override the default yum patch rules.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigYum_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "preStep",
      "The ExecStep to run before the patch update.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigPreStep_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zypper",
      "zypper update settings. Use this setting to override the default zypper patch rules.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigZypper_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "apt",
      "Apt update settings. Use this setting to override the default apt patch rules.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigApt_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "migInstancesAllowed",
      "Allows the patch job to run on Managed instance groups (MIGs).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "goo",
      "goo update settings. Use this setting to override the default goo patch rules.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigGoo_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "rebootConfig",
      "Post-patch reboot settings.\nPossible values are: `DEFAULT`, `ALWAYS`, `NEVER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "windowsUpdate",
      "Windows update settings. Use this setting to override the default Windows patch rules.\nStructure is documented below.",
      osconfig_PatchDeploymentPatchConfigWindowsUpdate_GetTypes(),
      false,
      true,
    ),
  ];
}
