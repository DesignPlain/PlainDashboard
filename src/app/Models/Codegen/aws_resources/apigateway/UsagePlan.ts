import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigateway_UsagePlanThrottleSettings,
  apigateway_UsagePlanThrottleSettings_GetTypes,
} from "../types/apigateway_UsagePlanThrottleSettings";
import {
  apigateway_UsagePlanApiStage,
  apigateway_UsagePlanApiStage_GetTypes,
} from "../types/apigateway_UsagePlanApiStage";
import {
  apigateway_UsagePlanQuotaSettings,
  apigateway_UsagePlanQuotaSettings_GetTypes,
} from "../types/apigateway_UsagePlanQuotaSettings";

export interface UsagePlanArgs {
  // The throttling limits of the usage plan.
  throttleSettings?: apigateway_UsagePlanThrottleSettings;

  // Associated API stages of the usage plan.
  apiStages?: Array<apigateway_UsagePlanApiStage>;

  // Description of a usage plan.
  description?: string;

  // Name of the usage plan.
  name?: string;

  // AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
  productCode?: string;

  // The quota settings of the usage plan.
  quotaSettings?: apigateway_UsagePlanQuotaSettings;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class UsagePlan extends Resource {
  // Description of a usage plan.
  public description?: string;

  // AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
  public productCode?: string;

  // The quota settings of the usage plan.
  public quotaSettings?: apigateway_UsagePlanQuotaSettings;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The throttling limits of the usage plan.
  public throttleSettings?: apigateway_UsagePlanThrottleSettings;

  // Associated API stages of the usage plan.
  public apiStages?: Array<apigateway_UsagePlanApiStage>;

  // Name of the usage plan.
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "productCode",
        "AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "quotaSettings",
        "The quota settings of the usage plan.",
        apigateway_UsagePlanQuotaSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "throttleSettings",
        "The throttling limits of the usage plan.",
        apigateway_UsagePlanThrottleSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "apiStages",
        "Associated API stages of the usage plan.",
        apigateway_UsagePlanApiStage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of a usage plan.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the usage plan.",
        [],
        false,
        false,
      ),
    ];
  }
}
