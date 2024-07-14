import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicequotas_getTemplatesTemplate {
  // Indicates whether the quota is global.
  globalQuota?: boolean;

  // Quota identifier.
  quotaCode?: string;

  // Quota name.
  quotaName?: string;

  // AWS Region to which the quota increases apply.
  region?: string;

  // (Required) Service identifier.
  serviceCode?: string;

  // Service name.
  serviceName?: string;

  // Unit of measurement.
  unit?: string;

  // (Required) The new, increased value for the quota.
  value?: number;
}

export function servicequotas_getTemplatesTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "Unit of measurement.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "value",
      "(Required) The new, increased value for the quota.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "globalQuota",
      "Indicates whether the quota is global.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "quotaCode",
      "Quota identifier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "quotaName",
      "Quota name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS Region to which the quota increases apply.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceCode",
      "(Required) Service identifier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "Service name.",
      [],
      true,
      false,
    ),
  ];
}
