import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PortfolioShareArgs {
  // Portfolio identifier.
  portfolioId?: string;

  // Identifier of the principal with whom you will share the portfolio. Valid values AWS account IDs and ARNs of AWS Organizations and organizational units.
  principalId?: string;

  // Enables or disables Principal sharing when creating the portfolio share. If this flag is not provided, principal sharing is disabled.
  sharePrincipals?: boolean;

  // Whether to enable sharing of `aws.servicecatalog.TagOption` resources when creating the portfolio share.
  shareTagOptions?: boolean;

  /*
Type of portfolio share. Valid values are `ACCOUNT` (an external account), `ORGANIZATION` (a share to every account in an organization), `ORGANIZATIONAL_UNIT`, `ORGANIZATION_MEMBER_ACCOUNT` (a share to an account in an organization).

The following arguments are optional:
*/
  type?: string;

  // Whether to wait (up to the timeout) for the share to be accepted. Organizational shares are automatically accepted.
  waitForAcceptance?: boolean;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;
}
export class PortfolioShare extends Resource {
  // Whether to wait (up to the timeout) for the share to be accepted. Organizational shares are automatically accepted.
  public waitForAcceptance?: boolean;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Whether the shared portfolio is imported by the recipient account. If the recipient is organizational, the share is automatically imported, and the field is always set to true.
  public accepted?: boolean;

  // Portfolio identifier.
  public portfolioId?: string;

  // Identifier of the principal with whom you will share the portfolio. Valid values AWS account IDs and ARNs of AWS Organizations and organizational units.
  public principalId?: string;

  // Enables or disables Principal sharing when creating the portfolio share. If this flag is not provided, principal sharing is disabled.
  public sharePrincipals?: boolean;

  // Whether to enable sharing of `aws.servicecatalog.TagOption` resources when creating the portfolio share.
  public shareTagOptions?: boolean;

  /*
Type of portfolio share. Valid values are `ACCOUNT` (an external account), `ORGANIZATION` (a share to every account in an organization), `ORGANIZATIONAL_UNIT`, `ORGANIZATION_MEMBER_ACCOUNT` (a share to an account in an organization).

The following arguments are optional:
*/
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "portfolioId",
        "Portfolio identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalId",
        "Identifier of the principal with whom you will share the portfolio. Valid values AWS account IDs and ARNs of AWS Organizations and organizational units.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "sharePrincipals",
        "Enables or disables Principal sharing when creating the portfolio share. If this flag is not provided, principal sharing is disabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "shareTagOptions",
        "Whether to enable sharing of `aws.servicecatalog.TagOption` resources when creating the portfolio share.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of portfolio share. Valid values are `ACCOUNT` (an external account), `ORGANIZATION` (a share to every account in an organization), `ORGANIZATIONAL_UNIT`, `ORGANIZATION_MEMBER_ACCOUNT` (a share to an account in an organization).\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForAcceptance",
        "Whether to wait (up to the timeout) for the share to be accepted. Organizational shares are automatically accepted.",
        [],
        false,
        false,
      ),
    ];
  }
}
