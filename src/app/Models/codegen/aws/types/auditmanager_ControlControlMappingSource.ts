import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  auditmanager_ControlControlMappingSourceSourceKeyword,
  auditmanager_ControlControlMappingSourceSourceKeyword_GetTypes,
} from "./auditmanager_ControlControlMappingSourceSourceKeyword";

export interface auditmanager_ControlControlMappingSource {
  /*
Type of data source for evidence collection. If `source_set_up_option` is manual, the only valid value is `MANUAL`. If `source_set_up_option` is automated, valid values are `AWS_Cloudtrail`, `AWS_Config`, `AWS_Security_Hub`, or `AWS_API_Call`.

The following arguments are optional:
*/
  sourceType?: string;

  // Instructions for troubleshooting the control.
  troubleshootingText?: string;

  // Description of the source.
  sourceDescription?: string;

  // Frequency of evidence collection. Valid values are `DAILY`, `WEEKLY`, or `MONTHLY`.
  sourceFrequency?: string;

  //
  sourceId?: string;

  // The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. See `source_keyword` below.
  sourceKeyword?: auditmanager_ControlControlMappingSourceSourceKeyword;

  // Name of the source.
  sourceName?: string;

  // The setup option for the data source. This option reflects if the evidence collection is automated or manual. Valid values are `System_Controls_Mapping` (automated) and `Procedural_Controls_Mapping` (manual).
  sourceSetUpOption?: string;
}

export function auditmanager_ControlControlMappingSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceType",
      "Type of data source for evidence collection. If `source_set_up_option` is manual, the only valid value is `MANUAL`. If `source_set_up_option` is automated, valid values are `AWS_Cloudtrail`, `AWS_Config`, `AWS_Security_Hub`, or `AWS_API_Call`.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "troubleshootingText",
      "Instructions for troubleshooting the control.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceDescription",
      "Description of the source.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFrequency",
      "Frequency of evidence collection. Valid values are `DAILY`, `WEEKLY`, or `MONTHLY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceId",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sourceKeyword",
      "The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. See `source_keyword` below.",
      () => auditmanager_ControlControlMappingSourceSourceKeyword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceName",
      "Name of the source.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceSetUpOption",
      "The setup option for the data source. This option reflects if the evidence collection is automated or manual. Valid values are `System_Controls_Mapping` (automated) and `Procedural_Controls_Mapping` (manual).",
      () => [],
      true,
      false,
    ),
  ];
}
