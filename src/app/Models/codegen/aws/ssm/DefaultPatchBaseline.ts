import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DefaultPatchBaselineArgs {
  /*
ID of the patch baseline.
Can be an ID or an ARN.
When specifying an AWS-provided patch baseline, must be the ARN.
*/
  baselineId?: string;

  /*
The operating system the patch baseline applies to.
Valid values are
`AMAZON_LINUX`,
`AMAZON_LINUX_2`,
`AMAZON_LINUX_2022`,
`CENTOS`,
`DEBIAN`,
`MACOS`,
`ORACLE_LINUX`,
`RASPBIAN`,
`REDHAT_ENTERPRISE_LINUX`,
`ROCKY_LINUX`,
`SUSE`,
`UBUNTU`, and
`WINDOWS`.
*/
  operatingSystem?: string;
}
export class DefaultPatchBaseline extends DS_Resource {
  /*
The operating system the patch baseline applies to.
Valid values are
`AMAZON_LINUX`,
`AMAZON_LINUX_2`,
`AMAZON_LINUX_2022`,
`CENTOS`,
`DEBIAN`,
`MACOS`,
`ORACLE_LINUX`,
`RASPBIAN`,
`REDHAT_ENTERPRISE_LINUX`,
`ROCKY_LINUX`,
`SUSE`,
`UBUNTU`, and
`WINDOWS`.
*/
  public operatingSystem?: string;

  /*
ID of the patch baseline.
Can be an ID or an ARN.
When specifying an AWS-provided patch baseline, must be the ARN.
*/
  public baselineId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "baselineId",
        "ID of the patch baseline.\nCan be an ID or an ARN.\nWhen specifying an AWS-provided patch baseline, must be the ARN.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "operatingSystem",
        "The operating system the patch baseline applies to.\nValid values are\n`AMAZON_LINUX`,\n`AMAZON_LINUX_2`,\n`AMAZON_LINUX_2022`,\n`CENTOS`,\n`DEBIAN`,\n`MACOS`,\n`ORACLE_LINUX`,\n`RASPBIAN`,\n`REDHAT_ENTERPRISE_LINUX`,\n`ROCKY_LINUX`,\n`SUSE`,\n`UBUNTU`, and\n`WINDOWS`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
