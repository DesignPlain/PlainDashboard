import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProductPortfolioAssociationArgs {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // Portfolio identifier.
  portfolioId?: string;

  /*
Product identifier.

The following arguments are optional:
*/
  productId?: string;

  // Identifier of the source portfolio.
  sourcePortfolioId?: string;
}
export class ProductPortfolioAssociation extends Resource {
  // Identifier of the source portfolio.
  public sourcePortfolioId?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Portfolio identifier.
  public portfolioId?: string;

  /*
Product identifier.

The following arguments are optional:
*/
  public productId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "productId",
        "Product identifier.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourcePortfolioId",
        "Identifier of the source portfolio.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "portfolioId",
        "Portfolio identifier.",
        [],
        true,
        true,
      ),
    ];
  }
}
