import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TemplateArgs {
  // The new, increased value for the quota.
  value?: number;

  // Quota identifier. To find the quota code for a specific quota, use the aws.servicequotas.ServiceQuota data source.
  quotaCode?: string;

  // AWS Region to which the template applies.
  region?: string;

  // Service identifier. To find the service code value for an AWS service, use the aws.servicequotas.getService data source.
  serviceCode?: string;
}
export class Template extends DS_Resource {
  // Indicates whether the quota is global.
  public globalQuota?: boolean;

  // Quota identifier. To find the quota code for a specific quota, use the aws.servicequotas.ServiceQuota data source.
  public quotaCode?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "value",
        "The new, increased value for the quota.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "quotaCode",
        "Quota identifier. To find the quota code for a specific quota, use the aws.servicequotas.ServiceQuota data source.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "AWS Region to which the template applies.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceCode",
        "Service identifier. To find the service code value for an AWS service, use the aws.servicequotas.getService data source.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
