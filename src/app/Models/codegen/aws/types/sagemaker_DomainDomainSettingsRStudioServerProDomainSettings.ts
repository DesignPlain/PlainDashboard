import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec,
  sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec";

export interface sagemaker_DomainDomainSettingsRStudioServerProDomainSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block above.
  defaultResourceSpec?: sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec;

  // The ARN of the execution role for the RStudioServerPro Domain-level app.
  domainExecutionRoleArn?: string;

  // A URL pointing to an RStudio Connect server.
  rStudioConnectUrl?: string;

  // A URL pointing to an RStudio Package Manager server.
  rStudioPackageManagerUrl?: string;
}

export function sagemaker_DomainDomainSettingsRStudioServerProDomainSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block above.",
      () =>
        sagemaker_DomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "domainExecutionRoleArn",
      "The ARN of the execution role for the RStudioServerPro Domain-level app.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rStudioConnectUrl",
      "A URL pointing to an RStudio Connect server.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rStudioPackageManagerUrl",
      "A URL pointing to an RStudio Package Manager server.",
      () => [],
      false,
      false,
    ),
  ];
}
