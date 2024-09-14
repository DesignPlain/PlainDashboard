import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource,
  sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource_GetTypes,
} from "./sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource";
import {
  sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource,
  sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource_GetTypes,
} from "./sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource";

export interface sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig {
  // The constraints resource for a monitoring job. Fields are documented below.
  constraintsResource?: sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;

  // The statistics resource for a monitoring job. Fields are documented below.
  statisticsResource?: sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
}

export function sagemaker_DataQualityJobDefinitionDataQualityBaselineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "constraintsResource",
      "The constraints resource for a monitoring job. Fields are documented below.",
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "statisticsResource",
      "The statistics resource for a monitoring job. Fields are documented below.",
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource_GetTypes(),
      false,
      true,
    ),
  ];
}
