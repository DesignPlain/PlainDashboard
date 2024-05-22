import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitylake_AwsLogSourceSource {
  // Specify the AWS account information where you want to enable Security Lake.
  accounts?: Array<string>;

  // Specify the Regions where you want to enable Security Lake.
  regions?: Array<string>;

  // The name for a AWS source. This must be a Regionally unique value. Valid values: `ROUTE53`, `VPC_FLOW`, `SH_FINDINGS`, `CLOUD_TRAIL_MGMT`, `LAMBDA_EXECUTION`, `S3_DATA`.
  sourceName?: string;

  // The version for a AWS source. This must be a Regionally unique value.
  sourceVersion?: string;
}

export function securitylake_AwsLogSourceSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "accounts",
      "Specify the AWS account information where you want to enable Security Lake.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "Specify the Regions where you want to enable Security Lake.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceName",
      "The name for a AWS source. This must be a Regionally unique value. Valid values: `ROUTE53`, `VPC_FLOW`, `SH_FINDINGS`, `CLOUD_TRAIL_MGMT`, `LAMBDA_EXECUTION`, `S3_DATA`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceVersion",
      "The version for a AWS source. This must be a Regionally unique value.",
      [],
      false,
      false,
    ),
  ];
}
