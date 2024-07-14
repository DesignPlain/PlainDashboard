import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig,
  sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig_GetTypes,
} from "./sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig";

export interface sagemaker_DataQualityJobDefinitionNetworkConfig {
  // Whether to encrypt all communications between the instances used for the monitoring jobs. Choose `true` to encrypt communications. Encryption provides greater security for distributed jobs, but the processing might take longer.
  enableInterContainerTrafficEncryption?: boolean;

  // Whether to allow inbound and outbound network calls to and from the containers used for the monitoring job.
  enableNetworkIsolation?: boolean;

  // Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. Fields are documented below.
  vpcConfig?: sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig;
}

export function sagemaker_DataQualityJobDefinitionNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableInterContainerTrafficEncryption",
      "Whether to encrypt all communications between the instances used for the monitoring jobs. Choose `true` to encrypt communications. Encryption provides greater security for distributed jobs, but the processing might take longer.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableNetworkIsolation",
      "Whether to allow inbound and outbound network calls to and from the containers used for the monitoring job.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcConfig",
      "Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. Fields are documented below.",
      sagemaker_DataQualityJobDefinitionNetworkConfigVpcConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
