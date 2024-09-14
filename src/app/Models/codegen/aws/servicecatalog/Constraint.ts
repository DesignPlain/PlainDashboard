import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ConstraintArgs {
  // Product identifier.
  productId?: string;

  /*
Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `RESOURCE_UPDATE`, `STACKSET`, and `TEMPLATE`.

The following arguments are optional:
*/
  type?: string;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // Description of the constraint.
  description?: string;

  // Constraint parameters in JSON format. The syntax depends on the constraint type. See details below.
  parameters?: string;

  // Portfolio identifier.
  portfolioId?: string;
}
export class Constraint extends DS_Resource {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Description of the constraint.
  public description?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "acceptLanguage",
        "Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the constraint.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parameters",
        "Constraint parameters in JSON format. The syntax depends on the constraint type. See details below.",
        () => [],
        true,
        false,
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
        "productId",
        "Product identifier.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of constraint. Valid values are `LAUNCH`, `NOTIFICATION`, `RESOURCE_UPDATE`, `STACKSET`, and `TEMPLATE`.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
    ];
  }
}
