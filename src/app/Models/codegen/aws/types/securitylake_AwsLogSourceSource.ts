import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface securitylake_AwsLogSourceSource {
  // Specify the Regions where you want to enable Security Lake.
  regions?: Array<string>;

  // The name for a AWS source. This must be a Regionally unique value. Valid values: `ROUTE53`, `VPC_FLOW`, `SH_FINDINGS`, `CLOUD_TRAIL_MGMT`, `LAMBDA_EXECUTION`, `S3_DATA`, `EKS_AUDIT`, `WAF`.
  sourceName?: string;

  /*
The version for a AWS source.
If not specified, the version will be the default.
This must be a Regionally unique value.
*/
  sourceVersion?: string;

  /*
Specify the AWS account information where you want to enable Security Lake.
If not specified, uses all accounts included in the Security Lake.
*/
  accounts?: Array<string>;
}

export function securitylake_AwsLogSourceSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "Specify the Regions where you want to enable Security Lake.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceName",
      "The name for a AWS source. This must be a Regionally unique value. Valid values: `ROUTE53`, `VPC_FLOW`, `SH_FINDINGS`, `CLOUD_TRAIL_MGMT`, `LAMBDA_EXECUTION`, `S3_DATA`, `EKS_AUDIT`, `WAF`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceVersion",
      "The version for a AWS source.\nIf not specified, the version will be the default.\nThis must be a Regionally unique value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accounts",
      "Specify the AWS account information where you want to enable Security Lake.\nIf not specified, uses all accounts included in the Security Lake.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
