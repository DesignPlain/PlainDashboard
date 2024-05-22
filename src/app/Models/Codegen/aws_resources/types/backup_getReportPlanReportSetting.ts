import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backup_getReportPlanReportSetting {
  // Specifies the number of frameworks a report covers.
  numberOfFrameworks?: number;

  // (Optional) Specifies the list of Organizational Units a report covers.
  organizationUnits?: Array<string>;

  // (Optional) Specifies the list of regions a report covers.
  regions?: Array<string>;

  // Identifies the report template for the report. Reports are built using a report template.
  reportTemplate?: string;

  // (Optional) Specifies the list of accounts a report covers.
  accounts?: Array<string>;

  // ARNs of the frameworks a report covers.
  frameworkArns?: Array<string>;
}

export function backup_getReportPlanReportSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "organizationUnits",
      "(Optional) Specifies the list of Organizational Units a report covers.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "(Optional) Specifies the list of regions a report covers.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reportTemplate",
      "Identifies the report template for the report. Reports are built using a report template.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accounts",
      "(Optional) Specifies the list of accounts a report covers.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "frameworkArns",
      "ARNs of the frameworks a report covers.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfFrameworks",
      "Specifies the number of frameworks a report covers.",
      [],
      true,
      false,
    ),
  ];
}
