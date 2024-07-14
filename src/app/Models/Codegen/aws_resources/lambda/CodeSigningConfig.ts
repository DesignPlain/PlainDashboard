import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lambda_CodeSigningConfigPolicies,
  lambda_CodeSigningConfigPolicies_GetTypes,
} from "../types/lambda_CodeSigningConfigPolicies";
import {
  lambda_CodeSigningConfigAllowedPublishers,
  lambda_CodeSigningConfigAllowedPublishers_GetTypes,
} from "../types/lambda_CodeSigningConfigAllowedPublishers";

export interface CodeSigningConfigArgs {
  // Descriptive name for this code signing configuration.
  description?: string;

  // A configuration block of code signing policies that define the actions to take if the validation checks fail. Detailed below.
  policies?: lambda_CodeSigningConfigPolicies;

  // A configuration block of allowed publishers as signing profiles for this code signing configuration. Detailed below.
  allowedPublishers?: lambda_CodeSigningConfigAllowedPublishers;
}
export class CodeSigningConfig extends Resource {
  // The date and time that the code signing configuration was last modified.
  public lastModified?: string;

  // A configuration block of code signing policies that define the actions to take if the validation checks fail. Detailed below.
  public policies?: lambda_CodeSigningConfigPolicies;

  // A configuration block of allowed publishers as signing profiles for this code signing configuration. Detailed below.
  public allowedPublishers?: lambda_CodeSigningConfigAllowedPublishers;

  // The Amazon Resource Name (ARN) of the code signing configuration.
  public arn?: string;

  // Unique identifier for the code signing configuration.
  public configId?: string;

  // Descriptive name for this code signing configuration.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "policies",
        "A configuration block of code signing policies that define the actions to take if the validation checks fail. Detailed below.",
        lambda_CodeSigningConfigPolicies_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "allowedPublishers",
        "A configuration block of allowed publishers as signing profiles for this code signing configuration. Detailed below.",
        lambda_CodeSigningConfigAllowedPublishers_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Descriptive name for this code signing configuration.",
        [],
        false,
        false,
      ),
    ];
  }
}
