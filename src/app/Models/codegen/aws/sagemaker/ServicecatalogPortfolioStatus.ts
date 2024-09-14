import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ServicecatalogPortfolioStatusArgs {
  // Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`.
  status?: string;
}
export class ServicecatalogPortfolioStatus extends DS_Resource {
  // Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "status",
        "Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
