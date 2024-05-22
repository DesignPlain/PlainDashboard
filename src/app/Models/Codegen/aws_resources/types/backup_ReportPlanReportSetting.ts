import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backup_ReportPlanReportSetting {
  // Specifies the list of regions a report covers.
  regions?: Array<string>;

  // Identifies the report template for the report. Reports are built using a report template. The report templates are: `RESOURCE_COMPLIANCE_REPORT` | `CONTROL_COMPLIANCE_REPORT` | `BACKUP_JOB_REPORT` | `COPY_JOB_REPORT` | `RESTORE_JOB_REPORT`.
  reportTemplate?: string;

  // Specifies the list of accounts a report covers.
  accounts?: Array<string>;

  // Specifies the Amazon Resource Names (ARNs) of the frameworks a report covers.
  frameworkArns?: Array<string>;

  // Specifies the number of frameworks a report covers.
  numberOfFrameworks?: number;

  // Specifies the list of Organizational Units a report covers.
  organizationUnits?: Array<string>;
}

export function backup_ReportPlanReportSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "accounts",
      "Specifies the list of accounts a report covers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "frameworkArns",
      "Specifies the Amazon Resource Names (ARNs) of the frameworks a report covers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfFrameworks",
      "Specifies the number of frameworks a report covers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "organizationUnits",
      "Specifies the list of Organizational Units a report covers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "Specifies the list of regions a report covers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reportTemplate",
      "Identifies the report template for the report. Reports are built using a report template. The report templates are: `RESOURCE_COMPLIANCE_REPORT` | `CONTROL_COMPLIANCE_REPORT` | `BACKUP_JOB_REPORT` | `COPY_JOB_REPORT` | `RESTORE_JOB_REPORT`.",
      [],
      true,
      true,
    ),
  ];
}
