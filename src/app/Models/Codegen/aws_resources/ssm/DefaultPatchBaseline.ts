import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
export class DefaultPatchBaseline extends Resource {
  /*
ID of the patch baseline.
Can be an ID or an ARN.
When specifying an AWS-provided patch baseline, must be the ARN.
*/
  public baselineId?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "baselineId",
        "ID of the patch baseline.\nCan be an ID or an ARN.\nWhen specifying an AWS-provided patch baseline, must be the ARN.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "operatingSystem",
        "The operating system the patch baseline applies to.\nValid values are\n`AMAZON_LINUX`,\n`AMAZON_LINUX_2`,\n`AMAZON_LINUX_2022`,\n`CENTOS`,\n`DEBIAN`,\n`MACOS`,\n`ORACLE_LINUX`,\n`RASPBIAN`,\n`REDHAT_ENTERPRISE_LINUX`,\n`ROCKY_LINUX`,\n`SUSE`,\n`UBUNTU`, and\n`WINDOWS`.",
        [],
        true,
        true,
      ),
    ];
  }
}
