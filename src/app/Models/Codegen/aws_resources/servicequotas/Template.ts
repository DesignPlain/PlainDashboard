import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TemplateArgs {
  // Quota identifier. To find the quota code for a specific quota, use the aws.servicequotas.ServiceQuota data source.
  quotaCode?: string;

  // AWS Region to which the template applies.
  region?: string;

  // Service identifier. To find the service code value for an AWS service, use the aws.servicequotas.getService data source.
  serviceCode?: string;

  // The new, increased value for the quota.
  value?: number;
}
export class Template extends Resource {
  // Quota name.
  public quotaName?: string;

  // AWS Region to which the template applies.
  public region?: string;

  // Service identifier. To find the service code value for an AWS service, use the aws.servicequotas.getService data source.
  public serviceCode?: string;

  // Service name.
  public serviceName?: string;

  // Unit of measurement.
  public unit?: string;

  // The new, increased value for the quota.
  public value?: number;

  // Indicates whether the quota is global.
  public globalQuota?: boolean;

  // Quota identifier. To find the quota code for a specific quota, use the aws.servicequotas.ServiceQuota data source.
  public quotaCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "quotaCode",
        "Quota identifier. To find the quota code for a specific quota, use the aws.servicequotas.ServiceQuota data source.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "AWS Region to which the template applies.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceCode",
        "Service identifier. To find the service code value for an AWS service, use the aws.servicequotas.getService data source.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "value",
        "The new, increased value for the quota.",
        [],
        true,
        false,
      ),
    ];
  }
}
