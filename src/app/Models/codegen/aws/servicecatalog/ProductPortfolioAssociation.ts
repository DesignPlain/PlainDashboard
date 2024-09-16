import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
export class ProductPortfolioAssociation extends DS_Resource {
  // Portfolio identifier.
  public portfolioId?: string;

  /*
Product identifier.

The following arguments are optional:
*/
  public productId?: string;

  // Identifier of the source portfolio.
  public sourcePortfolioId?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'acceptLanguage',
        'Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'portfolioId',
        'Portfolio identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'productId',
        'Product identifier.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourcePortfolioId',
        'Identifier of the source portfolio.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
