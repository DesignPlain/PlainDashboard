import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PrincipalPortfolioAssociationArgs {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // Portfolio identifier.
  portfolioId?: string;

  /*
Principal ARN.

The following arguments are optional:
*/
  principalArn?: string;

  // Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid values are `IAM` and `IAM_PATTERN`. Default is `IAM`.
  principalType?: string;
}
export class PrincipalPortfolioAssociation extends DS_Resource {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Portfolio identifier.
  public portfolioId?: string;

  /*
Principal ARN.

The following arguments are optional:
*/
  public principalArn?: string;

  // Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid values are `IAM` and `IAM_PATTERN`. Default is `IAM`.
  public principalType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "portfolioId",
        "Portfolio identifier.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalArn",
        "Principal ARN.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalType",
        'Principal type. Setting this argument empty (e.g., `principal_type = ""`) will result in an error. Valid values are `IAM` and `IAM_PATTERN`. Default is `IAM`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
