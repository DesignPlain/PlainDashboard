import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apigateway_UsagePlanQuotaSettings,
  apigateway_UsagePlanQuotaSettings_GetTypes,
} from '../types/apigateway_UsagePlanQuotaSettings';
import {
  apigateway_UsagePlanThrottleSettings,
  apigateway_UsagePlanThrottleSettings_GetTypes,
} from '../types/apigateway_UsagePlanThrottleSettings';
import {
  apigateway_UsagePlanApiStage,
  apigateway_UsagePlanApiStage_GetTypes,
} from '../types/apigateway_UsagePlanApiStage';

export interface UsagePlanArgs {
  // Description of a usage plan.
  description?: string;

  // Name of the usage plan.
  name?: string;

  // AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
  productCode?: string;

  // Quota of the usage plan.
  quotaSettings?: apigateway_UsagePlanQuotaSettings;

  //
  tags?: Map<string, string>;

  // Throttling limits of the usage plan.
  throttleSettings?: apigateway_UsagePlanThrottleSettings;

  // Associated API stages of the usage plan.
  apiStages?: Array<apigateway_UsagePlanApiStage>;
}
export class UsagePlan extends DS_Resource {
  // Quota of the usage plan.
  public quotaSettings?: apigateway_UsagePlanQuotaSettings;

  // Associated API stages of the usage plan.
  public apiStages?: Array<apigateway_UsagePlanApiStage>;

  // ARN
  public arn?: string;

  // AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.
  public productCode?: string;

  //
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Throttling limits of the usage plan.
  public throttleSettings?: apigateway_UsagePlanThrottleSettings;

  // Description of a usage plan.
  public description?: string;

  // Name of the usage plan.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the usage plan.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'productCode',
        'AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'quotaSettings',
        'Quota of the usage plan.',
        () => apigateway_UsagePlanQuotaSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'throttleSettings',
        'Throttling limits of the usage plan.',
        () => apigateway_UsagePlanThrottleSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'apiStages',
        'Associated API stages of the usage plan.',
        () => apigateway_UsagePlanApiStage_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of a usage plan.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
