import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface inspector2_OrganizationConfigurationAutoEnable {
  // Whether AWS Lambda code scans are automatically enabled for new members of your Amazon Inspector organization. --Note:-- Lambda code scanning requires Lambda standard scanning to be activated. Consequently, if you are setting this argument to `true`, you must also set the `lambda` argument to `true`. See [Scanning AWS Lambda functions with Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/scanning-lambda.html#lambda-code-scans) for more information.
  lambdaCode?: boolean;

  // Whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector organization.
  ec2?: boolean;

  // Whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector organization.
  ecr?: boolean;

  // Whether Lambda Function scans are automatically enabled for new members of your Amazon Inspector organization.
  lambda?: boolean;
}

export function inspector2_OrganizationConfigurationAutoEnable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "lambdaCode",
      "Whether AWS Lambda code scans are automatically enabled for new members of your Amazon Inspector organization. **Note:** Lambda code scanning requires Lambda standard scanning to be activated. Consequently, if you are setting this argument to `true`, you must also set the `lambda` argument to `true`. See [Scanning AWS Lambda functions with Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/scanning-lambda.html#lambda-code-scans) for more information.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ec2",
      "Whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector organization.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ecr",
      "Whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector organization.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "lambda",
      "Whether Lambda Function scans are automatically enabled for new members of your Amazon Inspector organization.",
      () => [],
      false,
      false,
    ),
  ];
}
