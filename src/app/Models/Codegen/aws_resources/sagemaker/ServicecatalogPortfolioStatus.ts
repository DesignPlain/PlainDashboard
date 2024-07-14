import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ServicecatalogPortfolioStatusArgs {
  // Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`.
  status?: string;
}
export class ServicecatalogPortfolioStatus extends Resource {
  // Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "status",
        "Whether Service Catalog is enabled or disabled in SageMaker. Valid values are `Enabled` and `Disabled`.",
        [],
        true,
        false,
      ),
    ];
  }
}
