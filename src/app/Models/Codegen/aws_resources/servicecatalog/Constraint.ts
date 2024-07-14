import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ConstraintArgs {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // Description of the constraint.
  description?: string;

  // Constraint parameters in JSON format. The syntax depends on the constraint type. See details below.
  parameters?: string;

  // Portfolio identifier.
  portfolioId?: string;

  // Product identifier.
  productId?: string;

  /*
Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `RESOURCE_UPDATE`, `STACKSET`, and `TEMPLATE`.

The following arguments are optional:
*/
  type?: string;
}
export class Constraint extends Resource {
  // Owner of the constraint.
  public owner?: string;

  // Constraint parameters in JSON format. The syntax depends on the constraint type. See details below.
  public parameters?: string;

  // Portfolio identifier.
  public portfolioId?: string;

  // Product identifier.
  public productId?: string;

  //
  public status?: string;

  /*
Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `RESOURCE_UPDATE`, `STACKSET`, and `TEMPLATE`.

The following arguments are optional:
*/
  public type?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Description of the constraint.
  public description?: string;

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
        "description",
        "Description of the constraint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parameters",
        "Constraint parameters in JSON format. The syntax depends on the constraint type. See details below.",
        [],
        true,
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
        "productId",
        "Product identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `RESOURCE_UPDATE`, `STACKSET`, and `TEMPLATE`.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
